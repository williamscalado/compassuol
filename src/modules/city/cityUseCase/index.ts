import { ICity } from "../../../Domain/city";
import { ClientError } from "../../client/clientError";
import { stateRepository } from "../../state/statesRepository";
import { cityRepository } from "../cityRepository";

const createCity = async (data: ICity) => {

    try {
        const { name , stateId } = data
        
        const stateAlreadyExist = stateRepository.findByID(parseInt(stateId))
        if(!stateAlreadyExist.id) throw 'This State does not exists'

        const nameCityAlreadyExist = await cityRepository.findByName(name, stateId)
        if(nameCityAlreadyExist) throw 'This City name already exist!'
       
        data.name = data.name.toLowerCase()
        await cityRepository.createCity(data)


    } catch (err) {

        throw  new Error(`${err}`)
        

    }


}

const findByName = async (nameCity: string) =>{

    try {

        if(!nameCity) throw new Error('This name is not valid!')
        const result = await cityRepository.findByName(nameCity.toLowerCase())
        return {
            id: result?._id,
            name: result?.name,
            stateId: result?.stateId
        }
       

    } catch (error) {

        throw error
        
    }
}

const findByCityByStates = async (idStade: string)=>{

    try {
        if(!idStade) throw new Error('This states ID not exist')
        
        const stateAlreadyExist = stateRepository.findByID(parseInt(idStade))
        if(!stateAlreadyExist.id) throw 'This State ID not exist!'

        return await cityRepository.findByCityByStates(idStade)

    } catch (error) {

        throw error
    }


}


export const cityUseCase = {
    createCity,
    findByName,
    findByCityByStates
}

