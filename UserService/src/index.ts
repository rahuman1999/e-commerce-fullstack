import { dataSource } from "./data-source";
import app from "./routes/index";

dataSource
  .initialize()
  .then(async () => {
    console.log(`MySQL DB Connected`);
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => {
      console.log(`App Started`);
    });
  })
  .catch((error) => console.log(error));
