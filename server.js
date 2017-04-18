import config from './config';
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';
import serverRender from './serverRender';

import express from 'express';
const server = express();

server.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public')
}));

server.set('view engine', 'ejs');

//pre-render React components on server
server.get(['/', '/contest/:contestId'], (req, res) => {
  // console.log(req.params.contestId);
  serverRender(req.params.contestId)
    .then(( { initialMarkup, initialData } ) => {
      res.render('index', {
        initialMarkup,
        initialData
      });
    })
    .catch(console.error);
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, config.host, () => {
  console.info('Express listening on port', config.port);
});
