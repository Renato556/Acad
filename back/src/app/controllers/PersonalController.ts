import { Request, Response, Router } from "express";
import Personal from "../entities/Personal";
import PersonalRepository from "../repositories/PersonalRepository";
import IPersonal from "../interfaces/IPersonal";

const personalRouter = Router();

personalRouter.get('/', async (_req: Request, res: Response): Promise<Response> => {
    const personals = await PersonalRepository.getAllPersonal();
    return res.status(200).json(personals);
});

personalRouter.get('/:phone', async (req: Request, res: Response): Promise<Response> => {
    const personal = await PersonalRepository.getOnePersonalByPhone(req.params.phone);
    return personal ? res.status(200).json(personal) : res.sendStatus(404);
});

export default personalRouter;
