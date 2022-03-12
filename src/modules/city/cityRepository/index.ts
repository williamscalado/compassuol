import { citySchemaRepository } from "./schema"
import { ICity } from "../../../Domain/city";

const createCity = async (data: ICity) => {

    return await citySchemaRepository.create(data);
}

const findByName = async (name: string, idStade?: string) => {
    return await citySchemaRepository.findOne({ name: name, stateId: (idStade) ? idStade : /.*/ })
}


const findByID = async (idCity?: string) => {
    return await citySchemaRepository.findOne({ _id: idCity })
}


const findByCityByStates = async (idStade: string) => {
    return await citySchemaRepository.find({ stateId: idStade }, ['-__v', '-createAt', '-active'])
}




export const cityRepository = {
    createCity,
    findByName,
    findByCityByStates,
    findByID
}

