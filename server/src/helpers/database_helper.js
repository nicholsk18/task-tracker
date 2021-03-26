const DataTable = require('../DataTable.json');
const TinyDB = require('tinydb');
databaseData = new TinyDB('./database.db');

// func to get the _guid id
// so we can use gloab tinyDB functions
const getGuidId = (id) => {
  // populate()
  let guid;
  databaseData.forEach((err, object) => {
    if (object.id === id) {
      guid = object._id;
    }
  });

  return guid;
};

const getObjectData = (id) => {
  const _id = getGuidId(id);
  return databaseData.findById(_id, (err, data, index) => {
    if (err) {
      return err;
    }

    return data;
  });
};

const getRelationships = (relationshipType) => {
  // this is fine for now
  const type = relationshipType === 'Tags' ? 'Tag' : 'Activity';
  const relationships = []; // what we will send back

  databaseData.forEach((err, object) => {
    if (err) {
      console.log(err);
      return;
    }

    if (object.Template.type == type) {
      relationships.push({ id: object.id, name: object.fields.name });
    }
  });

  return relationships;
};

const saveObject = (object) => {
  const _id = getGuidId(object.id);
  const index = databaseData.findByIdAndRemove(_id, (err, item, idx) => {
    if (err) {
      return err;
    }

    return idx;
  });

  // lets put it back from where we got it
  databaseData.insertItem(object, index);
};

module.exports = {
  getObjectData,
  getRelationships,
  saveObject,
};

// way for me to recreate data if needed
const populate = () => {
  DataTable.forEach((object) => {
    databaseData.insertItem(object);
    databaseData.flush()
  });
};
