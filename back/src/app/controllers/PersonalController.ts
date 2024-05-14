import { Request, Response, Router } from "express";
import PersonalRepository from "../repositories/PersonalRepository";
import PersonalValidator from '../Validators/PersonalValidator';
import AlumniRepository from "../repositories/AlumniRepository";

const personalRouter = Router();

personalRouter.get('/', async (_req: Request, res: Response): Promise<Response> => {
    const personals = await PersonalRepository.getAllPersonal();
    return res.status(200).json(personals);
});

personalRouter.get('/:phone', async (req: Request, res: Response): Promise<Response> => {
    const personal = await PersonalRepository.getOnePersonalByPhone(req.params.phone);
    return personal ? res.status(200).json(personal) : res.sendStatus(404);
});

personalRouter.get('/all-alumni/:id', async (req, res) => {
    if (req.params.id) {
        const personalId = +req.params.id;
        const alumnis = await AlumniRepository.getAllByPersonalId(personalId);

        return res.status(200).json(alumnis);
    }

    return res.status(400).send('Constraints violated');
});

personalRouter.post('/', async (req: Request, res: Response) => {
    const validated = PersonalValidator.validate(req.body);
    if (validated) {
        const personalAlreadyExists = await PersonalRepository.getOnePersonalByPhone(req.body.phone);
        if (!personalAlreadyExists) {
            PersonalRepository.save(req.body);
            return res.sendStatus(204);
        }
    }

    return res.status(400).send('Constraints violated');
});

export default personalRouter;
