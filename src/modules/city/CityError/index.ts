export class CityError extends Error {
    public messageError: string;
    public error
    constructor(message: string) {
        super(message);
        
        this.error = 'CityErro';
        this.messageError = message;
    }
}