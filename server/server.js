import Express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import path from 'path';
import routes from './routes'

//Check ElasticSearch status
var client = require('./elasticSearch.js');

client.ping({
  requestTimeout: 30000,
}, function (error) {
  if (error) {
    console.error('elasticsearch cluster is down!');
  } else {
    console.log('All is well');
  }
});

// client.search({
//   index: 'index',
//   type: 'type',
//   body: {
//     query: {
//       wildcard: { "title": "*asd*" }
//     }
//   }
// }).then(function (resp) {
//     console.log(resp.hits.hits)
// }, function (err) {
//     console.trace(err.message);
// });


var models = require('./models')
models.sequelize.sync()
.then(function(){
  console.log()
})
.catch(function(err){
  console.log(err, 'something went wrong with the database update!')
})

// Initialize the Express App
const app = new Express();
var cors = require('cors')
app.use(cors())

// Set Development modes checks
const isDevMode = process.env.NODE_ENV === 'development' || false;
const isProdMode = process.env.NODE_ENV === 'production' || false;

import serverConfig from './config';

// Apply body Parser and server public assets and routes
app.use(compression());
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
app.use(Express.static(path.resolve(__dirname, '../dist/client')));

app.get('/',function(req,res) {
  res.sendFile(path.resolve(__dirname, '../dist/client/index.html'));
});
routes.init(app);
// start app
app.listen(serverConfig.port, (error) => {
  if (!error) {
    console.log(`MERN is running on port: ${serverConfig.port}! Build something amazing!`); // eslint-disable-line
  }
});

export default app;
