import Alumni from "../entities/Alumni";
import IAlumni from "../interfaces/IAlumni";
import { AppDataSource } from "../../database/data-source";

const alumniRepository = AppDataSource.getRepository(Alumni);

const getAllAlumni = (): Promise<IAlumni[]> => {
    return alumniRepository.find();
};

const getOneAlumniByEmail = (email: string): Promise<IAlumni|null> => {
    return alumniRepository.findOneBy({ email });
};

const getAllByPersonalId = (personalId: number): Promise<IAlumni[]> => {
    return alumniRepository.findBy({ personalId });
};

const save = (alumni: Alumni) => {
    alumniRepository.save(alumni);
};

export default { getAllAlumni, getOneAlumniByEmail, getAllByPersonalId, save };
