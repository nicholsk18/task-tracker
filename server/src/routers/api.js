const express = require("express");
const jsonData = require("../data.json");
const router = new express.Router();

router.get("/:id", (req, res) => {
  const findID = req.params.id;

  const { id, name } = jsonData[findID];

  res.json({
    id,
    name,
  });
});

module.exports = router;
