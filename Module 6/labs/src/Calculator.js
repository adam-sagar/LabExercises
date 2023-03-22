import React from "react";

function Calculator() {

    const [firstValue, setFirstValue] = React.useState('')
    const [secondValue, setSecondValue] = React.useState('')
    const [operator, setOperator] = React.useState('')
    const [result, setResult] = React.useState('')

    function handleCalculation() {
        let output;
        switch (operator) {
            case '+':
                output = parseInt(firstValue) + parseInt(secondValue);
                break;
            case '-':
                output = parseInt(firstValue) - parseInt(secondValue);
                break;
            case '*':
                output = parseInt(firstValue) * parseInt(secondValue);
                break;
            case '/':
                output = parseInt(firstValue) / parseInt(secondValue);
                break;
        } 
        setResult(parseInt(output))
    }

    return (

        <div>
            <input type="number" placeholder="Value 1" onChange={(event) => setFirstValue(event.target.value)}></input>
            <button onClick={() => setOperator('+')}>+</button>
            <button onClick={() => setOperator('-')}>-</button>
            <button onClick={() => setOperator('*')}>x</button>
            <button onClick={() => setOperator('/')}>÷</button>
            <input type="number" placeholder="Value 2" onChange={(event) => setSecondValue(event.target.value)}></input>
            <button onClick={() => handleCalculation()}>=</button>
            <input type="number" value={result}></input>
        </div>
    )
}

export default Calculator;