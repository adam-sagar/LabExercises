// let longString = 'This is a really loooooooooooog string';
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



const product = {
    name: 'totallyLegitProduct',
    price: 99.99,
    discount_percent: 69,
    category: 'not useful',
    valueOf() {
        return this.price - (this.price * (this.discount_percent/100))
    },
    toString() {
        return `${this.name} (${this.category})`
    }
}

console.log(product.toString());
console.log(product.valueOf());



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


const cities_au = ['Sydney', 'Melbourne', 'Adelaide', 'Cairns', 'Brisbane']
const cities_nz = ['Auckland', 'Christchurch', 'Hamilton', 'Wellington', 'Queenstown']

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

const people = [
    {firstName: 'Wendy', lastName: 'Darton', age: 52, location: 'QLD'},
    {firstName: 'Steven', lastName: 'Williams', age: 41, location: 'NSW'},
    {firstName: 'Phillip', lastName: 'Robertson', age: 38, location: 'VIC'},
    {firstName: 'Connor', lastName: 'Edmonds', age: 24, location: 'NZ'},
    {firstName: 'Sheila', lastName: 'Horne', age: 37, location: 'QLD'},
]

//find peole who live in VIC (using a condition instead of just printing object)
let vicPerson = people.find(person => person.location == 'VIC')
console.log(vicPerson);

//find people starting with 'S'
let sPeople = people.find(person => person.firstName.startsWith('S'))
console.log(sPeople); //stops at Steven because he is the first (use .filter to find all


//birthday so age+1
let olderPeople = people.map(person => person.age+1)
console.log(olderPeople); //will just return age - to return as an object use {}