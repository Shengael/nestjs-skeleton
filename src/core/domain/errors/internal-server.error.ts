export class InternalServerError extends Error {
    constructor(public name: string, message: string) {
        super(message);

        Object.setPrototypeOf(this, InternalServerError.prototype);
    }
}
