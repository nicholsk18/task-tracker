const express = require('express');
const jsonData = require('../data.json');
const apiData = require('../data-api.json');
const router = new express.Router();

router.get('/', (req, res) => {
  res.json(jsonData);
});

router.get('/activity/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const activityData = apiData.activities.find((obj) => obj.id === id);

  res.send(activityData);
});

router.get('/session/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const sesssionData = apiData.sessions.find((obj) => obj.id === id);

  res.send(sesssionData);
});

router.get('/schedule/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const scheduleData = apiData.schedules.find((obj) => obj.id === id);

  res.send(scheduleData);
});

router.get('/sortable/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const sortableData = apiData.sortables.find((obj) => obj.id === id);

  res.send(sortableData);
});

router.post('/sortable/list', (req, res) => {
  const list = req.body.data;

  const data = list.map((id) => apiData.sortables.find((obj) => obj.id === id));

  res.send(data);
});

router.post('/tags', (req, res) => {
  const tagIds = req.body.data;

  const tagData = tagIds.map((tagId) =>
    apiData.tags.find((obj) => obj.id === tagId)
  );

  res.send(tagData);
});

router.get('/tag/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const tag = apiData.tags.find((obj) => obj.id === id);

  res.send(tag);
});

module.exports = router;
