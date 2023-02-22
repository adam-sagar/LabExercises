console.log(typeof("" + 1 + 0));
//10
console.log(typeof("" - 1 + 0));

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
console.log(typeof(" -9 " + 5));

console.log(Number(" -9 " - 5));
//-14
console.log(Number(null + 1));
//1
console.log(Number(undefined + 1));
//Nan
console.log(Number(undefined == null));

console.log(Number(undefined === null));

console.log(Number(" \t \n" -2));





let three = "3"
let four = "4"
let thirty = "30"

let addition = three + four;
// Not correct - "3" and "4" are concatenated with the + operator when strings
console.log(addition);

let multiplication = three * four;
// correct
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

console.log(result);





function getGreeting(name) {
return 'Hello ' + name + '!';
}