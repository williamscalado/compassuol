import { IClient } from "../../Interface/clientInterface";
import { clientSchemaReopository } from "./schema";


const createClinet = async (data: IClient) => {

   

        return await clientSchemaReopository.create(data);

    
}


const findByEmail =  async (email: string) => {

    return await clientSchemaReopository.findOne({email: email})

}


export const clientRepository = {
    createClinet,
    findByEmail
}