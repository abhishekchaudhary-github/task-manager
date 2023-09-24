class customError extends Error {
    constructor(mess,status) {
        super(mess);
        this.status = status;
    }
}

const customError1   = (message,status) => {
    return new customError(message,status)
}

module.exports = {customError1,customError}