import { Request, Response } from "express"
import { stateRepository } from "../../Repository/statesRepository"


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

const findBySigla = (req: Request, res: Response) => {

  try {
    const stateSigla = (req.params.sigla).toUpperCase()
    if (!stateSigla) throw new Error('This Sigla state not valid!')
    const resultState = stateRepository.findBySigla(stateSigla)
  
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
  findBySigla,
  getAllStates
}