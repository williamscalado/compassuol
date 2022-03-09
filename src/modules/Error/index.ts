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