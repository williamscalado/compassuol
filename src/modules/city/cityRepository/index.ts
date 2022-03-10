import { citySchemaRepository } from "./schema"
import { ICity } from "../../../Domain/city";

const createCity = async (data: ICity) => {

    try {

        await citySchemaRepository.create(data);

    } catch (error) {

        throw new Error('City not create in DB')
    }
}

const findByName = async (name: string, idStade?: string) => {

    return await citySchemaRepository.findOne({ name: name, stateId: (idStade) ? idStade : /.*/ })

}


const findByID = async (idCity?: string) => {

    try {

        return await citySchemaRepository.findOne({ _id: idCity })

    } catch (error) {

        throw 'This City id not exist!'
    }

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

