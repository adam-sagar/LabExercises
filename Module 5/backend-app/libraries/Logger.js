class Logger {
    constructor() {
        this.id = () => Math.floor((Math.random() * 10000) + 1);
    }

    log = (value) => {
        console.log(`[Logger:${this.id}]:${value}`)
    }
}

module.exports = Logger