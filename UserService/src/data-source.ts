import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3307,
  username: "user",
  password: "password",
  database: "ecommuser_dev",
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: ["./migration/*.ts"],
  subscribers: [],
});
