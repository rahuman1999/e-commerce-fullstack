import { AppDataSource } from "./data-source"
import * as express from "express"
const app = express();


AppDataSource.initialize().then(async () => {

    console.log("Database connected");

    console.log("Here you can setup and run express.")

}).catch(error => console.log(error))


app.listen(8000, () => {
    return console.log('server is listening on 8000');
});