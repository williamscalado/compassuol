import { setAppError } from "../../Error"

export const testeError = () =>{

    throw new setAppError(500,'Server error')

}