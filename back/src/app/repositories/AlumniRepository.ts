import Alumni from "../entities/Alumni";
import IAlumni from "../interfaces/IAlumni";
import { AppDataSource } from "../../database/data-source";

const alumniRepository = AppDataSource.getRepository(Alumni);

const getAllAlumni = (): Promise<IAlumni[]> => {
    return alumniRepository.find();
}

export default { getAllAlumni };
