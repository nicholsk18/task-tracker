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
  
### 4/2/2021
- change so that getObject only sends back the correct template with return object
- converted ViewFields to work with new object
- simplified ViewFields since the object is simpler now
- added relationships to the templates fields
- changed edit link to use new format
- can remove relationship and edit name
- changed how data is saved in db
  - now everything is save as object with _id so we can use tinydb functions
  - template has `"type": "Template"` to show differents
- we can get objects and save objects. still need to add the `Add` method

### 4/5/2021
- worked on ability to add new relationships
- now you are able to save relationships
- if relationship already exist it will block it from being added
- started working on creating new types from relationships
- solved issue where it was adding new object with same id everytime you removed relationship
- final note: we can get/create/update/delete relationships

### 4/8/2021
- added types to view and edit
- added text in front of title to let users know what field that is like in figma
- added new page to create new objects. (v1) Currently  does not save and needs refactoring