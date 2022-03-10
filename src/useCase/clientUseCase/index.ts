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
        if(emailAlreadyExist) throw 'This e-mail already exist!'

        await clientRepository.createClinet(clientData);

    } catch (error) {

        throw error
    }
}


export const clientUseCase = {
    createClinet
}