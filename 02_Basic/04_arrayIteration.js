// const numbers=[42,87,65,78,45];

// numbers.forEach(myFunction);

// function myFunction(value,index,array){
//     console.log(value +" index =" +index);
// }
// function myFunction2(value){
//     console.log(value );
// }

//JavaScript Array map()

//const numbers=[45,21,52,67,54,45,23,98];
// const number2=numbers.map(myFunction);

// function myFunction(value,index,array){
//     return value*2;
// }

//const numbers2=numbers.map((value) => value*2);


//document.getElementById("demo").innerHTML=numbers2;

// const numbers=[23,32,54,54,56,76,76,87];
// const newArr = numbers.flatMap((x) => x * 2);
// document.getElementById("demo").innerHTML=numbers   ;

//const numbers = [45, 4, 9, 16, 25];
//const over18=numbers.filter((value) => value>18)

// const over18 = numbers.filter(myFunction);
// function myFunction(value, index, array) {
//   return value > 18;
// }

//document.getElementById("demo").innerHTML=over18;

//reduce

// const numbers = [45, 4, 9, 16, 25];
// let sum = numbers.reduce(myFunction);

// function myFunction(total, value, index, array) {
//   return total + value;
// }
// document.getElementById("demo").innerHTML=sum;

//reduceRight()

// const numbers=[54,65,34,23,98,90];
// const reduced=numbers.reduceRight((total,value) => total+value);
// document.getElementById("demo").innerHTML=reduced;

/*JavaScript Array every()
The every() method checks if all array values pass a test.
*/

// const numbers = [45, 4, 9, 16, 25];
// let allOver18 = numbers.every(myFunction);

// document.getElementById("demo").innerHTML = "All over 18 is " + allOver18;

// function myFunction(value, index, array) {
//   return value > 18;
// }

/*JavaScript Array some()
The some() method checks if some array values pass a test.

*/

// const numbers = [45, 4, 9, 16, 25];
// let allOver18 = numbers.some(myFunction);

// document.getElementById("demo").innerHTML = "All over 18 is " + allOver18;

// function myFunction(value, index, array) {
//   return value > 18;
// }

//find()

// const numbers = [4, 9, 16, 25, 29];
// let allOver18=numbers.find(myFunction);

// console.log(allOver18);
// function myFunction(value, index, array) {
//        return value > 18;
//      }

// find index

// const numbers = [4, 9, 16, 25, 29];
// let allOver18=numbers.findIndex(myFunction);

// console.log(allOver18);
// function myFunction(value, index, array) {
//        return value > 18;
//      }

// Array.from()

// let myObj={
//     name:"Vansh",
//     class : "js",
//     year : 2023
// };
// let myStr="ABCDEFGH";
// let myArray=Array.from(myStr);
// //let myObjArray=Array.from(Object.values(myObj));
// let myObjArray2=Array.from(Object.keys(myObj))
// console.log(myObjArray2);

// includes()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.includes("Orange"));

//Array Spread (...)

// const q1 = ["Jan", "Feb", "Mar"];
// const q2 = ["Apr", "May", "Jun"];
// const q3 = ["Jul", "Aug", "Sep"];
// const q4 = ["Oct", "Nov", "Dec"];

// const year=[...q1,...q2,...q3,...q4];
// console.log(year);