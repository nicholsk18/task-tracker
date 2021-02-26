const express = require('express')
const DataTable = require('../DataTable.json')
const fs = require('fs');
const data = fs.readFileSync('../Relationships.json')
const Relationships = require('../Relationships.json')
const getRelationships = require('../helpers/getRelationships')
const router = new express.Router()

router.get('/object/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const object = DataTable[id]
  const relationshipList = getRelationships(object.type, id)

  // Initiate the return object
  const objectData = {id, ...object}
  objectData.relationships = relationshipList.map(id => {
    id = parseInt(id)
    return { id, ...DataTable[id] }
  })

  if (objectData.relationships.length === 0) {
    objectData.relationships = [{id, type: object.type, data: null}]
  }

  res.send(objectData)
})

router.delete('/remove/object', (req, res) => {
  const { type, id, relID } = (req.body);

  if (type === 'Tag') {
    const from = relID
    const to = id

    for (const prop in Relationships) {
      const {fromID, toID} = Relationships[prop]
      if (from === parseInt(fromID) && to === parseInt(toID)) {
        delete Relationships[prop]
      }
    }


    // console.log(JSON.parse(data));
  }
  if (type === 'Activity') {
    const from = id
    const to = relID

    for (const prop in Relationships) {
      const {fromID, toID} = Relationships[prop]
      if (from === parseInt(fromID) && to === parseInt(toID)) {
        delete Relationships[prop]
      }
    }

  }
  const relationshipList = getRelationships(type, id)

  // Initiate the return object
  const object = DataTable[id]
  const objectData = {id, ...object}
  objectData.relationships = relationshipList.map(id => {
    id = parseInt(id)
    return { id, ...DataTable[id] }
  })

  const returnType = type === 'Activity' ? 'Tag' : 'Activity'
  if(objectData.relationships.length === 0) {
    objectData.relationships = [{id, type: returnType, data: null}]
  }

  res.send(objectData)
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