import { NextFunction, Request, Response} from 'express'
import { setAppError } from '../../Error'

export const errorMiddleware = (error: setAppError, req: Request, res: Response, next: NextFunction)=>{
    
    const statusCode = error.statusResponse || 500;
    const messageError = error.message || "Server error"

    return res.status(statusCode).json({
       error: true,
       message: messageError
   })
   
}