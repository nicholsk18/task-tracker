const Relationships = require('../Relationships.json')

module.exports = function getRelationships(type, id) {
  const relationshipList = []
  // Find all the relationships
  // will refactor to a function to make it DRY
  if (type === 'Activity') {
    for (const prop in Relationships) {
      const {fromID, toID} = Relationships[prop]
      if (parseInt(fromID) == id) {
        relationshipList.push(toID)
      }
    }
  }
  if (type === 'Tag') {
    for (const prop in Relationships) {
      const {fromID, toID} = Relationships[prop]
      if (parseInt(toID) == id) {
        relationshipList.push(fromID)
      }
    }
  }

  return relationshipList
}