"use strict";
import express from "express";
import bodyParser from "body-parser"
import router from "./routes"
import mongoose from "mongoose";
import mongoOptions from "../mongoConfig";
// import bluebird from "bluebird";
// mongoose.Promise = bluebird;
import dotenv from "dotenv"
import cors from "cors";
dotenv.config();
const port = process.env.PORT || 8080;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/got';
const app = express();

(() => {
  mongoose.connect(MONGODB_URI, mongoOptions);
  mongoose.connection.once('open', () => {
    // tslint:disable-next-line:no-console
    console.log('Connected to Mongo via Mongoose');
  });
  mongoose.connection.on('error', (err) => {
    // tslint:disable-next-line:no-console
    console.log('Unable to connect to Mongo via Mongoose', err);
  });
})();

app.options("*", cors());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('', router)

// tslint:disable-next-line:no-console
app.listen(port, () => console.log( `Backend API is live: http://localhost:${ port }` ));