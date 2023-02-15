// let variable1 = 1
// let variable2;

// if (true) {
//     variable2 = 2;
// }




// function example() {
//     let exampleVar;
//     const exampleConst = "example constant";
// }

// let mountains = ['Everest', 'Fuji', 'Nanga Parbat'];

// console.log(mountains[0]); // 'Everest'
// console.log(mountains[1]); // 'Fuji'
// console.log(mountains[2]); // 'Nanga Parbat'

// mountains.push('K2"')
// console.log(mountains)

// let lastMountain = mountains.pop()
// console.log('last mountain is '+lastMountain)

// let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
// console.log(seas);
// seas.push('Red Sea');
// seas.unshift('Adriatic Sea')
// console.log(seas);

// let firstSea = seas.shift()
// console.log('first seas is '+firstSea)

// let fruits = ['apple', 'banana', 'pear'];
// fruits.push('watermelon');
// console.log('Best fruits are '+fruits)

// let wmindex = players.indexOf('watermelon')
// console.log(wmindex)


// const user = {
//     "first_name" : "Sammy",
//     "last_name" : "Shark",
//     "age" : 25,
//     "followers" : 987
//     }

//     console.log(user["first_name"]);
//     console.log(user["age"])

function sum(a, b) {
    return a+b;
}

if (sum(3, 4)!=7) {throw new Error ('sum function failed')}

function subtract(a, b) {
    return a-b;
}

if (subtract(3, 4)!=-1) {throw new Error ('subtract function failed')}



function multiply(a, b) {
    return a*b;
}

if (multiply(5, 3)!=15) {throw new Error ('subtract function failed')}
if (multiply(6, 10)!=60) {throw new Error ('subtract function failed')}