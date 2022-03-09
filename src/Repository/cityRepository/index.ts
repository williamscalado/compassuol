import { query } from "express";
import { ICity } from "../../Interface/cityInterface"
import { citySchemaRepository } from "./schema"


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



export const cityRepository = {
    createCity,
    findByName
}

