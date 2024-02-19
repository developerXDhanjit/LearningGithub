/* Primitive data types 
1.String 
2.Number
3.Boolean
4.BigInt
5.null
5.Undefined
*/

//Declaring the variables

let mc = "Haruki Shiga";
let age = 17;
let isDead = false;
let hasFriends = null;
let sakura;

// Printing the values in console

console.log(typeof mc, mc);
console.log(typeof age, age);
console.log(typeof isDead, isDead);
console.log(typeof hasFriends, hasFriends);
console.log(typeof sakura, sakura);

//Some conversions

let mcNumber = Number(mc);
console.log(mcNumber, typeof mcNumber);

let ageString = String(age);
console.log(ageString, typeof ageString); //String

let isDeadNumber = Number(isDead);
console.log(isDeadNumber, typeof isDeadNumber); //NUMBER

//Some Testing on data types

console.log(typeof NaN);
console.log(typeof null);
console.log(typeof undefined);
