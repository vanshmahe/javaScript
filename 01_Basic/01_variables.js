let x=10;
let y=10;
let z=x+y;
//console.log(`Sum of ${x} and ${y} = ${z}`);
let a=2
// let a=8    // we cannot redeclare variable by let
let a1=5+6+9;
// a1= 5+5+"9";
// a1= 5 + "4" + 3;
// a1= "5"+5+9+8;
// a1= Number ("5") + 5 + 9 + 7;
// console.log(a1);

// const PI = 3.141592653589793;
// PI = 3.14;      // This will give an error
// PI = PI + 10;   // This will also give an error

//const PI=3.14;

/* The keyword const is a little misleading.

It does not define a constant value. It defines a constant reference to a value.

Because of this you can NOT:

Reassign a constant value
Reassign a constant array
Reassign a constant object
But you CAN:

Change the elements of constant array
Change the properties of constant object
*/

// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

console.log(cars);

// You can change an element:
cars[0] = "Toyota";
console.log(cars);

// You can add an element:
cars.push("Audi");
cars.pop();
console.log(cars);