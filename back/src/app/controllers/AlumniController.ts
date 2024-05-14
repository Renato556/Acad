import { Request, Response, Router } from "express";
import AlumniRepository from '../repositories/AlumniRepository';

const alumniRouter = Router();

alumniRouter.get('/', async (_req: Request, res: Response): Promise<Response> => {
    const alumnis = await AlumniRepository.getAllAlumni();
    return res.status(200).json(alumnis);
});

alumniRouter.get('/:email', async (req: Request, res: Response): Promise<Response> => {
    const alumni = await AlumniRepository.getOneAlumnyByEmail(req.params.email);
    return alumni ? res.status(200).json(alumni) : res.sendStatus(404);
})

export default alumniRouter;