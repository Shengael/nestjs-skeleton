export class BadRequestError extends Error {
    constructor(public name: string, message: string) {
        super(message);

        Object.setPrototypeOf(this, BadRequestError.prototype);
    }
}
