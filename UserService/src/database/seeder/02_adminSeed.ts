import { DataSource } from "typeorm";
import { Seeder } from "typeorm-extension";
import * as bcrypt from "bcrypt";
import { User } from "../../entity/User";
import { Role } from "../../entity/Role";
export default class adminSeeder implements Seeder {
  async run(dataSource: DataSource) {
    const password = "admin";
    const salt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(password, salt);
    const adminRole = await dataSource.getRepository(Role).findOneBy({ id: 1 });
    const adminData = {
      name: "admin",
      email: "admin@yopmail.com",
      password: hashedPassword,
      role: adminRole,
      phone: "9876543210",
      country: "USA",
      image: "",
    };
    await dataSource.getRepository(User).save(adminData);
  }
}
