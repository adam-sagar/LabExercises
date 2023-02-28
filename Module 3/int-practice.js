// let longString = 'This is a really long string of some importance';
// let shortString = 'abc';

// function truncate(fullString, maxChars) {
//     //return a truncated version of fullString that is maxChars characters long
//     return fullString.substring(0, maxChars)
// }

// console.log(truncate(longString, 10))
// console.log(truncate(shortString, 10))

// const user1 = {
//     name: 'Adam',
//     location: 'Christchurch',
//     toString() {
//         return `Name: ${this.name}, Location: ${this.location}`;
//     }
// }

// console.log(`This user is ${user1}`);



// const Burnley = {
//     position: '1st',
//     numberOfWins: '21',
//     chanceOfPromotion: 'High',
//     toString() {
//         return `Burnley are currently ${this.position} in the EFL with ${this.numberOfWins} wins. Their chance of promotion is ${this.chanceOfPromotion}`;
//     }
// }

// console.log(`My favourite team ${Burnley}`);



// const product = {
//     name: 'totallyLegitProduct',
//     price: 99.99,
//     discount_percent: 69,
//     category: 'not useful',
//     valueOf() {
//         return this.price - (this.price * (this.discount_percent/100))
//     },
//     toString() {
//         return `${this.name} (${this.category})`
//     }
// }

// console.log(product.toString());
// console.log(product.valueOf());



// let million = 1_000_000;
// let billion = 1_000_000_000;

// console.log(million);
// console.log(billion);




// const product2 = {
//     name: 'Average Product',
//     category: 'Useful Things',
//     price: 15.00,
//     discount_percent: 15,
//     gst_percent: 10,
//     //defines how this object is treated as a number
//     valueOf() {
//         //take the discount and gst into account
//         return this.price - (this.price * (this.discount_percent/100)) + (this.price * (this.gst_percent/100))
//     },
//     //defines how this object is represented as a string
//     toString() {
//         return `${this.name} (${this.category})`
//     }    
// }


// const cities_au = ['Sydney', 'Melbourne', 'Adelaide', 'Cairns', 'Brisbane']
// const cities_nz = ['Auckland', 'Christchurch', 'Hamilton', 'Wellington', 'Queenstown']

// cities_nz.push('Dunedin')
// console.log(cities_nz);

// cities_au.unshift('Perth')
// console.log(cities_au);

// let fisrtNZCities = cities_nz.slice(0, 3)
// console.log(fisrtNZCities);

// cities_au.splice(4, 0, 'Townsville')
// console.log(cities_au);

// cities_nz.splice(2, 0, 'Tauranga')
// console.log(cities_nz);

// cities_nz.forEach((city, index) => console.log(`${index}: ${city}`))

// const people = [
//     {firstName: 'Wendy', lastName: 'Darton', age: 52, location: 'QLD'},
//     {firstName: 'Steven', lastName: 'Williams', age: 41, location: 'NSW'},
//     {firstName: 'Phillip', lastName: 'Robertson', age: 38, location: 'VIC'},
//     {firstName: 'Connor', lastName: 'Edmonds', age: 24, location: 'NZ'},
//     {firstName: 'Sheila', lastName: 'Horne', age: 37, location: 'QLD'},
// ]

// //find peole who live in VIC (using a condition instead of just printing object)
// let vicPerson = people.find(person => person.location == 'VIC')
// console.log(vicPerson);

// //find people starting with 'S'
// let sPeople = people.find(person => person.firstName.startsWith('S'))
// console.log(sPeople); //stops at Steven because he is the first (use .filter to find all


// //birthday so age+1
// let olderPeople = people.map(person => person.age+1)
// console.log(olderPeople);

// //use find and map to get the first name of the person living in NZ

// console.log(people.find(person => person.location == 'NZ').firstName)

// // use split, map and join to change the months into their short 3 letter version:
// let months = 'January,February,March,April,May,June,July,August,September,October,December';
// console.log(months.split(',').map(short => short.substring(0,3)).join(', '));
// //use a new parameter when using .map


const plantNames = new Map();
plantNames.set('Blueberry', 'Vaccinium');
plantNames.set('Daylily', 'Hemerocallis');
plantNames.set('Foxglove', 'Digitalis');
plantNames.set('Lavender', 'Lavandula');
plantNames.set('Turmeric', 'Curcuma Longa')

// //practice get and set and has
// plantNames.set('Cinnamon', 'Cinnamomum verum');

// console.log(plantNames);
// console.log(plantNames.get('Blueberry'));
// console.log(plantNames.has('Cinnamon'));


// //practice for … of loop with keys or entries or values
// for (let commonName of plantNames.keys()) {
//     console.log(commonName);
// }

// const foods = new Set(['pizza', 'chips', 'pasta', 'seafood', 'salad', 'noodles', 'vegetables']);
// //try both kinds of for loops

// for (let food of foods) {
//     console.log('for...of loop' + food);
// }
// //food is new variable where the loop will be stored

// foods.forEach(food => console.log('forEach loop '+ food)); 








function printWeather() {
    // let currentTemp = 28; //degrees celcius
    // let maxTemp = 33;
    // let windSpeed = 5; //km/h
    // let forecast = 'Mostly sunny';
    const [currentTemp, maxTemp, windSpeed, forecast] = [28, 33, 5, 'Mostly sunny']
    console.log(`Today's weather forecast: ${forecast}, with a wind speed of ${windSpeed}km/h. The current temperature is ${currentTemp} with a max of ${maxTemp} degrees.`)
}

printWeather()


const foods = new Set(['pizza', 'chips', 'pasta', 'seafood', 'salad', 'noodles', 'vegetables']);
const [firstFood, ,thirdFood, ,fifthFood, ...rest] = foods;
console.log(firstFood, thirdFood, fifthFood);
console.log(...rest);

for (let [commonName, latinName] of plantNames.entries)
