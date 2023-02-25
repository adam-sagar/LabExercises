console.log('\n QUESTION 1');

//define function
//accept one parameter of string to capitalise
//split string to individual words using .split()
//Loop through each word in list using for...of
//use .toupperCase io capitalise first letter
//concatenate capitalised letter back into word
//add capitalised word to new list
//join capitalised words back into single string
//return capitalised string

function ucFirstLetters(string) {
    let newString = string.split(" ");
    for (let words of newString) {
    words = words[0].toUpperCase() + words.slice(1);
    }
    return newString.join(" ");
}

console.log(ucFirstLetters(myString));
  