import { DataSource } from "typeorm";
import { Seeder } from "typeorm-extension";
import { Role } from "../../entity/Role";
export default class roleSeeder implements Seeder {
  async run(dataSource: DataSource) {
    const rolesData = [
      {
        roleName: "admin",
      },
      {
        roleName: "seller",
      },
      {
        roleName: "user",
      },
    ];
    await dataSource.getRepository(Role).save(rolesData);
  }
}
