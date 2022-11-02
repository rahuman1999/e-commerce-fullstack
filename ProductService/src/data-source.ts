import "reflect-metadata"
import { DataSource } from "typeorm"
import { Product } from "./entity/Product"
import * as dotenv from "dotenv";
dotenv.config();

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: true,
    entities: [Product],
    migrationsTableName: "migration_table",
    migrations: ["src/migration/*.ts"],
    subscribers: [],
})
