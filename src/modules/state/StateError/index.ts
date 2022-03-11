export class StateError extends Error {
    public messageError: string;
    public error
    constructor(message: string) {
        super(message);
        
        this.error = 'StateErro';
        this.messageError = message;
    }
}