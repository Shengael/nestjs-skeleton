export class RequestTimeoutError extends Error {
    constructor(public name: string, message: string) {
        super(message);

        Object.setPrototypeOf(this, RequestTimeoutError.prototype);
    }
}
