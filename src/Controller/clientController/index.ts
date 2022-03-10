import { Request, Response } from "express";
import { clientDataValidation } from "../../modules/Validation/clientValidation";
import { clientUseCase } from "../../useCase/clientUseCase";

const createClinet = async (req: Request, res: Response) => {

    try {

        const clientData =  req.body
        await clientDataValidation.validate(clientData)
        clientData.birthdayDate = new Date (clientData.birthdayDate.split('/').reverse().join('-'))
        clientData.createAt = new Date()        
        res.status(201).json(await clientUseCase.createClinet(clientData))

    } catch (error) {
        res.status(400).json({
            error: true,
            message: error
        })
    }



}

const findByName = async (req: Request, res: Response) => {
    try {
        const name = req.params.name
       
        res.status(200).json(await clientUseCase.findByName(name))

    } catch (error) {
        res.status(400).json({
            erro:true,
            message: error})
    }
}

const findById = async (req: Request, res: Response) => {
    try {
        const idClient = req.params.id
       
        res.status(200).json(await clientUseCase.findById(idClient))

    } catch (error) {
        res.status(400).json({
            erro:true,
            message: error})
    }
}

export const clientController = {
    createClinet,
    findByName,
    findById
}