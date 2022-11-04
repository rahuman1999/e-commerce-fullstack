import "reflect-metadata";
import { DataSourceOptions,DataSource } from "typeorm";
import { Product } from "./entity/Product";
import { Category } from "./entity/Category";
import * as dotenv from "dotenv";
import { SeederOptions } from "typeorm-extension";
dotenv.config();



const options: DataSourceOptions & SeederOptions = {
  type: "mysql",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  entities: [Product, Category],
  migrationsTableName: "migration_table",
  migrations: ["src/migration/*.ts"],
  seeds: ["src/seeder/*.ts"],
  subscribers: [],
};

export const dataSource = new DataSource(options);
