export class ClientError extends Error {
    public error
    constructor(message: string) {
        super();
        this.error = 'ClientErro';
        this.message = message;
    }
}