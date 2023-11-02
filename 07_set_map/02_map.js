// const fruits = new Map();
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);

  // add new element
  fruits.set("grapes",250);

  // change existing

  fruits.set("apples",250);

  // get value

//   console.log(fruits.get("apples"));
//   console.log(fruits);

  //delete

  fruits.delete("apples");
  //console.log(fruits);

  //has

  //console.log(fruits.has("apples"));

  fruits.forEach((value,key) =>{
    console.log(key +"   " + value);
  })