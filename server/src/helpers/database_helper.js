const initData = require('../../initSetup.json');
const TinyDB = require('tinydb');
const databaseData = new TinyDB('./database.db');

// right now either template or objects
// const getRelationshipObjectByType = (type) => {
//   const relationships = [];
//   databaseData._data.data.forEach((object) => {
//     if (object.type === type) {
//       const newRel = {
//         id: object.id,
//         type: object.type,
//         name: object.name,
//         _id: object._id,
//       };
//       relationships.push(newRel);
//     }
//   });
//   return relationships;
// };

// return just the template object data
// const getObjectTemplate = () => {
//   return databaseData._data.data.find((object) => object.type === 'Template');
// };

// get all the object relationships
// const getRelationshipObjects = (ids) => {
//   return ids.map((id) => {
//     // should we remove relationship relationships?
//     const { relationships, ...data } = getObjectById(id);
//     return data;
//   });
// };

// const buildObject = (object) => {
//   // object relationship ids
//   const relationshipIDs = object['relationships'];
//   // lets get all the relationships
//   const relationships = getRelationshipObjects(relationshipIDs);
//   // lets not mutate the object
//   const { id, type, name, _id } = object;
//   // return build object
//   return { id, type, name, relationships, _id };
// };

// const getRelationships = (type) => {
//   return getRelationshipObjectByType(type);
// };
//
// const getTemplate = (type) => {
//   const template = getObjectTemplate();
//   return template[type];
// };
//
// // update related relashinships
// const updateRelationships = (object, updateID) => {
//   const { _id } = getObjectById(object.id);
//   databaseData.findById(_id, (err, item) => {
//     const isMatch = item.relationships.find((relID) => relID === updateID);
//     if (!isMatch) {
//       item.relationships.push(updateID);
//     }
//   });
//
//   databaseData.flush();
// };

// const saveObject = (object) => {
//   const tempObject = { ...object };
//   let { id, name, relationships, _id } = tempObject.data;
//
//   // if id is zero we need to create new object first
//   if (id === 0) {
//     const newObject = createObject(object.data);
//     id = newObject.id;
//     _id = newObject._id;
//   }
//
//   // get relationship ids from relationships
//   const relationshipsIDs = relationships.map((object) => {
//     updateRelationships(object, id);
//     return object.id;
//   });
//
//   databaseData.findById(_id, (err, item) => {
//     if (err) {
//       console.log(err);
//     }
//
//     item.name = name;
//     item.relationships = relationshipsIDs;
//   });
//   databaseData.flush();
//
//   return { Template: tempObject.Template, data: tempObject.data };
// };

// const createObject = (object) => {
//   // lets find the last id
//   let lastID = object.id;
//   databaseData.forEach((err, item) => {
//     if (item.id > lastID) {
//       lastID = item.id;
//     }
//   });
//   const newID = lastID + 1;
//   object.id = newID;
//
//   // new obj do not have rel yet so we need to set a blank one
//   object.relationships = [];
//   databaseData.appendItem(object);
//   databaseData.flush();
//   return getObjectById(object.id);
// };
//
// const removeRelationships = (obj) => {
//   obj.relationships.forEach((id) => {
//     const relObj = getObjectById(id);
//     databaseData.findById(relObj._id, (err, item) => {
//       if (err) {
//         console.log(err);
//       }
//
//       item.relationships = item.relationships.filter(
//         (relID) => relID !== obj.id
//       );
//     });
//   });
// };
//
// const deleteObject = (_id) => {
//   const obj = databaseData.findById(_id, (err, item) => {
//     if (err) {
//       console.log(err);
//     }
//     return item;
//   });
//
//   removeRelationships(obj);
//
//   const throwError = databaseData.findByIdAndRemove(_id, (err, item) => {
//     if (err) {
//       return err;
//     }
//   });
//
//   // if delete return true
//   // otherwise false
//   return throwError ? throwError : null;
// };

// return object based on ID
const getObjectById = (id) => {
  const object = databaseData._data.objects.find((object) => object.id === id);
  return { ...object };
};

const getTemplate = (type) => {
  const template = databaseData._data.templates.find(
    (template) => template.type === type
  );

  return { ...template };
};

// helper function to build relationships
const relationshipHelper = (id, keyID, relID) => {
  // if id is 0 we need to fetch all relationships
  if (id === 0) {
    const relationshipIDs = [];
    databaseData._data.relationships.forEach((relationship) => {
      if (!relationshipIDs.includes(relationship[keyID])) {
        relationshipIDs.push(relationship[keyID]);
      }
    });

    return relationshipIDs.map((id) => getObjectById(id));
  }

  let relationships = [];

  databaseData._data.relationships.forEach((relationship) => {
    if (relationship[keyID] === id) {
      // solution for not mutating state
      relationships = [
        ...relationships,
        { ...getObjectById(relationship[relID]) },
      ];
    }
  });

  return relationships;
};

const getRelationships = (id, type) => {
  if (type === 'Activity') {
    return relationshipHelper(id, 'from', 'to');
  }
  if (type === 'Tag') {
    return relationshipHelper(id, 'to', 'from');
  }
};

/**
 *  Main functions below
 */

const getObject = (id) => {
  // to recreate data if none is present

  if (databaseData._data.data.length === 0) {
    databaseData.flush(); // flush data to file
    populate(); // remake from init file
  }
  const object = getObjectById(id); // gets main object
  const template = getTemplate(object.type); // gets template
  const relationships = getRelationships(id, object.type); // gets relationships
  object.relationships = relationships; // adds relationships to main object

  return { template, data: object };
};

const saveObject = (newObject) => {
  // console.log(newObject);
  const { id, type, name, relationships } = newObject;
  const relObjects = databaseData._data.relationships.filter(
    (obj) => obj.from !== id
  );

  databaseData._data.relationships = [];
  const newRelationships = [];
  relationships.forEach((obj, index) => {
    newRelationships.push({ id: index, from: id, to: obj.id });
  });

  relObjects.forEach((obj) => {
    newRelationships.push({ id: obj.id, from: obj.from, to: obj.to });
  });

  databaseData._data.relationships = newRelationships; // some reason this wont save
  databaseData.flush();

  databaseData._data.objects.map((object) => {
    if (object.id == id) {
      object.id = id;
      object.type = type;
      object.name = name;
    }
  });

  return getObject(id);
};

module.exports = {
  getObject,
  getRelationships,
  saveObject,
  // createObject,
  // getTemplate,
  // deleteObject,
};

// way for me to recreate data if needed
const populate = () => {
  databaseData.flush(); // flush memory
  // now make sure it fully empty
  databaseData._data.objects = [];
  databaseData._data.templates = [];
  databaseData._data.relationships = [];

  databaseData._data.templates = initData[0].templates;
  databaseData._data.objects = initData[1].objects;
  databaseData._data.relationships = initData[2].relationships;

  databaseData.flush();
};
