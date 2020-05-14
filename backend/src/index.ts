"use strict";
import express from "express";
import bodyParser from "body-parser"
import router from "./routes"

const app = express();
const port = process.env.PORT || 8080; // default port to listen

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('', router)

// tslint:disable-next-line:no-console
app.listen(port, () => console.log( `Backend API is live: http://localhost:${ port }` ));