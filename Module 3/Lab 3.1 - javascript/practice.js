let fruit = "apple";
console.log(fruit);

fruit = "orange";
console.log(fruit);

fruit = "banana";
console.log(fruit);

const myName = "Adam";
console.log(myName);

const myName2 = "Bob";
console.log(myName2);

console.log('My name is '+ myName + ', not ' + myName2);

let x = 5;
let y = 10;
console.log(x + y);

function addition() {
    let a = 68;
    let b = 1;
    return a + b;
}

console.log(addition());

let four = 4;
console.log(four);
console.log(typeof four);

console.log(four + x);

four = 'four';

console.log(typeof four);

const user = { name: 'Adam', location: 'Christchurch' };
console.log(user);
console.log(typeof user);

let height = 165

if (height >= 150) {
    height = 'is tall enough to ride';
} else {
    height = 'is not tall enough to ride';
}

console.log(height);

//create a function getBMI(height, weight) which calculates and returns a person's BMI (google the formula)

function getBMI (height, weight) {
    let bmi = weight / (height * height);
    return bmi
}

console.log(getBMI(1.83, 65));

function convertTemp (celsius) {
    let ctof = celsius * 1.8 + 32;
    return ctof
   
}

console.log(convertTemp(30));


//create your own object with multiple properties
//make sure some are multiple values
//add some functions
//write a function to print out all names/values using for ... in

const book = {
title: 'The Well of Ascension',
author: 'Brandon Sanderson',
published: 2007,
genre: 'fantasy',
characters: ['Vin', 'Elend', 'Dockson', 'Hammond'],
reading() {
    console.log("I'm reading " + this.title);
}
};

console.log(book);
book.reading();

console.log(book.genre);

console.log(book.characters[3]);

// Try doing a for loop iteration here

let mylastName = "sagar";

console.log(`My last name is ${mylastName}`);