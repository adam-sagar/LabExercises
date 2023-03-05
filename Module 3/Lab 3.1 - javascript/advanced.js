console.log('\n QUESTION 1');
console.log('\n');


function makeCounter() {
    let currentCount = 0;
    return function() {
    currentCount++;
    console.log(currentCount)
    return currentCount;
    };
    }
    let counter1 = makeCounter();
    counter1(); // 1
    counter1(); // 2





console.log('\n QUESTION 2');
console.log('\n');


const delayMsg = msg => console.log(`This message will be printed after a delay: ${msg}`);
// rewritten as arrow function (assign it to a variable so it can be used more than once)

// function delayMsg(msg)
// {
// console.log(`This message will be printed after a delay: ${msg}`)
// }

setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all')
const neverHappenTimer = setTimeout(delayMsg, 11*1000, '#3: Delayed by 11s');

// #4 will be first. It's at the bottom of the call stack, so will be processed before any asynchronous code (setTimeout) that's in the event queue
// #3 will be second. Giving it a delay of 0ms will put it in the event queue (i.e. removed from normal flow), meaning it will be processed after the call stack. It has a shorter delay than the other two in the event queue so will be called second
// #2 will be third because it has a longer delay than #3 but a shorter one than #4
// #1 will be last because it has the longest delay of all the executed messages

clearTimeout(neverHappenTimer);





console.log('\n QUESTION 3');
console.log('\n');





console.log('\n QUESTION 4');
console.log('\n');


function printFibonacci() {
    let fibArray = [1, 1];
    let secondToLast = fibArray[fibArray.length - 2];
    let last = fibArray[fibArray.length - 1];
    let nextNumber = secondToLast + last;

}

// setInterval(printFibonacci, 1000);





console.log('\n QUESTION 5');
console.log('\n');


let car = {
    make: "Porsche",
    model: '911',
    year: 1964,
    description() {
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    }
};
    
car.description(); //works
   
setTimeout(car.description, 200); //fails because it's referencing the function but not it's associated object





console.log('\n QUESTION 6');
console.log('\n');





console.log('\n QUESTION 7');
console.log('\n');





console.log('\n QUESTION 8');
console.log('\n');





console.log('\n QUESTION 9');
console.log('\n');





console.log('\n QUESTION 10');
console.log('\n');