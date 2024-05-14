import { Request, Response, Router } from "express";
import AlumniRepository from '../repositories/AlumniRepository';
import PersonalRepository from "../repositories/PersonalRepository";
import AlumniValidator from '../Validators/AlumniValidator';

const alumniRouter = Router();

alumniRouter.get('/', async (_req: Request, res: Response): Promise<Response> => {
    const alumnis = await AlumniRepository.getAllAlumni();
    return res.status(200).json(alumnis);
});

alumniRouter.get('/:email', async (req: Request, res: Response): Promise<Response> => {
    const alumni = await AlumniRepository.getOneAlumniByEmail(req.params.email);
    return alumni ? res.status(200).json(alumni) : res.sendStatus(404);
});

alumniRouter.post('/', async (req: Request, res: Response): Promise<Response> => {
    const validation = AlumniValidator.validate(req.body);
    if (validation) {
        const alumniAlreadyExists = await AlumniRepository.getOneAlumniByEmail(req.body.email);
        if (!alumniAlreadyExists) {
            const personalExists = await PersonalRepository.getOnePersonalById(req.body.personal);
            if (personalExists) {
                AlumniRepository.save(req.body);
                return res.sendStatus(204)
            }
        }
    }

    return res.status(400).send('Constraints Violated');
});

export default alumniRouter;