console.log('\n QUESTION 1');
console.log('\n');


function makeCounter(startFrom) {
    let currentCount = startFrom;
    return function(incrementBy = 1) {
    currentCount += incrementBy;
    console.log(currentCount)
    return currentCount;
    };
    }
    let counter1 = makeCounter(0);
    counter1(); // 1
    counter1(); // 2
    
    let counter2 = makeCounter(10);
    counter2();
    counter2();
    counter2();
    counter2(2);
    counter2(3);





console.log('\n QUESTION 2');
console.log('\n');


const delayMsg = msg => console.log(`This message will be printed after a delay: ${msg}`);
// rewritten as arrow function (assign it to a variable so it can be used more than once)

// function delayMsg(msg)
// {
// console.log(`This message will be printed after a delay: ${msg}`)
// }

// setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
// setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
// setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
// delayMsg('#4: Not delayed at all')
// const neverHappenTimer = setTimeout(delayMsg, 11*1000, '#3: Delayed by 11s');

// #4 will be first. It's at the bottom of the call stack, so will be processed before any asynchronous code (setTimeout) that's in the event queue
// #3 will be second. Giving it a delay of 0ms will put it in the event queue (i.e. removed from normal flow), meaning it will be processed after the call stack. It has a shorter delay than the other two in the event queue so will be called second
// #2 will be third because it has a longer delay than #3 but a shorter one than #4
// #1 will be last because it has the longest delay of all the executed messages

// clearTimeout(neverHappenTimer);





console.log('\n QUESTION 3');
console.log('\n');





console.log('\n QUESTION 4');
console.log('\n');


// function printFibonacci() {
//     let first = 1;
//     let second = 1;
//     console.log(first);
//     console.log(second);

//     setInterval(function printNext() {
//         let next = first + second;
//         console.log(next);
//         first = second
//         second = next

//     }, 1000)

// }

// // setInterval(printFibonacci, 1000);

// function printFibonacci1() {
//     let [first, second] = [1, 1]
//     console.log(first);
//     console.log(second);
//     setTimeout(function printNext(first, second) {
//         let next = first + second;
//         console.log(next);
//         setTimeout(printNext, 1000, first, second)
//     }, 1000, first, second)
// }

// printFibonacci1(50, 202);





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

// setTimeout(car.description, 200); //fails because it's referencing the function but not it's associated object

setTimeout(() => car.description(), 200); 
// the arrow function captures the car object from the outer scope and calls its description method when executed.
// This is because arrow functions inherit the this value from their enclosing scope, which in this case is the scope where car is defined,
// whereas regular functions have their own this binding and may not necessarily reference the car object.

let newCar = {...car, year: 1969};

// the delayed description() still uses the original year because setTimeout has taken it out of normal flow. The newCar object is created after setTimeout has
// has been called so won't affect the execution.

car.description = car.description.bind(car)
setTimeout(newCar.description.bind(car), 200);
// no longer have to use a wrapper function because the description is bound into the object

let newCar1 = {...car, model: 999};
setTimeout(newCar1.description.bind(car), 200);




console.log('\n QUESTION 6');
console.log('\n');


// multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds

// creating a function prototype that can be used to delay the call to that function
Function.prototype.delay = function(ms) {
    let originalFunction = this;
    return function(arg1, arg2) {
        setTimeout(originalFunction, ms, arg1, arg2)
    }
}

multiply.delay(1000)(5, 5);
multiply.delay(3000)(12, 12);
// .delay has a built in delay funtion, created using Function.prototype


function multiply(a, b) {
    console.log( a * b );
}



// setTimeout(() => originalFunction.apply)




console.log('\n QUESTION 7');
console.log('\n');


function Person(name, age, gender) {
this.name = name;
this.age = age;
this.gender = gender;
}
const person1 = new Person('James Brown', 73, 'male')
console.log('person1: '+person1) //prints person1: [object Object]

// define a custom .toString method
Person.prototype.toString = function personToString() {
    return `name: ${this.name} age: ${this.age} gender: ${this.gender}`;
}

console.log('person1: ' + person1.toString());
// once you define the .toString method on the Person prototype, you don't need to explicitly call the function (as it's a part of the custom .toString method)

const person2 = new Person('Joshua Sagar', 31, 'male')
const person3 = new Person('Megan Sagar', 31, 'female')

console.log('person2: ' + person2.toString());
console.log('person3: ' + person3.toString());





console.log('\n QUESTION 8');
console.log('\n');


// class DigitalClock {
//     constructor(prefix) {
//     this.prefix = prefix;
//     }
//     display() {
//     let date = new Date();
//     //create 3 variables in one go using array destructuring
//     let [hours, mins, secs] = [date.getHours(), date.getMinutes(),
//     date.getSeconds()];
//     if (hours < 10) hours = '0' + hours;
//     if (mins < 10) mins = '0' + mins;
//     if (secs < 10) secs = '0' + secs;
//     console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
//     }
//     stop() {
//     clearInterval(this.timer);
//     }
//     start() {
//     this.display();
//     this.timer = setInterval(() => this.display(), 1000);
//     }
//     }
//     const myClock = new DigitalClock('my clock:')
//     myClock.start()


// class PrecisionClock extends DigitalClock {
//     constructor(prefix, precision) {
//         super(prefix);
//         this.precision = precision;
//     }
// }





console.log('\n QUESTION 9');
console.log('\n');





console.log('\n QUESTION 10');
console.log('\n');