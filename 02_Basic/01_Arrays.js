const cars=[
    "alto",
    "k10",
    "swift",
    "mustang"
];
// const cars= [];
// cars[0]= "Saab";
// cars[1]= "Volvo";
// cars[2]= "BMW";
//let car=cars[0];

//array to string

//let car=cars.toString();


//let lastCar=cars[cars.length-1]

// add new element
// cars.push("i10");
// cars[cars.length]="i20";


//let result=Array.isArray(cars);
let result= cars.sort();
document.getElementById("demo").innerHTML=result;