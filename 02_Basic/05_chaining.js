const myArray=[1,2,3,4,5,6,7,8,9,10];
let newArrar= myArray
                .map((item) => item*10)
                .filter((item) => item >=50)
                .map((item) => item+15);
console.log(newArrar);