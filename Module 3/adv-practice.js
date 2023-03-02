//SET TIMEOUT


// function printMessage(msg) {
//     console.log(msg);
// }

// const longDelay = setTimeout(printMessage, 5000, 'this is a long delay') //printMessage is a reference to the function - it's not being executed
// const shorterDelay = setTimeout(printMessage, 2000, 'this is a short delay')
// //you don't need to console.log
 


// //SET INTERVAL


// const interval = setInterval(printMessage, 5000, 'this will be repeated')

// setTimeout(() => clearInterval(interval), 11000)
//will only repeat two times because it's cleared after 11sec, which is only enough time to do it twice

// function repeatInterval(delay, limit)
// {

//     let counter = 1;

//     let intervalTimer = setInterval(function repeatThis() {
//         console.log('repeatInterval: repeated '+counter+' of '+limit+' times');
//         if (counter == limit) clearInterval(intervalTimer);
//         counter++;
//     }, delay);

// }

// repeatInterval(1000, 69);


// DECORATORS






function slow(x, y) {
    // there can be a heavy CPU-intensive job here like adding up to a large number
    let goal = Math.floor(Math.random() * x * 1_000_000) //random number between 0 and a million times x
    console.log(`slow(${x}, ${y}): randomly generated goal for ${x * 1_000_000} is ${goal}`)
    let random = 0;
    for (let i = 0; i < goal; i++)
    {
        random++
    }
    return random;
}


slow=cachingDecorator(slow);


function cachingDecorator(pureFunction) {
    const cache = new Map();
    const outerContext = this;

    return function() {
        //let x = arguments[0];
        let funcParams = Array.from(arguments).join('')
        if (cache.has(funcParams)) { // if there's such key in cache
            console.log('returned cached value for '+funcParams)
            return cache.get(funcParams); // read the result from it
        }
        //let result = pureFunction.call(this, ...arguments); //needed for object functions that reference 'this' for context
        let result = pureFunction.apply(outerContext, arguments); //can also use apply - very similar, only difference is in handling arguments
        //let result = pureFunction(x) //works fine for standalone functions that don't rely on 'this' for context
        cache.set(funcParams, result); // and cache (remember) the result
        console.log('generated new value '+result+' for '+funcParams)
        return result;
    };
}


console.time('slow no caching')
console.log( slow(1, 2) ); // slow(1) is run, cached and the result returned
console.timeEnd('slow no caching')

console.time('slow with caching')
console.log( "Again: " + slow(1, 2) ); // slow(1) result returned from cache
console.timeEnd('slow with caching')

//change number of arguments to slow


// GETTERS AND SETTERS


// let newUser = {

//     get name() {
//       return this._name;
//     },
  
//     set name(value) {
//       if (value.length < 4) {
//         console.log("Name is too short, need at least 4 characters");
//         return;
//       }
//       this._name = value;
//     },

//     get age() {
//         return this._age;
//     },

//     set age(value) {
//         if (value < 0) {
//         console.log("You can't be 0 years old");
//         }
//         if (value > 120) {
//         console.log("Age can't be more than 120");
//         }
//         this._age = value;
//     }
// };
// newUser.age = 35
// newUser.age = -5
// newUser.age = 135

// console.log(newUser.age)


// // PROTOTYPAL INHERITANCE



// let animal = {
//     eats: true,
//     sleeps: true,
//     legs: 4,
//     mammal: true
// };

// //create 2 new types of animal based on the animal prototype - one using Object.create (like rabbit), and one using an F.prototype (like cat)

// let dog = Object.create(animal, {
//     barks: {
//         value: true,
//         enumerable: true
//     }
// });

// console.log('dog barks? ' + dog.barks);


// function Snake(legs, mammal) {
//     this.legs = legs;
//     this.mammal = mammal;
// }

// Snake.prototype = animal;
// const snake = new Snake(0, false);

// for (let prop in snake) console.log(`Snake: ${prop} is ${snake[prop]}`);



class Animal {

    constructor(name) {
        this.speed = 0;
        this.name = name;
        this.type = 'animal'
    }
    
    run(speed) {
        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed}.`);
    }

    stop() {
        this.speed = 0;
        console.log(`${this.name} stands still.`);
    }
}


class Kiwi extends Animal {
    constructor(name, beakLength)
    {
        super(name);
        this.beakLength = beakLength;
        this.type = 'kiwi';
    }

    fly() {
        console.log(`Sadly, ${this.name} doesn't fly`);
    }
}

//creating a kiwi called Kevin from the Kiwi bluprint
const kiwi = new Kiwi('Kevin', "20cm");

console.log(`${kiwi.name} has a beak length of ${kiwi.beakLength}`);
kiwi.fly();
kiwi.stop();