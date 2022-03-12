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

        let { name, lastName, email, _id } = await clientRepository.createClient(clientData);

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


        const resultClient = await clientRepository.findById(idClient)
        if (!resultClient) throw 'This client id not exist!'

        return resultClient

    } catch (error) {
        throw new ClientError((error as string))
    }


}

const updateClient = async (data: IClient, idClient: string) => {
       
        const clientData = data
        await cityRepository.findByID(clientData.idCity)

        const findClientById = await clientRepository.findById(idClient)
        if(!findClientById) throw new ClientError('The client does not exist!')

        if(findClientById.email !== clientData.email){
            const emailAlreadyExist = await clientRepository.findByEmail(clientData.email)
            if(emailAlreadyExist) throw new ClientError('This e-mail is already in use!')
        }

        await clientRepository.updateClient(clientData, idClient)


}

const deleteClient = async (idClient: string) => {

    try {
        const resultClient = await clientRepository.findById(idClient)
        if (!resultClient) throw 'This client id not exist!'

        await clientRepository.deleteClient(idClient)

    } catch (error) {
        throw new ClientError((error as string))
    }

}


export const clientUseCase = {
    createClinet,
    findByName,
    findById,
    updateClient,
    deleteClient
}