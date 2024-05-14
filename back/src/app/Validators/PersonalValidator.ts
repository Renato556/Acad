import Personal from "../entities/Personal";

const validate = (personal: Personal): Boolean => {
    return !!personal.name && !!personal.phone;
}

export default { validate };
