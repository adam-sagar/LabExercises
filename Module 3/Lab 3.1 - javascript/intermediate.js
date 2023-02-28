console.log('\n QUESTION 1');

myString = 'the quick brown fox jumps over the lazy dog';

// function ucFirstLetters(string) {
//     let words = string.split(' ');
//     words = words.map(word => word[0].toUpperCase() + word.slice(1))
//     return words.join(' ');
// }

console.log(ucFirstLetters(myString));

function ucFirstLetters(string) {
    let words = string.split(' '); 
    for (let i = 0; i < words.length; i++) { 
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
    return words.join(' ');
}

//split string into array of words
//create a for loop - (initialisation; condition; afterthought/update;)
//i = 0; - starts the loop
//i; < words.length - condition that must be true for loop to continue executing
//i++; - executed at end of each loop. In this case it increments i by 1 i.e. moves to next letter)
//[i] is used to access the current word in the array and modify it
//join array of words back into a string and return it



console.log('\n QUESTION 2');

let longString = 'This is a really long string of some importance.';
let mediumString = "Pls don't cut me off";
let shortString = 'almost but no';

// function truncate(string, max) {
//     let truncatedString = string.substring(0, max);
//     if (string.length > max) {
//         return truncatedString + '...'
//     } else {
//         return truncatedString
//     }
// }

console.log(truncate(longString, 16));
console.log(truncate(mediumString, 16));
console.log(truncate(shortString, 16));

//rewriting with conditional operator - condition ? expression1 : expression2
function truncate(string, max) {
    let truncatedString = string.substring(0, max);
    return string.length > max ? truncatedString + '...' : truncatedString;
}





console.log('\n QUESTION 3');

const animals = ['Tiger', 'Giraffe']

//adding 2 values at beginning and end of array
animals.push('Zebra', 'Elephant');
animals.unshift('Lion', 'Hippo');

console.log(animals);


//sorting alphabetically
console.log(animals.sort());


//write a function to replace middle value
function replaceMiddleAnimal(newValue) {
    let halfway = animals.length / 2;       //need to create a variable that is at the halfway index of the array
    animals[halfway] = newValue;
    return animals;
}

console.log(replaceMiddleAnimal('Cheetah'));


//Write a function that returns a new array containing all the animals that begin with the beginsWith string
function findMatchingAnimals(beginsWith) {
    return animals.filter(animal => animal.startsWith(beginsWith))
}

console.log(findMatchingAnimals('Z'));


//regardless of upper/lower case - convert both the array and beginsWith argument into lower case before comparing them
function findMatchingAnimals(beginsWith) {
    const lowerCaseBeginsWith = beginsWith.toLowerCase();
    return animals.filter(animal => animal.toLowerCase().startsWith(lowerCaseBeginsWith))
}

console.log(findMatchingAnimals('h'));





console.log('\n QUESTION 4')

// function camelCase (cssProp) {
//     let words = cssProp.split('-')
//     for (i = 1; i < words.length; i++) {     //i = 1 means it iterates over the second word in the array
//     words[i] = words[i][0].toUpperCase() + words[i].substring(1);
//     }
//     return words.join('');
// }

console.log(camelCase('margin-left'));
console.log(camelCase('background-image'));
console.log(camelCase('padding-top ' + 'border-bottom'));

// write as another type of for loop
function camelCase(cssProp) {
    let words = cssProp.split('-')      //words is the function to split cssProp into an array - we need camelString variable to put the new array that's iterated over into 
    let camelString = '';
    // words.forEach(word, i => {
    // camelString +=
    // if (i > 0) {word[i] = word[0].toUpperCase() + word.substring(1);}})
    // return words.join('');
    for (let word of words)
    {camelString += (camelString.length == 0) ? word : word.charAt(0).toUpperCase() + word.substring(1);}
    return camelString
}





console.log('\n QUESTION 5')

let twentyCents = 0.20
let tenCents = 0.10
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// 0.2 + 0.1 = 0.30000000000000004

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log((fixedTwenty) + (fixedTen)); //why is this not working? It's not working becasue .toFixed() returns a string, meaning they will be concatenated together instead of being added

//use parseFloat to return numbers that can be added togther
let sum = parseFloat(fixedTwenty) + parseFloat(fixedTen);
console.log(sum.toFixed(2));






function currencyAddition(float1, float2) {
    
}