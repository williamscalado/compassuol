import { Request, Response } from "express"
import { stateRepository } from "../../../modules/state/statesRepository"

const findByID = (req: Request, res: Response) => {


  try {
    const idState = req.params.id
    if (!idState) throw new Error('This ID state not valid!')
    const resultState = stateRepository.findByID(parseInt(idState))
    if(!resultState.id)  throw 'This ID not valid!'
    
    res.status(200).json(resultState)

  } catch (error) {

    res.status(400).json({
      error: true,
      message: error
    })
  }



}

const findByState = (req: Request, res: Response) => {

  try {
    const stateAcronym = (req.params.stateAcronym).toUpperCase()
    if (!stateAcronym) throw new Error('This Sigla state not valid!')
    const resultState = stateRepository.findByState(stateAcronym)
  
    if(!resultState.id)  throw 'This Sigla not valid!'
    
    res.status(200).json(resultState)

  } catch (error) {

    res.status(400).json({
      error: true,
      message: error
    })
  }



}

const getAllStates = (req: Request, res: Response) => {

  res.status(200).json(stateRepository.getAllStates())

}

export const stateController = {
  findByID,
  findBySigla: findByState,
  getAllStates
}