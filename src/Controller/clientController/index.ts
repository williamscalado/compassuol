import { Request, Response } from "express";
import { clientDataValidation } from "../../modules/Validation/clientValidation";
import { clientUseCase } from "../../useCase/clientUseCase";

const createClinet = async (req: Request, res: Response) => {

    try {
        const clientData =  req.body
        await clientDataValidation.validate(clientData)
        clientData.birthdayDate = new Date (clientData.birthdayDate.split('/').reverse().join('-'))
        clientData.createAt = new Date() 
        await clientUseCase.createClinet(clientData)

        res.status(201).send()

    } catch (error) {
        res.status(400).json({
            error: true,
            message: error
        })
    }



}


export const clientController = {
    createClinet
}