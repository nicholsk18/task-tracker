const express = require('express');
const router = new express.Router();
const {
  getObject,
  getRelationships,
  saveObject,
  createObject,
} = require('../helpers/database_helper');

router.get('/object/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const dataObject = getObject(id);
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

router.post('/create/object', (req, res) => {
  const obj = req.body.data;
  console.log(obj);
  const newObj = createObject(obj);
  res.send(newObj);
});

module.exports = router;
