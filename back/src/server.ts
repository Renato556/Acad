// annotations
import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import { AppDataSource } from './database/data-source';
import routes from './app/routers/routes';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

AppDataSource.initialize().then(async () => {
    console.log('Database OK');
    app.listen(3000);
    console.log('Application running on port 3000');
});
