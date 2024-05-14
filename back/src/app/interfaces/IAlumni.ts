import Personal from "../entities/Personal";

interface IAlumni {
    id?: number;
    name: string;
    phone: string;
    personal_id: Personal['id'];
}

export default IAlumni;
