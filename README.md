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

#### Where

- `data` is the original but unused array
- `objects` stores all the objects
- `templates` stores how to read the stored object
- `relationships` how each object relates to the other
