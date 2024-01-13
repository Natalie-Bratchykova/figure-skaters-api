import express from "express";
// module that help with configurations & loading another modules
import consign from "consign";

const port = 2900;

const app = express();

// use consign to include all needed data to app
consign().include("models").include('routes').into(app)



app.listen(port);