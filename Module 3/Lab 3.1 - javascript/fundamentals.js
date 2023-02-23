console.log(Number("" + 1 + 0));
//10
console.log(Number("" - 1 + 0));
//-1 -because subtraction overrides the concatenation
console.log(Number(true + false));
//1
console.log(Number(!true));
//0
console.log(Number(6 / "3"));
//2
console.log(Number("2" * "3"));
//6
console.log(Number(4 + 5 + "px"));
//Nan
console.log(Number("$" + 4 + 5));
//Nan
console.log(Number("4" - 2));
//2
console.log(Number("4px" - 2));
//Nan
console.log(Number(" -9 " + 5));
//Nan -it's a string because of concatenation
console.log(Number(" -9 " - 5));
//-14
console.log(Number(null + 1));
//1
console.log(Number(undefined + 1));
//Nan
console.log(Number(undefined == null));
//1 -it's true that they are equivalent (true = 1)
console.log(Number(undefined === null));
//0 -they are equivalent in that they both represent the absence of a value but they have different types (undefined has type undefined whereas null is an object)
console.log(typeof(" \t \n" -2));
//-2 -string converts to 0 because of the empty spaces?





let three = "3" //<- These are strings
let four = "4"
let thirty = "30" 

let addition = three + four;
//not correct -values are strings so are concatenated with the + operator
console.log(addition);

let multiplication = three * four;
//correct
console.log(multiplication);

let division = three / four;
//correct
console.log(division);

let subtraction = three - four;
//correct
console.log(subtraction);

let lessThan1 = three < four;
//correct
console.log(lessThan1);

let lessThan2 = thirty < four;
//not correct -thirty is a string so it's 3 and 0 (which is < 4) not 30
console.log(lessThan2);





if (0) console.log('#1 zero is true')
//won't print
if ("0") console.log('#2 zero is true')
//will print
if (null) console.log('null is true')
//won't print
if (-1) console.log('negative is true')
//will print
if (1) console.log('positive is true')
//will print





// let a = 2, b = 3;
// let result = `${a} + ${b} is `;
// if (a + b < 10) {
// result += 'less than 10';
// } else {
// result += 'greater than 10';
// }

let a = 2, b = 3;
let result = `${a} + ${b} is ${a + b < 10 ? 'less than 10' : 'greater than 10'}`;
                            //(condition) ? (expressionIfTrue) : (expressionIfFalse);

console.log(result);




// function declaration

// function getGreeting(name) {
// return 'Hello ' + name + '!';                           
// }


// function expression

// const getGreeting = function(name) {      
//     return 'Hello ' + name + '!';                       
// };


// arrow function

const getGreeting = name => 'Hello ' + name + '!';        

console.log(getGreeting('adam'));





const westley = {
    name: 'Westley',
    numFingers: 5
    }

const rugen = {
    name: 'Count Rugen',
    numFingers: 6
    }

const inigo = {
    firstName: 'Inigo',
    lastName: 'Montoya',
    greeting(person) {
        let greeting = `Hello ${person.name}. My name is ${this.firstName} ${this.lastName}. `;
        console.log(greeting + this.getCatchPhrase(person));
    },
    // getCatchPhrase(person) {
    //     if (person.numFingers === 6) {
    //         return 'You killed my father. Prepare to die';
    //         } else {
    //         return 'Nice to meet you.';
    //         }
    //     }
    getCatchPhrase(person) {
        return person.numFingers === 6 ? 'You killed my father. Prepare to die.' : 'Nice to meet you.'; //remember to include what you want the code to do i.e. return
        }
    }

    inigo.greeting(westley)
    inigo.greeting(rugen)




//need to use return this -basketballGame is 'this' (function is inside the object) and score is a property of it
//can't call halfTime method outside of object so log basketballGame instead
// ++ increments by 1 and += assigns the addition operator
//Get to fulltime by copy and pasting up the chain up until halftime and then changing second halftime to fulltime. Add a fullTime function in the object (make sure to add return this).
const basketballGame = {
    score: 0,
    freeThrow() {
        this.score++;
        return this;
    },
    foul: 0,
    foulCount() {
        this.foul++;
        return this;
    },
    basket() {
        this.score += 2;
        return this
    },
    threePointer() {
        this.score += 3;
        return this
    },
    halfTime() {
        console.log('Halftime score is '+this.score+' with a foul count of '+this.foul);
        return this
    },
    fullTime() {
        console.log('Fulltime score is '+this.score+' with a foul count of '+this.foul);
        return this
    }
}
        //modify each of the above object methods to enable function chaining as below:
        basketballGame.basket().freeThrow().freeThrow().foulCount().basket().threePointer().halfTime().foulCount().basket().freeThrow().foulCount().freeThrow().basket().threePointer().fullTime();

    console.log(basketballGame);





const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
}

function printObject(city) {
    for (cityProp in city)
    {console.log(city)}
}

printObject(sydney);




const melbourne = {
    name: 'Melbourne',
    population: 4_917_750,
    state: 'Victoria',
    founded: '30 August 1835',
    timezone: 'AEST'
}

function printObject2(city2) {
    for (cityProp in city2)
    {console.log(city2)}
}

printObject2(melbourne);