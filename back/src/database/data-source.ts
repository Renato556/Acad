import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { CreatePersonalTable1715642512782 } from './migrations/1715642512782-CreatePersonalTable';
import { CreateAlumniTable1715642251653 } from './migrations/1715642251653-CreateAlumniTable';
import Personal from '../app/entities/Personal';
import Alumni from '../app/entities/Alumni';

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'app',
    password: 'root',
    database: 'acad',
    synchronize: true,
    logging: false,
    entities: [Personal, Alumni],
    migrations: [CreatePersonalTable1715642512782, CreateAlumniTable1715642251653],
    subscribers: [],
});
