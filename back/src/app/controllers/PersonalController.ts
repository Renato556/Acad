import { Request, Response, Router } from "express";
import Personal from "../entities/Personal";
import PersonalRepository from "../repositories/PersonalRepository";
import IPersonal from "../interfaces/IPersonal";

const personalRouter = Router();

personalRouter.get('/', async (_req: Request, res: Response): Promise<Response> => {
    const personals = await PersonalRepository.getAllPersonal()
    return res.status(200).json(personals);
});

export default personalRouter;
