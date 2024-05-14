import { Router } from "express";
import personalRouter from "../controllers/PersonalController";

const routes = Router();

routes.use('/personal', personalRouter);

export default routes;
