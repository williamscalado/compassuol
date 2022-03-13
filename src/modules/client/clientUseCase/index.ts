import { IClient } from "../../../Domain/client";
import { clientRepository } from "../clientRepository";
import { cityRepository } from "../../city/cityRepository";
import { ClientError } from "../ClientError";


const createClient = async (data: IClient) => {

        const clientData = data
        await cityRepository.findByID(clientData.idCity)
        const emailAlreadyExist = await clientRepository.findByEmail(clientData.email)
        if (emailAlreadyExist) throw new ClientError('This e-mail already exist!')

        let { name, lastName, email, _id } = await clientRepository.createClient(clientData);

        return {
            id: _id,
            name: name,
            lastName: lastName,
            email: email
        }
}

const findByName = async (nameClient: string) => {
   
        const resultClient = await clientRepository.findByName(nameClient)
        if (!resultClient) throw new ClientError('This client not exist!')

        return resultClient
}

const findById = async (idClient: string) => {
   
        const resultClient = await clientRepository.findById(idClient)
        if (!resultClient) new ClientError('This client id not exist!')

        return resultClient

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

        const findByClinet = await clientUseCase.findById(idClient)
        if (!findByClinet) throw new ClientError('The clinet ID does not exist!')

        await clientRepository.deleteClient(idClient)
}


export const clientUseCase = {
    createClient,
    findByName,
    findById,
    updateClient,
    deleteClient
}