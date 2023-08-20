import express from 'express'
import cors from 'cors';
import logger from 'morgan';

import { config } from 'dotenv';

import dbconnection from './config/connection.js';
import mainRoute from './routes/mainRouter.js'

config()
const port = process.env.PORT || 3001
const { DATABASE_URL } = process.env;
const app = express();
dbconnection(DATABASE_URL);


app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false, limit: '50mb' }));
app.use(logger('dev'));


app.use('/',mainRoute)

app.listen(port, () => {
    console.log(`server listening at http://127.0.0.1:${port}`);
  });
  
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});
  