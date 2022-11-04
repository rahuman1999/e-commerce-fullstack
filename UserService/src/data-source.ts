import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import { SeederOptions } from "typeorm-extension";
import { Role } from "./entity/Role";
import { User } from "./entity/User";

const options: DataSourceOptions & SeederOptions = {
  type: "mysql",
  host: "localhost",
  port: 3307,
  username: "user",
  password: "password",
  database: "ecommuser_dev",
  synchronize: true,
  logging: false,
  entities: [User, Role],
  migrationsTableName: "migration_table",
  migrations: ["src/database/migration/*.ts"],
  subscribers: [],
  seeds: ["src/database/seeder/*.ts"],
};

export const dataSource = new DataSource(options);
