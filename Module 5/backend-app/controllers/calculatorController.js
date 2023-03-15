const Calculator = require('../libraries/Calculator');

const myCalc = new Calculator();

const addNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);

    let operation = myCalc.add(number1, number2);

    res.status(200)
    res.json({ result: operation })
}



const subtractNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);

    let operation = myCalc.subtract(number1, number2);

    res.status(200)
    res.json({ result: operation })
}



const multiplyNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);

    let operation = myCalc.multiply(number1, number2);

    res.status(200)
    res.json({ result: operation })
}



const divideNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);

    let operation = myCalc.divide(number1, number2);

    res.status(200)
    res.json({ result: operation })
}

module.exports = {
    addNumbers,
    subtractNumbers,
    multiplyNumbers,
    divideNumbers
}