const express = require("express");
const jsonData = require("../data.json");
const router = new express.Router();

router.get('/', (req, res) => {
  res.json( jsonData )
})

router.get("/:id", (req, res) => {
  const reqID = req.params.id;

  let { id, name } = jsonData.find(obj => (obj.id === reqID))

  res.json({
    id,
    name,
  });
});

module.exports = router;
