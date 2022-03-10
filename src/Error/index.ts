import { NextFunction, Request, Response} from 'express'

export class setAppError extends Error {
    public statusResponse
    constructor(code = 500, message: string) {
        super(message);

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, setAppError);
        }

        this.message = message
        this.statusResponse = code;
        
      
     
    }
}

export const errorMiddleware = (error: setAppError, req: Request, res: Response, next: NextFunction)=>{
    
    const statusCode = error.statusResponse || 500;
    const messageError = error.message || "Server error"

    return res.status(statusCode).json({
       error: true,
       message: messageError
   })
   
}