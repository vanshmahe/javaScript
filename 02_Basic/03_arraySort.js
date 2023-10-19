// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// fruits.reverse();
// console.log(fruits);
// numeric sort
// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a,b) {return a-b });
// console.log(points);
// points.sort(function(a,b){return b-a});
// console.log(points);

//Using Math.max() on an Array
const points = [40, 100, 1, 5, 25, 10];
console.log(Math.max.apply(null,points));
console.log(Math.min.apply(null,points));

