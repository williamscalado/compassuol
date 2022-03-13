import { citySchemaRepository } from "./schema"
import { ICity, ICityRepository } from "../../../Domain/city";

const createCity = async (data: ICity<null>) => {

    return await citySchemaRepository.create(data);
}

const findByName = async (name: string, idStade?: string) => {
     
    const result = await citySchemaRepository.findOne({ 
        name: name, 
    stateId: (idStade) ? idStade : /.*/ })

    return result
}


const findByID = async (idCity: string) => {
    return await citySchemaRepository.findOne({ 
        _id: idCity 
    })
}


const findByCityByStates = async (idStade: string) => {
    return await citySchemaRepository.find({ 
        stateId: idStade 
    }, 
        ['-__v', '-createAt', '-active']
    )
}




export const cityRepository: ICityRepository = {
    createCity,
    findByName,
    findByCityByStates,
    findByID
}

