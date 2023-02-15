console.log('hello world')

function sayHello() {
    console.log('hello again')
}

sayHello()

function add(a, b) {
    let result = a+b;
    return result;
}


console.log(add(88,44))

sayHello()

// var Sentiment = require('sentiment');
// var sentiment = new Sentiment();
// var result = sentiment.analyze('Cats are great.');
// console.dir(result);    // Score: -2, Comparative: -0.666

// function analyseSentence(sentence) {
//     var sentiment = new Sentiment();
//     var result = sentiment.analyse(sentence);

//     return result.score;
// }

// console.log(analyseSentence('I love chocolate but i hate that it makes me fat.'))

sayHello()

function subtract(c, d) {
    let result = c-d;
    return result;
}

console.log(subtract(20,2))

sayHello()

function multiply(x, y) {
    let result = x*y;
    return result;
}

console.log(multiply(69,10))

sayHello()


function divide(e, f) {
    let result = e/f;
    return result;
}

console.log(divide(66,11))


function addsub(x, y, z) {
    let result = x+y-z;
    return result;
}

console.log(addsub(10, 3, 4))


function bedmas(a, b, c, d) {
    let result = a+b-c*d;
    return result;
}

console.log(bedmas(69, 7 ,6 ,8))