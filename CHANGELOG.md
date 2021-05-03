# Changelog

### 5/3/21

- Worked on fixing `saveObject` server method
- when saving new name it worjks.
- saving relationships still needs work

### 5/1/21

- worked on fixing EditObject issues with new object
  - changed `editObject` to `editFields` (makes more sense?)
- fixed relationship fragment componenets
  - not everything fully works because api paths do not resolve
- had to change types to any while I create a new object types
- still cannot save object but we can add relationships (not new yet)

### 4/30/21

- removed DataTable_old.json and test.json
- changed relationship structure to have `from` (activity) and `to` (tag)
  - changed db to work with new relationship object
- ViewObject works of new structure`
- we now pass `fields` and `relationships` instead of the hole template

### 4/29/21

- changed tinyDB object to have `objects`, `templates`, `relationships`
- changed the way server object gets build
- ~~frontend now received `object` variable instead of `data`.~~
  - keeping it as data for typescript reasons.
- renamed `Template` to `template`
- refactored some frontend functionality.

### 4/26/21

- created new template. (initSetup.json has unminified version)
- changed the way template is stored in db. Now its stored even with main data
- rewrote `populate()` to flush and clear data better before using init file to re-setup database
- started rewriting the database helper to work with new template.
  - Looks like new template structure will be a lot better, but now we will need to rewrite a lot of code
  -

### 4/22/21

- removed Pacfile (I dont think it will be needed)
- changed links to use .env file
- made dynamic paths for when we push to production
- changed server paths to prepend `/api/` for when we call api
- server now serves api and react app from one server (only production mode)
- Moved view type in to child but waiting to refactor till we change the server object

### 4/21/21

- merge fix

### 4/19/2021

- adding new methods
- refctor based on slack code review

### 4/17/2021

- Set up server to send frontend for `/` route
- some light refactoring
- working on heroku

### 4/16/2021

- file cleanup
- added types

### 4/15/2021

- fixed a bug that showed activity title when you are viewing a tag title
- merged everything to master

### 4/14/2021

- finished delete page. We will need to rework after we have parent pages
- added back button so if you do not want to save changes you can go back to view

### 4/13/2021

- added delete ability

### 4/12/2021

- changed the way new object is created. Now instead of having a new page, it uses `id: 0` to create new object server side. When creating new object from relationships field, everything stayed the same.
- small bug (not updating relationships) was fixed
- worked a little on cleaning the codebase

### 4/10/2021

- added update relationship server method that updates new relationships with current object as relationship.

### 4/9/2021

- add page v2
- remade add page to only show type
- edit page will no longer allow blank title
- add page reuses the `createNewObject()` helper function that searchRelationships uses to create new object

### 4/8/2021

- added types to view and edit
- added text in front of title to let users know what field that is like in figma
- added new page to create new objects. (v1) Currently does not save and needs refactoring

### 4/5/2021

- worked on ability to add new relationships
- now you are able to save relationships
- if relationship already exist it will block it from being added
- started working on creating new types from relationships
- solved issue where it was adding new object with same id everytime you removed relationship
- final note: we can get/create/update/delete relationships

### 4/2/2021

- change so that getObject only sends back the correct template with return object
- converted ViewFields to work with new object
- simplified ViewFields since the object is simpler now
- added relationships to the templates fields
- changed edit link to use new format
- can remove relationship and edit name
- changed how data is saved in db
  - now everything is saved as object with \_id, so we can use tinydb functions
  - template has `"type": "Template"` to show different
- we can get objects and save objects. still need to add the `Add` method

### 4/1/2021

- created new initSetup.json file to insert initial data to db if none is present
- created helper functions to build out the object
- created the actual method to put everything together and return to front-end

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

### 3/24/2021

- working on adding tinyDB
- removed links from edit object
- general cleanup

### 3/23/2021

- fixed edit object to work with the new server object
- created the ability to add existing relationships

### 3/19/2021

- added a new design idea to a [DataTable_bak.json](server/src/DataTable_bak.json)
- changed file structure and added a return type

### 3/18/2021

- changed data types from any to specific types for each component and function
