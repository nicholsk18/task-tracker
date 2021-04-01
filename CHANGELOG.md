# Changelog
### 3/18/2021
- changed data types from any to specific types for each component and function

### 3/19/2021
- added a new design idea to a [DataTable_bak.json](server/src/DataTable_bak.json)
- changed file structure and added a return type

### 3/23/2021
- fixed edit object to work with the new server object
- created the ability to add existing relationships

### 3/24/2021
- working on adding tinyDB
- removed links from edit object
- general cleanup

### 3/25/2021
- worked on setting up tinydb
  - added base data to db
  - created a method to get data from database
  - created a way to use guid id from tiny db
  - created a way to save data to database
  - created a way to get relationships from database
  - removed DataTable_bak.json
  - kept DataTable.json to easily recreate data if needed
  - removed getRelationship helper
  
### 4/1/2021
- created new initSetup.json file to insert initial data to db if none is present
- created helper functions to build out the object
- created the actual method to put everything together and return to front-end
  