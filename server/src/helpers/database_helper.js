const TinyDB = require('tinydb')
databaseData = new TinyDB('./database.db')
// define the names so I can export the functions that call funtions
const getObjectData = () => {
  if (databaseData._state === 'ready') {
    // will get database data
    console.log('get data');
  }
}


// const test = () => {
//   console.log('test');
//   trying()
// }
module.exports = {
  getObjectData
}
