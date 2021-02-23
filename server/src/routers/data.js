const express = require('express')
const DataTable = require('../DataTable.json')
const Relationships = require('../Relationships.json')
const router = new express.Router()

router.get('/object/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const object = DataTable[id]
  const relationshipList = []

  // Find all the relationships
  // will refactor to a function to make it DRY
  if (object.type === 'Activity') {
    for (const prop in Relationships) {
      const {fromID, toID} = Relationships[prop]
      if (parseInt(fromID) == id) {
        relationshipList.push(toID)
      }
    }
  }
  if (object.type === 'Tag') {
    for (const prop in Relationships) {
      const {fromID, toID} = Relationships[prop]
      if (parseInt(toID) == id) {
        relationshipList.push(fromID)
      }
    }
  }


  // Initiate the return object
  const objectData = {id, ...object}
  objectData.relationships = relationshipList.map(id => {
    id = parseInt(id)
    return { id, ...DataTable[id] }
  })

  res.send(objectData)
})

module.exports = router