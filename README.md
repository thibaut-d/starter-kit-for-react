# starter-kit-for-react

A starter kit for a React frontend (WIP)

## Backend emulation

This kit runs on [JSON Server](https://github.com/typicode/json-server) and [casual](https://github.com/boo1ean/casual#readme) to emulate the backend.

You can find the data structure in the file : **fillDB.js**.

Install JSON server and casual with :

    npm install -g json-server
    npm install casual

Cd in the project directory and run the server on http://localhost:3004/ with :

    json-server --watch fillDB.js --port 3004

## Create React App

This kit use [Create React App](https://github.com/typicode/json-server) to maintain the app architecture.

You can run the developpement server on http://localhost:3000/ by typing :

```
cd my-app
npm start
```

Running tests :

    npm test

Building for production :

    npm run build
