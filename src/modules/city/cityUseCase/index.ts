import { ICity } from "../../../Domain/city";
import { stateRepository } from "../../state/statesRepository";
import { CityError } from "../CityError";
import { cityRepository } from "../cityRepository";

const createCity = async (data: ICity) => {

        const { name , stateId } = data
        
        const stateAlreadyExist = stateRepository.findByID(parseInt(stateId))
        if(!stateAlreadyExist.id) throw new CityError('This State does not exists')

        const nameCityAlreadyExist = await cityRepository.findByName(name, stateId)
        if(nameCityAlreadyExist) throw new CityError('The City name already exist!')
       
        data.name = data.name.toLowerCase()
        await cityRepository.createCity(data)
}

const findByName = async (nameCity: string) =>{
     
    const result = await cityRepository.findByName(nameCity.toLowerCase())
        if(!result?.name) throw new CityError( 'The name city does not exist!')

        return {
            id: result?._id,
            name: result?.name,
            stateId: result?.stateId
        }
 
}

const findByCityByStates = async (idStade: string)=>{
       
        if(!idStade) throw new CityError('This states ID not exist')        
        const stateAlreadyExist = stateRepository.findByID(parseInt(idStade))
        if(!stateAlreadyExist.id) throw new CityError( 'This State ID not exist!')

        return await cityRepository.findByCityByStates(idStade)

}


export const cityUseCase = {
    createCity,
    findByName,
    findByCityByStates
}

