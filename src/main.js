import express from 'express';
import http from 'http';
import config from './config/index.config.js';
import { appRouter } from './routes/api.routes.js';
import routeList from 'express-list-routes';

const app = express();
const server = http.createServer( app );

app.use( express.json() );
app.use(express.urlencoded({ extended: true }));
app.use( '/api/v1', appRouter );

routeList(app);

server.listen(config.server.port, () =>
  console.info(
    `🚀 🚀 Application is running at http://localhost:${config.server.port}`
  )
);