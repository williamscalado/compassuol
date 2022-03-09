import { ICity } from "../../Interface/cityInterface"
import { citySchemaRepository } from "./schema"


const createCity = async (data:ICity) => {
   
    try {
        
        await citySchemaRepository.create(data);

    } catch (error) {

        throw new Error('City not create in DB')
    }
}

const findByName = async (name: string) =>{

    return citySchemaRepository.findOne({name: name}).exec()

}



export const cityRepository=  { 
    createCity,
    findByName
 } 

