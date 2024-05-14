import Personal from "../entities/Personal";
import IPersonal from "../interfaces/IPersonal";
import { AppDataSource } from "../../database/data-source";

const personalRepository = AppDataSource.getRepository(Personal);

const getAllPersonal = (): Promise<IPersonal[]> => {
    return personalRepository.find();
}

const getOnePersonalByPhone = (phone: string): Promise<IPersonal|null> => {
    return personalRepository.findOneBy({ phone })
}

const getOnePersonalById = (id: number): Promise<IPersonal|null> => {
    return personalRepository.findOneBy({ id })
}

const save = (personal: Personal) => {
    personalRepository.save(personal);
}

export default { getAllPersonal, getOnePersonalByPhone, getOnePersonalById, save };
