import { Request, response, Response } from "express";
import { date } from "yup";
import { ICity } from "../../Interface/cityInterface";
import { cityValidationData } from "../../modules/Validation/cityValidation";
import { cityUseCase } from "../../useCase/cityUseCase";


const createCity = async (req: Request, res: Response) => {

    try {
        const dataRequest = req.body
        let data:ICity = {
            ...dataRequest,
            createAt: new Date().getTime(),
            active: true
        }

        if(!data) throw new Error('Data is not valid!')        
        await cityValidationData.validate(data)

        await cityUseCase.createCity(data)
        res.status(200).json({
            Sucess: true,
            message: "City create!" 
        })

    } catch (error) {
        res.status(400).json({
            error: error
        })
    }
}

const findByName = async (req: Request, res: Response) => {
        
        try {
        
        const name = req.params.name
        if(name=="" || null || undefined ) throw 'Name invalid'
        const nameCity = await cityUseCase.findByName(name)
        res.status(200).json(nameCity)

        } catch (error) {
            
        res.status(300).json()
            
        } 


}






export const cityController = {

    createCity,
    findByName
}