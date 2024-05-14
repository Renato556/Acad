import { Request, Response, Router } from "express";
import AlumniRepository from '../repositories/AlumniRepository';

const alumniRouter = Router();

alumniRouter.get('/', async (_req: Request, res: Response) => {
    const alumnis = await AlumniRepository.getAllAlumni();
    return res.status(200).json(alumnis);
});

export default alumniRouter;