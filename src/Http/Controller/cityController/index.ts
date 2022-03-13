import { Request, response, Response } from "express";
import { cityUseCase } from "../../../modules/city/cityUseCase";
import { cityValidationData } from "../../../modules/city/cityValidation";
import { ICity } from "../../../Domain/city";
import { CityError } from "../../../modules/city/cityError";

const createCity = async (req: Request, res: Response) => {

    try {
        const dataRequest: ICity = req.body
        let data: ICity = {
            ...dataRequest,
            createAt: new Date().getTime(),
            active: true
        }

        if (!data) throw new CityError('Information does not is valid!')

        await cityValidationData.validate(data)
        await cityUseCase.createCity(data)

        res.status(200).json({
            Sucess: true,
            message: "City create!"
        })

    } catch (error) {
        res.status(400).json(error)
    }
}

const findByName = async (req: Request, res: Response) => {

    try {

        const nameCity = req.params.name
        const resultSeachrCity = await cityUseCase.findByName(nameCity)

        if (!resultSeachrCity?.name) throw new CityError('The city does not is exist!')

        res.status(200).json(resultSeachrCity)

    } catch (error) {
        res.status(400).json(error)
    }


}

const findByCityByStates = async (req: Request, res: Response) => {


    try {
        const stateId = req.params.id
        if (!stateId) throw new CityError('This ID does not is exist')
        const resultbyStates = await cityUseCase.findByCityByStates(stateId)

        res.status(200).json(resultbyStates)

    } catch (error) {
        res.status(400).json(error)
    }


}




export const cityController = {

    createCity,
    findByName,
    findByCityByStates
}