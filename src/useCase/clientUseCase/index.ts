import { IClient } from "../../Interface/clientInterface";
import { clientRepository } from "../../Repository/clientRepository";
import crypto from "crypto"
import { cityRepository } from "../../Repository/cityRepository";


const createClinet = async (data: IClient) => {

    try {

        const clientData = data
        clientData.password = crypto.createHmac('sha256', clientData.password).digest('hex');
        await cityRepository.findByID(clientData.idCity)
        const emailAlreadyExist = await clientRepository.findByEmail(clientData.email)
        if (emailAlreadyExist) throw 'This e-mail already exist!'

        let { name, lastName, email, _id } = await clientRepository.createClinet(clientData);

        return {
            id: _id,
            name: name,
            lastName: lastName,
            email: email
        }

    } catch (error) {

        throw error
    }
}

const findByName = async (nameClient: string) => {
    try {

        if (!nameClient) throw new Error('this name not valid!')
        const resultClient = await clientRepository.findByName(nameClient)
        if (!resultClient) throw 'This client not exist!'

        return resultClient

    } catch (error) {
        throw error
    }


}

const findById = async (idClient: string) => {
    try {

        if (!idClient) throw new Error('this id not valid!')
        const resultClient = await clientRepository.findById(idClient)
        if (!resultClient) throw 'This client id not exist!'

        return resultClient

    } catch (error) {
        throw error
    }


}


export const clientUseCase = {
    createClinet,
    findByName,
    findById
}