console.log('\n QUESTION 1');

myString = 'the quick brown fox jumps over the lazy dog';

//define function
//accept one parameter of string to capitalise
//split string to individual words using .split()
//Loop through each word in list
//use .toUpperCase to capitalise first letter
//concatenate capitalised letter back into word
//add capitalised word to new list
//join capitalised words back into single string
//return capitalised string

// function ucFirstLetters(string) {
//     let newString = string.split(" ");
//     for (let words of newString) {
//     words = words[0].toUpperCase() + words.slice(1);
//     }
//     return newString.join(" ");
// }

function ucFirstLetters(string) {
    let words = string.split(' ');
    for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
    return words.join(' ');
}

console.log(ucFirstLetters(myString));





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

