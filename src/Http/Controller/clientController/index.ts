import { Request, Response } from "express";
import { clientUseCase } from "../../../modules/client/clientUseCase";
import { clientDataValidation } from "../../../modules/client/clientValidation";


const createClient = async (req: Request, res: Response) => {

    try {

        const clientData =  req.body
        await clientDataValidation.validate(clientData)
        clientData.birthdayDate = new Date (clientData.birthdayDate.split('/').reverse().join('-'))
        clientData.createAt = new Date()        
        res.status(201).json(await clientUseCase.createClinet(clientData))

    } catch (error) {
        res.status(400).json(error)
    }



}

const findByName = async (req: Request, res: Response) => {
    try {
        const name = req.params.name
       
        res.status(200).json(await clientUseCase.findByName(name))

    } catch (error) {
        res.status(400).json(error)
    }
}

const findById = async (req: Request, res: Response) => {
    try {
        const idClient = req.params.id
       
        res.status(200).json(await clientUseCase.findById(idClient))

    } catch (error) {
        res.status(400).json(error)
    }
}


const deleteClient = async (req: Request, res: Response) => {
    try {
        const idClient = req.params.id
       
        res.status(200).json(await clientUseCase.findById(idClient))

    } catch (error) {
        res.status(400).json(error)
    }
}

const updateClient = async (req: Request, res: Response) => {
    try {
        const dataUpdateCliente = req.body
        const idClient = req.params.id
       
        res.status(200).json(await clientUseCase.findById(idClient))

    } catch (error) {
        res.status(400).json(error)
    }
}

export const clientController = {
    createClient,
    findByName,
    findById,
    updateClient,
    deleteClient
}