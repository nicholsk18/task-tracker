const initData = require('../../initSetup.json');
const TinyDB = require('tinydb');
const databaseData = new TinyDB('./database.db');

// right now either template or objects
const getRelationshipObjectByType = (type) => {
  const relationships = [];
  databaseData._data.data.forEach((object) => {
    if (object.type === type) {
      const newRel = {
        id: object.id,
        type: object.type,
        name: object.name,
        _id: object._id,
      };
      relationships.push(newRel);
    }
  });
  return relationships;
};

// return just the template object data
const getObjectTemplate = () => {
  return databaseData._data.data.find((object) => object.type === 'Template');
};

// return object based on ID
const getObjectById = (id) => {
  return databaseData._data.data.find((object) => object.id === id);
};

// get all the object relationships
const getRelationshipObjects = (ids) => {
  return ids.map((id) => {
    // should we remove relationship relationships?
    const { relationships, ...data } = getObjectById(id);
    return data;
  });
};

const buildObject = (object) => {
  // object relationship ids
  const relationshipIDs = object['relationships'];
  // lets get all the relationships
  const relationships = getRelationshipObjects(relationshipIDs);
  // lets not mutate the object
  const { id, type, name, _id } = object;
  // return build object
  return { id, type, name, relationships, _id };
};

/**
 *  Main functions below
 */

const getObject = (id) => {
  // to recreate data if none is present
  if (databaseData._data.data.length === 0) {
    databaseData.flush(); // flush data to file
    databaseData._data.data = []; // clear it since we know it was already cleared
    populate(); // remake from init file
  }

  const template = getObjectTemplate();
  const object = getObjectById(id);
  const readyObject = buildObject(object);
  // send object and template
  const templatePart = template[readyObject.type];
  return { Template: templatePart, data: readyObject };
};

const getRelationships = (type) => {
  return getRelationshipObjectByType(type);
};

const getTemplate = (type) => {
  const template = getObjectTemplate();
  return template[type];
};

// update related relashinships
const updateRelationships = (object, updateID) => {
  const { _id } = getObjectById(object.id);
  databaseData.findById(_id, (err, item) => {
    const isMatch = item.relationships.find((relID) => relID === updateID);
    if (!isMatch) {
      item.relationships.push(updateID);
    }
  });

  databaseData.flush();
};

const saveObject = (object) => {
  const tempObject = { ...object };
  let { id, name, relationships, _id } = tempObject.data;

  // if id is zero we need to create new object first
  if (id === 0) {
    const newObject = createObject(object.data);
    id = newObject.id;
    _id = newObject._id;
  }

  // get relationship ids from relationships
  const relationshipsIDs = relationships.map((object) => {
    updateRelationships(object, id);
    return object.id;
  });

  databaseData.findById(_id, (err, item) => {
    if (err) {
      console.log(err);
    }

    item.name = name;
    item.relationships = relationshipsIDs;
  });
  databaseData.flush();

  return { Template: tempObject.Template, data: tempObject.data };
};

const createObject = (object) => {
  // lets find the last id
  let lastID = object.id;
  databaseData.forEach((err, item) => {
    if (item.id > lastID) {
      lastID = item.id;
    }
  });
  const newID = lastID + 1;
  object.id = newID;

  // new obj do not have rel yet so we need to set a blank one
  object.relationships = [];
  databaseData.appendItem(object);
  databaseData.flush();
  return getObjectById(object.id);
};

const removeRelationships = (obj) => {
  obj.relationships.forEach((id) => {
    const relObj = getObjectById(id);
    databaseData.findById(relObj._id, (err, item) => {
      if (err) {
        console.log(err);
      }

      item.relationships = item.relationships.filter(
        (relID) => relID !== obj.id
      );
    });
  });
};

const deleteObject = (_id) => {
  const obj = databaseData.findById(_id, (err, item) => {
    if (err) {
      console.log(err);
    }
    return item;
  });

  removeRelationships(obj);

  const throwError = databaseData.findByIdAndRemove(_id, (err, item) => {
    if (err) {
      return err;
    }
  });

  // if delete return true
  // otherwise false
  return throwError ? throwError : null;
};

module.exports = {
  getObject,
  getRelationships,
  saveObject,
  createObject,
  getTemplate,
  deleteObject,
};

// way for me to recreate data if needed
const populate = () => {
  databaseData.flush();

  databaseData.insertItem(initData[0]['Templates']);
  initData[1]['objects'].forEach((object) => {
    databaseData.insertItem(object);
  });

  databaseData.flush();
};
