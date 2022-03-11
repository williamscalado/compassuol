import { IClient } from "../../../Domain/client";
import { clientRepository } from "../clientRepository";
import crypto from "crypto"
import { cityRepository } from "../../city/cityRepository";
import { ClientError } from "../ClientError";


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

        throw new ClientError((error as string))
    }
}

const findByName = async (nameClient: string) => {
    try {

        if (!nameClient) throw 'this name not valid!'
        const resultClient = await clientRepository.findByName(nameClient)
        if (!resultClient) throw 'This client not exist!'

        return resultClient

    } catch (error) {
        throw new ClientError((error as string))
    }


}

const findById = async (idClient: string) => {
    try {

        if (!idClient) throw 'this id not valid!'
        const resultClient = await clientRepository.findById(idClient)
        if (!resultClient) throw 'This client id not exist!'

        return resultClient

    } catch (error) {
        throw new ClientError((error as string))
    }


}


export const clientUseCase = {
    createClinet,
    findByName,
    findById
}