import { clientSchemaReopository } from "./schema";
import { IClient } from "../../../Domain/client";

const createClinet = async (data: IClient) => {

   

    return (await clientSchemaReopository.create(data)).save();
        

    
}


const findByEmail =  async (email: string) => {

    return await clientSchemaReopository.findOne({email: email})

}


const findByName =  async (nameClient: string) => {
    
    return await clientSchemaReopository.findOne({name: nameClient}, ['-password', '-createAt', '-__v' ])

}

const findById =  async (idClient: string) => {
    
    return await clientSchemaReopository.findOne({_id: idClient}, ['-password', '-createAt', '-__v' ])

}
export const clientRepository = {
    createClinet,
    findByEmail,
    findByName,
    findById
}