import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "app",
    password: "root",
    database: "acad",
    synchronize: true,
    logging: false,
    entities: [],
    migrations: [],
    subscribers: [],
});
