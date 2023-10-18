//const fruits = ["Banana", "Orange", "Apple", "Mango"];

//let arraySize=fruits.length

// convert array to string
//let result=fruits.toString();
//let result=fruits.join();
//let result =fruits.join(" * ");


// popping and pushing

//fruits.pop();
//let result=fruits.pop();
//document.getElementById("demo").innerHTML=fruits + "<br/>"+result;

// fruits.push("Kiwi");
// document.getElementById("demo").innerHTML=fruits;

/* Shifting Elements
Shifting is equivalent to popping, but working on the first element instead of the last.
*/

// fruits.shift();
// let result=fruits.shift();


// unshift()   adds element at start

//fruits.unshift("Kiwi");

// Changing Elements

//fruits[0]="Grapes";


//JavaScript Array delete()  --> delete leaves undefined holes in the array.

//delete fruits[0];


/* merging arrays  
--> creates a new array--> not change original array
--> can take any number of argements
--> can also take strings as arguments:
*/

// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
// const students= myBoys.concat(myGirls);
// document.getElementById("demo").innerHTML=students;

// Flattening an Array

// const myArr = [[1,2],[3,4],[5,6]];
// document.getElementById("demo").innerHTML=myArr.flat();

// splice
/* The first parameter (2) defines the position where new elements should be added (spliced in).

The second parameter (0) defines how many elements should be removed.

The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
*/
const fruits = ["Banana", "Orange", "Apple", "Mango"];
//fruits.splice(2, 0, "Lemon", "Kiwi");

//fruits.splice(2, 2, "Lemon", "Kiwi");
//fruits.splice(0, 2);

//JavaScript Array slice()
//slice() method slices out a piece of an array into a new array.
let slices=fruits.slice(0,2);   // 2 not included
document.getElementById("demo").innerHTML=fruits + "<br/>"+slices;


//document.getElementById("demo").innerHTML=result;