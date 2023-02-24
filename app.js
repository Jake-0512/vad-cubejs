const CubejsServer = require('@cubejs-backend/server');
//import { initApp } from './initApp';
const initApp = require('./initApp');

console.log('CubejsServer.version =', CubejsServer.version());

const options = {};
if (process.env.NODE_ENV === 'production') {
  options.initApp = initApp;
}
const server = new CubejsServer(options);
//const server = new CubejsServer();

server.listen().then(({ version, port }) => {
  console.log(`🚀 Cube.js server (${version}) is listening on ${port}`);
});