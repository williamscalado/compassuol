import { Request, response, Response } from "express";
import { ICity } from "../../Interface/cityInterface";
import { cityValidationData } from "../../modules/Validation/cityValidation";
import { cityUseCase } from "../../useCase/cityUseCase";


const createCity = async (req: Request, res: Response) => {

    try {
        const dataRequest: ICity = req.body
        let data: ICity = {
            ...dataRequest,
            createAt: new Date().getTime(),
            active: true
        }

        if (!data) throw new Error('Data is not valid!')

        await cityValidationData.validate(data)
        await cityUseCase.createCity(data)

        res.status(200).json({
            Sucess: true,
            message: "City create!"
        })

    } catch (error) {
        res.status(400).json({
            error: true,
            message: error
        })
    }
}

const findByName = async (req: Request, res: Response) => {

    try {

        const nameCity = req.params.name

        if (nameCity == "" || null || undefined) throw 'Name invalid'
        const resultSeachrCity = await cityUseCase.findByName(nameCity)

        if (!resultSeachrCity.name) throw 'This city not exist!'
        res.status(200).json(resultSeachrCity)

    } catch (error) {

        res.status(300).json({
            error: true,
            message: error
        })

    }


}

const findByCityByStates = async (req: Request, res: Response) => {

    
    try {
        const stateId = req.params.id

        if(!stateId) throw 'This ID not exist'
        const resultbyStates = await cityUseCase.findByCityByStates(stateId)

        res.status(200).json(resultbyStates)
    } catch (error) {
        res.status(400).json({
            error: true,
            message: error
        })
    }


}




export const cityController = {

    createCity,
    findByName,
    findByCityByStates
}