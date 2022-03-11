export class CityError extends Error {
    public error
    constructor(message: string) {
        super();        
        this.error = 'CityErro';
        this.message = message;
    }
}