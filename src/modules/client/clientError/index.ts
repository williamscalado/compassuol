export class ClientError extends Error {
    public messageError: string;
    public error
    constructor(message: string) {
        super(message);
        
        this.error = 'ClientErro';
        this.messageError = message;
    }
}