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
    let halfway = animals.length / 2;       //need to create a variable that is at the halfway index of the array.
    animals[halfway] = newValue;
    return animals;
}

console.log(replaceMiddleAnimal('Cheetah'));


//Write a function that returns a new array containing all the animals that begin with the beginsWith string.
function findMatchingAnimals(beginsWith) {
    return animals.filter(animal => animal.startsWith(beginsWith))
}

console.log(findMatchingAnimals('Z'));


//regardless of upper/lower case - convert both the array and beginsWith argument into lower case before comparing them.
function findMatchingAnimals(beginsWith) {
    const lowerCaseBeginsWith = beginsWith.toLowerCase();
    return animals.filter(animal => animal.toLowerCase().startsWith(lowerCaseBeginsWith))
}

console.log(findMatchingAnimals('h'));





console.log('\n QUESTION 4')

// function camelCase (cssProp) {
//     let words = cssProp.split('-')
//     for (i = 1; i < words.length; i++) {     //i = 1 means it iterates over the second word in the array.
//     words[i] = words[i][0].toUpperCase() + words[i].substring(1);
//     }
//     return words.join('');
// }

console.log(camelCase('margin-left'));
console.log(camelCase('background-image'));
console.log(camelCase('padding-top ' + 'border-bottom'));


// write as another type of for loop
function camelCase(cssProp) {
    let words = cssProp.split('-')      
    let camelString = '';
    // words.forEach(word, i => {
    // camelString +=
    // if (i > 0) {word[i] = word[0].toUpperCase() + word.substring(1);}})
    // return words.join('');
    for (let word of words)
    {camelString += (camelString.length == 0) ? word : word.charAt(0).toUpperCase() + word.substring(1);}
    return camelString
}

//words is the function to split cssProp into an array - we need camelString variable to store the converted string inside of.
// camelString += is shorthand for camelString = camelString +, i.e. it appends the result of the conditional expression to the camelString variable.
// (camelString.length == 0) is a condition that checks whether camelString is empty. This is used to determine whether the first word in the words array should be added to camelString as-is, or if it should be converted to camel case format.





console.log('\n QUESTION 5')

let twentyCents = 0.20
let tenCents = 0.10

console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// 0.2 + 0.1 = 0.30000000000000004

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log((fixedTwenty) + (fixedTen)); //why is this not working? - they are concatenated together because .toFixed() returns a string


// function currencyAddition(float1, float2) {
//     let sum = (float1 + float2).toFixed(2)
//     return sum
// }


function currencyAddition(float1, float2) {
    let sum = (float1 * 100 + float2 * 100) / 100;
    return sum.toFixed(2)
}

console.log(currencyAddition(0.1, 0.2));
console.log(currencyAddition(0.2, 0.5));
console.log(0.3 == currencyAddition(0.1, 0.2));
console.log(0.3 == currencyAddition(0.1, 0.2, '+'));


// function currencyOperation(float1, float2, operation, numDecimals) {
//     switch (float1, float2, operation) {
//         case '+':
//             console.log(((float1 * 100 + float2 * 100) / 100).toFixed(numDecimals));
//             break;
//         case '-':
//             console.log(((float1 * 100 - float2 * 100) / 100).toFixed(numDecimals));
//             break;
//         case '/':
//             console.log(((float1 * 100) / (float2 * 100)).toFixed(numDecimals));
//             break;
//         case '*':
//             console.log((float1 * float2).toFixed(numDecimals));
//             break;
//         default:
//             console.log('Please check your input');
//     }
// }

//rewritten in a more efficient way
function currencyOperation(float1, float2, operation, numDecimals) {
    let result = 0;
    let adjustedFloat1 = float1 * 100 / 100;
    let adjustedFloat2 = float2 * 100 / 100;
    
    switch (operation) {
        case '+':
            result = (adjustedFloat1 + adjustedFloat2).toFixed(numDecimals);
            break;
        case '-':
            result = (adjustedFloat1 - adjustedFloat2).toFixed(numDecimals);
            break;
        case '/':
            result = (adjustedFloat1 / adjustedFloat2).toFixed(numDecimals);
            break;
        case '*':
            result = (adjustedFloat1 * adjustedFloat2).toFixed(numDecimals);
            break;
    }
    return result
}

console.log(currencyOperation(0.1, 0.2, '+', 10));
console.log(currencyOperation(0.9, 0.8, '-',2));
console.log(currencyOperation(0.3, 0.9, '/', 3));
console.log(currencyOperation(0.5, 0.7, '*',5));
console.log(currencyOperation(0.2, 0.8, 'a',7));





console.log('\n QUESTION 6')

function unique(duplicatesArray) {
    const newSet = new Set(duplicatesArray);
    const newArray = Array.from(newSet)
    return newArray;
}

const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
const zFighters = ['Goku', 'Gohan', 'Vegeta', 'Piccolo', 'Gohan', 'Yamcha', 'Goku', 'Tien', 'Krillin', 'Vegeta', 'Chiaotzu']
console.log(unique(colours)); // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)); // [ 55, 84, 97, 63, 32, 91, 43 ]
console.log(unique(zFighters));





console.log('\n QUESTION 7')

const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
    ];

function getBookTitle(bookId) {
    let matchingTitle = books.find(book => {
        if (bookId === book.id) {
        return book.title;}
    });
    return matchingTitle;
}

console.log(getBookTitle(1));
console.log(getBookTitle(3));


function getOldBooks() {
    let oldBooks = books.filter(book => {
        if (book.year < 1950) {
        return book.title;}
    });
    return oldBooks;
}

console.log(getOldBooks());


function addGenre() {
    let newGenre = books.map(book => {
        book.genre = 'classic';
        return books;
    });
    return newGenre;
}

console.log(addGenre());


// function addGenre() {
//     let newGenre = books.map(book => {
//         return {...book, genre: 'classic'}
//     });
//     return newGenre;
// }

// console.log(addGenre());