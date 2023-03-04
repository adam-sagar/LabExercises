console.log('\n QUESTION 1');

let myString = 'the quick brown fox jumps over the lazy dog';

// function ucFirstLetters(string) {
//     let words = string.split(' ');
//     words = words.map(word => word[0].toUpperCase() + word.slice(1))
//     return words.join(' ');
// }

function ucFirstLetters(string) {
    let words = string.split(' '); 
    for (let i = 0; i < words.length; i++) { 
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
    return words.join(' ');
}

console.log(ucFirstLetters(myString));

// split string into array of words
// create a for loop - (initialisation; condition; afterthought/update;)
// i = 0; - starts the loop
// i; < words.length - condition that must be true for loop to continue executing
// i++; - executed at end of each loop. In this case it increments i by 1 i.e. moves to next letter)
// [i] is used to access the current word in the array and modify it
// join array of words back into a string and return it





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

// rewriting with conditional operator - condition ? expression1 : expression2
function truncate(string, max) {
    let truncatedString = string.substring(0, max);
    return string.length > max ? truncatedString + '...' : truncatedString;
}





console.log('\n QUESTION 3');

const animals = ['Tiger', 'Giraffe']

// adding 2 values at beginning and end of array
animals.push('Zebra', 'Elephant');
animals.unshift('Lion', 'Hippo');

console.log(animals);


// sorting alphabetically
console.log(animals.sort());


// write a function to replace middle value
function replaceMiddleAnimal(newValue) {
    let halfway = animals.length / 2;       //need to create a variable that is at the halfway index of the array.
    animals[halfway] = newValue;
    return animals;
}

console.log(replaceMiddleAnimal('Cheetah'));


// write a function that returns a new array containing all the animals that begin with the beginsWith string.
// function findMatchingAnimals(beginsWith) {
//     return animals.filter(animal => animal.startsWith(beginsWith))
// }

// console.log(findMatchingAnimals('Z'));


// regardless of upper/lower case - convert both the array and beginsWith argument into lower case before comparing them.
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

// words is the function to split cssProp into an array - we need camelString variable to store the converted string inside of.
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

// rewritten in a more efficient way
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


// function getTitles(authorInitial) {

// }


// latestBook() {

// }





console.log('\n QUESTION 8')

const phoneBookABC = new Map() // an empty map to begin with

phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

console.log(phoneBookABC);

const phoneBookDEF = new Map()

phoneBookDEF.set('Diego', '0412312343')
phoneBookDEF.set('Ellie', '0492568365')
phoneBookDEF.set('Felix', '0434746457')

console.log(phoneBookDEF);


phoneBookABC.set('Caroline', '0442042069')
console.log("Caroline's phone number is " + phoneBookABC.get('Caroline'));


function printPhoneBook(contacts) {
    for (let entry of contacts)
    {console.log(entry)}
}

printPhoneBook(phoneBookABC)

// for (let contact of phoneBookABC.keys()) {
//         console.log(contact + ': ' + phoneBookABC.get(contact));
//     }

// for (let contact of phoneBookABC.keys()) {
//         console.log(contact);
//     }

// for (let phoneNumber of phoneBookABC.values()) {
//         console.log(phoneNumber);
//     }


// combine the contents of the two individual Maps into a single phoneBook Map
// use the spread syntax (...) to unpack the contents of the two phone books into an array
// pass the array to the map constructor
const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);

console.log(phoneBook);


// for (let entries of phoneBook) {
//     console.log(entries);
// }

for (let entries of phoneBook.keys()) {
    console.log(entries + ': ' + phoneBook.get(entries));
}





console.log('\n QUESTION 9')

let salaries = {
    "Timothy" : 35000,
    "David" : 25000,
    "Mary" : 55000,
    "Christina" : 75000,
    "James" : 43000
};

// write a function that calculates and returns the total of all salaries
function sumSalaries(salaries) {
    let sum = 0;
    for (let salary in salaries) {
        sum += salaries[salary];
    }
    return sum;
}

// For each iteration of the loop, we add the value of the current salary property in the salaries object to the sum variable using the += operator.
// This way, when we have iterated through all the salary properties in the object, the sum variable will contain the total sum of all the salaries.
// salaries[salary] is the value of the current salary property in the salaries object.
// The first time through the loop, salary will be equal to "Timothy", then "David", then "Mary", and so on, until the loop has iterated through all the keys in the object.

console.log(sumSalaries(salaries));


function topEarner(salaries) {
    const entries = Object.entries(salaries)
    entries.sort()
    // return entries[0];
    console.log(`${entries[0]} earns the most`)
}

topEarner(salaries);





console.log('\n QUESTION 10');

const today = new Date();
console.log('Current time is ' + today.toLocaleString())
console.log(today.getHours() + ' hours have passed so far today')


// total number of minutes that have passed so far today
const minutesPassed = (today.getHours() * 60) + today.getMinutes();
console.log(`${minutesPassed} minutes have passed today`);

// total number of seconeds that have passed so far today
const secondsPassed = (today.getHours() * 3600) + (today.getMinutes() * 60) + today.getSeconds();
console.log(`${secondsPassed} seconds have passed today`);

// Calculate and print your age as: 'I am x years, y months and z days old'
const birthday = new Date('1988-01-26');
console.log(birthday.toLocaleString());

let years = today.getFullYear() - birthday.getFullYear();
let months = today.getMonth() - birthday.getMonth();
let days = today.getDate() - birthday.getDate();

if (days < 0) {
    // months = months -1;
    months -= 1;
    // days = days + 28;
    days += 28;
}

console.log(`I am ${years} years, ${months} month and ${days} days old`);

// const ageInMilliseconds = today - birthday;
// const ageInDays = ageInMilliseconds / (1000 * 60 * 60 * 24); // divide by how many milliseconds in a day
// const ageInYears = ageInDays / 365;

// console.log(ageInYears);`


function daysInBetween(date1, date2) {
    const difference = Date.parse(date1) - Date.parse(date2);
    console.log('Difference is: ' + Math.floor(difference / 1000 / 60 / 60 / 24) + ' days');
}

// the Date.parse() static method parses a string representation of a date, and returns the number of milliseconds since January 1, 1970, 00:00:00 UTC
// the Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number.

daysInBetween("2023-05-03", "2022-05-03");