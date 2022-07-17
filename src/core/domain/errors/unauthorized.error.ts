export class UnauthorizedError extends Error {
    constructor(public name: string, message: string) {
        super(message);

        Object.setPrototypeOf(this, UnauthorizedError.prototype);
    }
}
