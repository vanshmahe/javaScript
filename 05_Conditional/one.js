// let age=10;

// //const vote=(age>=18) ? 'you can vote' : 'You cannot vote';

//console.log(vote);

//The Nullish Coalescing Operator (??)
/* The ?? operator returns the first argument if it is not nullish (null or undefined).

Otherwise it returns the second argument.
*/

// let name="vansh";
// let name2=null;
// let name3=undefined;
// let text="enter valid name";

// //const result= name ?? text;
// //const result= name2 ?? text;
// const result= name3 ?? text;
// console.log(result);

/*  The Optional Chaining Operator (?.)
The ?. operator returns undefined if an object is undefined 
or null (instead of throwing an error).
*/

// Create an object:
const car = {type:"Fiat", model:"500", color:"white"};
// Ask for car name:

console.log(car?.name);