import { clientSchemaReopository } from "./schema";
import { IClient } from "../../../Domain/client";

const createClient = async (data: IClient) => {
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

const updateClient =  async (dataUpdate: IClient, idClient: string) => {

    return await clientSchemaReopository.findByIdAndUpdate(
        {_id: idClient},
        dataUpdate,
        {rawResult: true}
        );
}

const deleteClient = async (idClient: string)=>{

    return await clientSchemaReopository.deleteOne({_id: idClient})

}
export const clientRepository = {
    createClient,
    findByEmail,
    findByName,
    findById,
    updateClient,
    deleteClient
}