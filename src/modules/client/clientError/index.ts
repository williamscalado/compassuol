export class ClientError extends Error {
    public error
    constructor(message: string) {
        super();
        this.error = 'ClientError';
        this.message = message;
    }
}