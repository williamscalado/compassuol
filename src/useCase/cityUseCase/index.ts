import { ICity } from "../../Interface/cityInterface";
import { cityRepository } from "../../Repository/cityRepository";

// Cadastrar cidade
// Consultar cidade pelo nome
// Consultar cidade pelo estado
// remover cidade

const createCity = async (data: ICity) => {

    try {
        // verificar se o nome já existe
        const { name } = data
        const nameCityAlreadyExist = await cityRepository.findByName(name)
        if(nameCityAlreadyExist) throw 'This City name already exist!'

        await cityRepository.createCity(data)


    } catch (error) {

    }


}

const findByName = async (name: string) =>{

    try {

        if(!name) throw new Error('This name is not valid!')
        const nameCity = await cityRepository.findByName(name)
        return nameCity

    } catch (error) {

        throw new Error()
        
    }
}


export const cityUseCase = {
    createCity,
    findByName
}

