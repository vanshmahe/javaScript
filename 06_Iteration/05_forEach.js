const numbers = [45, 4, 9, 16, 25];

// numbers.forEach((value) =>{
//     console.log(value);
// })

numbers.forEach(myFunction);

function myFunction(value){
    console.log(value , "  >20  " , value>20);
}