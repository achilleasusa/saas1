import Express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import path from 'path';

var models = require('./models')
models.sequelize.sync()
.then(function(){
  console.log('You are now connected  to mysql...')
})
.catch(function(err){
  console.log(err, 'something went wrong with the database update!')
})

// Initialize the Express App
const app = new Express();

// Set Development modes checks
const isDevMode = process.env.NODE_ENV === 'development' || false;
const isProdMode = process.env.NODE_ENV === 'production' || false;

import posts from './routes/post.routes';
import dummyData from './dummyData';
import serverConfig from './config/config';

// Apply body Parser and server public assets and routes
app.use(compression());
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
app.use(Express.static(path.resolve(__dirname, '../dist/client')));
// app.use('/api', posts);
app.get('/',function(req,res) {
  res.sendFile(path.resolve(__dirname, '../dist/client/index.html'));
});
// start app
app.listen(serverConfig.port, (error) => {
  if (!error) {
    console.log(`MERN is running on port: ${serverConfig.port}! Build something amazing!`); // eslint-disable-line
  }
});

export default app;
