class ResponseStructure {
    
    constructor(status, msg, data) {
        this.status = status;
        this.msg = msg;
        this.data = data;
    }

    getJSON() {
        return {
            status: this.status,
            message: this.msg,
            data: this.data
        }
    }

} module.exports = ResponseStructure;
