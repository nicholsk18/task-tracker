const express = require('express');
const router = new express.Router();
const {
  getObject,
  getRelationships,
  saveObject,
  createObject,
  getTemplate,
  deleteObject,
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

router.post('/get/template', (req, res) => {
  const type = req.body.data;
  const template = getTemplate(type);

  res.send(template);
});

router.post('/save/object', (req, res) => {
  const newObject = req.body.data;

  const obj = saveObject(newObject);

  res.send(obj);
});

router.post('/create/object', (req, res) => {
  const obj = req.body.data;
  console.log(obj);
  const newObj = createObject(obj);
  res.send(newObj);
});

router.delete('/delete/object', (req, res) => {
  const _id = req.body.data;
  const isDeleted = deleteObject(_id);
  console.log(isDeleted);
  // when its undefined it succeeded need to double check
  if (isDeleted) {
    // return error
  }

  res.status(200);
});

module.exports = router;
