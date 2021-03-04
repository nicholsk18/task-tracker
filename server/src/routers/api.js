const express = require('express')
const DataTableV2 = require('../DataTableV2.json')
const router = new express.Router()

router.get('/object/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const dataObject = DataTableV2.find(obj => obj.id === id)
  res.send(dataObject)
})

router.delete('/remove/object', (req, res) => {
  const id = parseInt(req.body.id);
  const relationship = req.body.relationship
  const type = relationship.type
  const name = relationship.name

  const object = DataTableV2.find(obj => obj.id === id)
  object[type + 's'] = object[type + 's'].filter(obj => obj.name !== name)

  res.send(object)
})

router.post('/get/type', (req, res) => {
  const { relatesTo, type } = req.body.data
  const relationships = []

  for (const prop in DataTable) {
    if (DataTable[prop].type === type) {
      const obj = {
        "id": prop,
        "type": type,
        "name": DataTable[prop].data.name
      }
      relationships.push(obj)
    }
  }

  res.send(relationships)
})

router.post('/add/relationship', (req, res) => {
  const { relatesTo, rel } = req.body.data

  const fromID = relatesTo.toString()
  const toID = rel.id.toString()

  const keys = Object.keys(Relationships)
  const lastID = parseInt(keys[keys.length-1])
  const newID = lastID + 1

  if (rel.type == 'Activity') {
    Relationships[newID] = { "fromID": toID, "toID": fromID }
  }
  if (rel.type == 'Tag') {
    Relationships[newID] = { "fromID": fromID, "toID": toID }
  }

  res.send({id: relatesTo})
})

module.exports = router