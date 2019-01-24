const apiRoute = require('./apis');
exports.init = (server) => {
  server.use('/api', apiRoute);
}



