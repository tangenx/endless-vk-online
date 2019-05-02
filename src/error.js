class VKOnlineError extends Error {
    constructor(param) {
        super(`${param} parameter is not specified.`);
    };
};

class VKAPIError extends Error {
    constructor(code, message) {
        super(message);

        this.code = +code;
        this.message = message;
        this.name = this.constructor.name;

        Error.captureStackTrace(this, this.constructor);
    };
};

module.exports = { VKOnlineError, VKAPIError };