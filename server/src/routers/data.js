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

module.exports = router