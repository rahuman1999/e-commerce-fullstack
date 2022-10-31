import { AppDataSource } from "./data-source";
import * as express from "express";
require("dotenv").config();
AppDataSource.initialize()
  .then(async () => {
    const app = express();
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
      console.log(`Started listening on port ${PORT}`);
      console.log("MySQL DB Connected");
    });
  })
  .catch((error) => console.log(error));
