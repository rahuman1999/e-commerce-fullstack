import * as express from "express";
import * as morgan from "morgan";

const app = express();
app.use(morgan("combined"));
app.use("/", (req, res, next) => {
  console.log("App running on port 8000");
});
export default app;
