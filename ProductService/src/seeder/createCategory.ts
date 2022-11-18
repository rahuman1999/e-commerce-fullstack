import { Seeder } from "typeorm-extension";
import { DataSource } from "typeorm";
import { Category } from "../entity/Category";

export default class CategorySeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(Category);
    await repository.insert([
      {
        categoryName: "Mobiles",
      },
      {
        categoryName: "Computers",
      },
      {
        categoryName: "Home Appliances",
      },
    ]);
  }
}
