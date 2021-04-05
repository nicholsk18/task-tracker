const initData = require('../../initSetup.json');
const TinyDB = require('tinydb');
databaseData = new TinyDB('./database.db');

// right now either template or objects
const getRelationshipObjectByType = (type) => {
  const relationships = []
  databaseData._data.data.forEach((object) => {
    if (object.type === type) {
      const newRel = { id: object.id, type: object.type, name: object.name, _id: object._id }
      relationships.push(newRel)
    }
  });
  return relationships
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
  // for recreation
  // populate()

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

const saveObject = (object) => {
  // lets rebuild the object with just relationship ids
  const relationships = object.data.relationships.map((object) => object.id);

  databaseData.findById(object.data._id, (err, item) => {
    if (err) {
      console.log(err);
    }

    item.relationships = relationships
  })
};

const createObject = (object) => {
  // lets find the last id
  let lastID = object.id
  databaseData.forEach((err, item) => {
    if (item.id > lastID) {
      lastID = item.id
    }
  })
  const newID = lastID + 1
  object.id = newID
  // this object does not have relationships yet
  // bet we need to make sure field is there
  object.relationships = []
  databaseData.appendItem(object)
  return getObjectById(object.id)
}

module.exports = {
  getObject,
  getRelationships,
  saveObject,
  createObject
};

// way for me to recreate data if needed
const populate = () => {
  databaseData.insertItem(initData[0]['Templates']);
  initData[1]['objects'].forEach((object) => {
    databaseData.insertItem(object);
  });

  databaseData.flush();
};
