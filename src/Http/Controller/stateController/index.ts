import { Request, Response } from "express"
import { StateError } from "../../../modules/state/StateError"
import { stateRepository } from "../../../modules/state/statesRepository"

const findByID = (req: Request, res: Response) => {


  try {
    const idState = req.params.id
    if (!idState) throw new StateError('This ID state not valid!')
    const resultState = stateRepository.findByID(parseInt(idState))
    if(!resultState.id)  new StateError('This ID not valid!')
    
    res.status(200).json(resultState)

  } catch (error) {

    res.status(400).json(error)
  }



}

const findByState = (req: Request, res: Response) => {

  try {
    const stateAcronym = (req.params.stateAcronym).toUpperCase()
    if (!stateAcronym) throw new StateError('This acronym state not valid!')
    const resultState = stateRepository.findByState(stateAcronym)
  
    if(!resultState.id)  throw new StateError('This state acronym not valid!')
    
    res.status(200).json(resultState)

  } catch (error) {

    res.status(400).json(error)
  }



}

const getAllStates = (req: Request, res: Response) => {

 try {
   const dataMockState = stateRepository.getAllStates()
    if(!dataMockState) throw new StateError('The states list not valid!')
    res.status(200).json(dataMockState)
  
 } catch (error) {
   
 }
}

export const stateController = {
  findByID,
  findByState,
  getAllStates
}