import Express from 'express';
import compression from 'compression';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';

// Initialize the Express App
const app = new Express();

// Set Development modes checks
const isDevMode = process.env.NODE_ENV === 'development' || false;
const isProdMode = process.env.NODE_ENV === 'production' || false;

// Run Webpack dev server in development mode
// if (isDevMode) {
//   // Webpack Requirements
//   // eslint-disable-next-line global-require
//   const webpack = require('webpack');
//   // eslint-disable-next-line global-require
// //  const config = require('../webpack.config.dev');
//   // eslint-disable-next-line global-require
//   const webpackDevMiddleware = require('webpack-dev-middleware');
//   // eslint-disable-next-line global-require
//   const webpackHotMiddleware = require('webpack-hot-middleware');
//   //const compiler = webpack(config);
// //   app.use(webpackDevMiddleware(compiler, {
// //     noInfo: true,
// //     publicPath: config.output.publicPath,
// //     watchOptions: {
// //       poll: 1000,
// //     },
// //   }));
// //   app.use(webpackHotMiddleware(compiler));
//  }

import posts from './routes/post.routes';
import dummyData from './dummyData';
import serverConfig from './config';

// Set native promises as mongoose promise
mongoose.Promise = global.Promise;

// MongoDB Connection
if (process.env.NODE_ENV !== 'test') {
  mongoose.connect(serverConfig.mongoURL, (error) => {
    if (error) {
      console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
      throw error;
    }

    // feed some dummy data in DB.
    dummyData();
  });
}

// Apply body Parser and server public assets and routes
app.use(compression());
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
app.use(Express.static(path.resolve(__dirname, '../dist/client')));
app.use('/api', posts);
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
