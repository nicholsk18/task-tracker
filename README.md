# SimplSchedul

## To Do

- Change repo name to simplschedul

## Installation instructions

### For development

- clone the repository
- run `yarn install` to install client dependencies
- run `cd server` than `yarn install` to install server dependencies
- for best development experiance have to terminal windows open. One for the server folder other in root dir for client.
- run `yarn dev` in client and in server (server folder) `yarn dev.

### For production

- in root directory run `yarn build` to build react app
- after that run `yarn start` in root directory.
  - the appliction will automaticly pic server port on heroku using `process.env.PORT`
  - for testing production in development environment the start instructions are same but url will be [http://localhost:3001/](http://localhost:3001/)

### Other commands

- `yarn format` to format the code
- `yarn lint` to lint files

## Client

## API Server

### Routes

- [/api/object/:id](/api/object/:id)
- [/api/get/relationships](/api/get/relationships)
- [/api/get/template](/api/get/template)
- [/api/save/object](/api/save/object)
- [/api/create/object](/api/create/object)
- [/api/delete/object](/api/delete/object)

### API Main Helper functions

- `getObject(id)` - uses `getObjectById(id)` than builds out relationships and returns fully build object with template
- `getRelationships` - uses `getObjectById(id)` and object type to correctly pick all objects that relate to that ID. This will need to be changed once relationships object changes
- `saveObject(newObject)` - should update relationships and update object. This method does not function correctly
- `getTemplate(type)` - takes type and returns the template for that type

- `createObject()` and `deleteObject` - are untested function from previous object creation. Most likely do not work.

## TinyDB

We are using tinyDB for storage. Note do to custom needs of our DB design, we do not use any of tinyDB functionality.

Current tinyDB format is

```
{
    "data": [],
    "objects": [],
    "templates": [],
    "relationships": []
}
```

- I created a function called `populate()` that uses the `initSetup.json` to assign the values to the database object arrays we created. 

#### Where

- `data` is the original but unused array
- `objects` stores all the objects
- `templates` stores how to read the stored object
- `relationships` how each object relates to the other

## Client

- `EditObject` - gives users the ability to edit object name, add and remove relationships. It also handles creation of a new object by using `ID = 0`
- `ViewObject` - just handles showing object by utilizing the template to iterate over the values.
- `models` - just types that we need to adjust for new objects. (currently unused)
- `dataLayer` - folder communicates with the api to send and receive data. It also processes. We could use axios to clean it up but that is subjective.
- `components` - folder has mostly layout helpers except for `SearchRelationships`. We need to move it or the others as they do not match. `SearchRelationship` also needs fixing of adding new object using autocomplete. Best to just redirect to `/edit/0` and use the already develop functionality.
