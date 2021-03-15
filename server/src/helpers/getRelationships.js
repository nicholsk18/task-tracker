const DataTable = require('../DataTable.json')

module.exports = function getRelationships (type) {
  const rel = []
  for (const prop in DataTable) {
    if (DataTable[prop].type === type) {
      const id = DataTable[prop].id
      const name = DataTable[prop].name
      rel.push({ id, name })
    }
  }

  return rel
}