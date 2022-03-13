import { StateError } from "../stateError"
import { IState, statesMock } from "./stateMock"


const findByID = (idState: number)=>{ 
    const resultState =  statesMock.find(
      (state: IState) => state.id === idState 
      )
    
    if(!resultState?.id) throw new StateError('The ID state not valid!')
    return {
      id: resultState?.id,
      name: resultState?.nome,
      sigla: resultState?.sigla
    }
}

const findByState = (stateAcronym: string)=>{
     
    const resultState =  statesMock.find(
      (state: IState) => state.sigla === stateAcronym
      )
    if(!resultState?.id) throw new StateError('The state not valid!')
    return {
      id: resultState?.id,
      name: resultState?.nome,
      sigla: resultState?.sigla
    }

}

const getAllStates = () =>  statesMock

export const stateRepository = {
  findByID,
  findByState,
  getAllStates
}