import Alumni from "../entities/Alumni";

const validate = (alumni: Alumni): Boolean => {
    return !!alumni.name && !!alumni.email && !!alumni.personal;
}

export default { validate };
