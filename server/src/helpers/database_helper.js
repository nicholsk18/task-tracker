const initData = require('../../initSetup.json');
const TinyDB = require('tinydb');
databaseData = new TinyDB('./database.db');

// right now either template or objects
const getPart = (objectName) => {
  return databaseData._data.data.find((object) => object.type === objectName);
};

// return just the template object data
const getObjectTemplate = () => {
  return databaseData._data.data.find((object) => object.type === 'Template');
};

const getAllObjectIDs = () => {
  return getPart('objects').map((object) => object.id);
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

const buildObject = (object, template) => {
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
  const template = getObjectTemplate();
  const object = getObjectById(id);
  const readyObject = buildObject(object, template);
  // send object and template
  const templatePart = template[readyObject.type];
  return { Template: templatePart, data: readyObject };
};

const saveObject = (object) => {
  // lets rebuild the object with just relationship ids
  const relationships = object.data.relationships.map((object) => object.id);
  const newObject = { ...object.data };
  newObject.relationships = relationships;
  const id = newObject._id;
  databaseData.findByIdAndRemove(id);

  databaseData.insertItem(newObject);
};

module.exports = {
  getObject,
  // getRelationships,
  saveObject,
};

// way for me to recreate data if needed
const populate = () => {
  databaseData.insertItem(initData[0]['Templates']);
  initData[1]['objects'].forEach((object) => {
    databaseData.insertItem(object);
  });

  databaseData.flush();
};
