const express = require('express');
const router = new express.Router();
const {
  getObjectData,
  getRelationships,
  saveObject,
} = require('../helpers/database_helper');

router.get('/object/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const dataObject = getObjectData(id);
  res.send(dataObject);
});

router.post('/get/relationships', (req, res) => {
  const type = req.body.data;
  const relationships = getRelationships(type);

  res.send(relationships);
});

router.post('/save/object', (req, res) => {
  const newObject = req.body.data;

  saveObject(newObject);

  res.send({ status: 'success' });
});

module.exports = router;
