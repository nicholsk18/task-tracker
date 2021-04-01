const initData = require('../../initSetup.json');
const TinyDB = require('tinydb');
databaseData = new TinyDB('./database.db');

// right now either template or objects
const getPart = (objectName) => {
  return databaseData._data.data.find(
    (object) => object[objectName] !== undefined
  )[objectName];
};

// return just the template object data
const getObjectTemplate = () => {
  return getPart('Templates');
};

// return object based on ID
const getObjectById = (id) => {
  // get objects from an Object?
  const objects = getPart('objects');
  return objects.find((object) => object.id === id);
};

// helper function to get related objects
const getObjectsByType = (type) => {
  const objects = getPart('objects');
  return objects.filter((object) => object.type === type);
};

// get all the object relationships
const getRelationships = (to, ids) => {
  const objects = getObjectsByType(to);
  return ids.map((id) => {
    // should we remove relationship relationships?
    const { relationships, ...data } = getObjectById(id);
    return data;
  });
};

const buildObject = (object, template) => {
  // object relationship ids
  const relationshipIDs = object['relationships'];

  // help to get right part of template
  const objectType = object['type'];

  // type that objects needs relationships from
  const relationshipTo = template[objectType].relationships.to;

  // lets get all the relationships
  const relationships = getRelationships(relationshipTo, relationshipIDs);

  // lets not mutate the object
  const { id, type, name } = object;
  // return build object
  return { id, type, name, relationships };
};

const getObject = (id) => {
  const template = getObjectTemplate();
  const object = getObjectById(id);
  const readyObject = buildObject(object, template);
  // send object and template
  return { Template: template, object: readyObject };
};

//*** OLD STUFF BELOW ***//

// const getRelationships = (relationshipType) => {
//   // this is fine for now
//   const type = relationshipType === 'Tags' ? 'Tag' : 'Activity';
//   const relationships = []; // what we will send back
//
//   databaseData.forEach((err, object) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//
//     if (object.Template.type == type) {
//       relationships.push({ id: object.id, name: object.fields.name });
//     }
//   });
//
//   return relationships;
// };
//
// const saveObject = (object) => {
//   const _id = getGuidId(object.id);
//   const index = databaseData.findByIdAndRemove(_id, (err, item, idx) => {
//     if (err) {
//       return err;
//     }
//
//     return idx;
//   });
//
//   // lets put it back from where we got it
//   databaseData.insertItem(object, index);
// };

module.exports = {
  getObject,
  // getRelationships,
  // saveObject,
};

// way for me to recreate data if needed
const populate = () => {
  initData.forEach((object) => {
    databaseData.insertItem(object);
    databaseData.flush();
  });
};
