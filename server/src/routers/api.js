const express = require('express');
const jsonData = require('../data.json');
const apiData = require('../data-api.json');
const router = new express.Router();

router.get('/', (req, res) => {
  res.json(jsonData);
});

router.get('/:id', (req, res) => {
  const reqID = req.params.id;

  let { id, name, schedule } = jsonData.find((obj) => obj.id === reqID);

  res.json({
    id,
    name,
    schedule,
  });
});

router.get('/activity/:id', (req, res) => {
  const activityData = apiData.activities.find(
    (obj) => obj.id === req.params.id
  );

  res.json(activityData);
});

router.get('/session/:id', (req, res) => {
  const sesssionData = apiData.sessions.find((obj) => obj.id === req.params.id);

  res.json(sesssionData);
});

router.get('/schedule/:id', (req, res) => {
  const scheduleData = apiData.schedule.find((obj) => obj.id === req.params.id);

  res.json(scheduleData);
});

router.get('/sortable/:id', (req, res) => {});

module.exports = router;
