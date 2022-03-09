import { ICity } from "../../Interface/cityInterface";
import { cityRepository } from "../../Repository/cityRepository";

// Cadastrar cidade
// Consultar cidade pelo nome
// Consultar cidade pelo estado
// remover cidade

const createCity = async (data: ICity) => {

    try {
        // verificar se o nome já existe
        // colcoar tudo menusculo
        // mesma cidade em estados diferentes pode

        const { name , stateId } = data
        const nameCityAlreadyExist = await cityRepository.findByName(name.toLowerCase(), stateId)
                
        if(nameCityAlreadyExist) throw 'This City name already exist!'
       
        data.name = data.name.toLowerCase()

        await cityRepository.createCity(data)


    } catch (error) {
        throw error
    }


}

const findByName = async (nameCity: string) =>{

    try {

        if(!nameCity) throw new Error('This name is not valid!')
        const result = await cityRepository.findByName(nameCity.toLowerCase())
        const resultCity = {
            name: result?.name,
            stateId: result?.stateId
        }
        return resultCity

    } catch (error) {

        throw new Error()
        
    }
}


export const cityUseCase = {
    createCity,
    findByName
}

