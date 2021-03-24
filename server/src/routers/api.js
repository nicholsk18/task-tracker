const express = require('express')
const DataTable = require('../DataTable.json')
const getRelationships = require('../helpers/getRelationships')
const router = new express.Router()
const { getObjectData } = require('../helpers/database_helper')

router.get('/object/:id', (req, res) => {
  const id = parseInt(req.params.id)
  getObjectData()


  const dataObject = DataTable.find(obj => obj.id === id)
  res.send(dataObject)
})

router.delete('/remove/object', (req, res) => {
  const id = parseInt(req.body.id);
  const relationship = req.body.relationship
  const type = relationship.type
  const name = relationship.name

  const object = DataTable.find(obj => obj.id === id)
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

router.post('/get/relationships', (req, res) => {
  const type = req.body.data
  let relationships = []

  if (type === 'Tags') {
    relationships = getRelationships('Tag')
  }
  if (type === 'Activities') {
    relationships = getRelationships('Activity')
  }

  res.send(relationships)
})

router.post('/add/relationship', (req, res) => {
  const obj = req.body.data
  let respondID = 0
  for(const prop in DataTable) {
    if (DataTable[prop].id === obj.toID) {
      respondID = DataTable[prop].id
      DataTable[prop].Relationships[0].objects.push(obj.rel)
    }
  }

  res.send({ id: respondID })
})

router.post('/save/object', (req, res) => {
  const objUpdateID = req.body.data.id
  const newObject = req.body.data

  for (const prop in DataTable) {

    // match id to object being updated
    // and replace it with new object
    if (DataTable[prop].id === objUpdateID) {
      DataTable[prop] = newObject
    }
  }

  // some kind of error handling
  // will go here and we will send code back?
  res.send({"status": "success"})
})

module.exports = router