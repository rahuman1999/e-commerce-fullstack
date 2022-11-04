import { dataSource } from "./data-source";
import * as express from "express";
import { runSeeders } from "typeorm-extension";
const app = express();

dataSource
  .initialize()
  .then(async () => {
    console.log("Database connected");

    console.log("Here you can setup and run express.");
  })
  .catch((error) => console.log(error));

app.listen(8000, () => {
  return console.log("server is listening on 8000");
});
