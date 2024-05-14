import { Router } from "express";
import personalRouter from "../controllers/PersonalController";
import alumniRouter from "../controllers/AlumniController";

const routes = Router();

routes.use('/personal', personalRouter);
routes.use('/alumni', alumniRouter);

export default routes;
