import express from "express";
// module that help with configurations & loading another modules
import consign from "consign";

const port = 2900;

const app = express();

// use consign to include all needed data to app
consign().include("db.cjs")// include load files and directories
  .then("models") // using "then" we can specify order of loads 
  .then("libs/middlewares.cjs") 
  .then("routes")
  .then("libs/boot.cjs")
  .into(app);


