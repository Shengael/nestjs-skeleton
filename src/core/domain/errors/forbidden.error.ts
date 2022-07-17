export class ForbiddenError extends Error {
    constructor(public name: string, message: string) {
        super(message);

        Object.setPrototypeOf(this, ForbiddenError.prototype);
    }
}
