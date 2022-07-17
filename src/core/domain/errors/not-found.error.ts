export class NotFoundError extends Error {
    constructor(public name: string, message: string) {
        super(message);

        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
}
