// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// console.log(text.length);

//slice method

let text1 = "Apple, Banana, Kiwi, Apple";
let part= text1.slice(1,4);       // 4 is excluded
//console.log(text1+ "    "+ part);
//console.log(text1.slice(5));

// If a parameter is negative, the position is counted from the end of the string:

//console.log(text1.slice(-4,-1));

//console.log(text1.substring(1,4));
//console.log(text1.substring(7));

// let replaced= text1.replace("Apple","Orange");
// console.log(text1 + "    Replaces text is "+ replaced);

// let replaced= text1.replace(/Apple/g,"Orange");
// console.log(text1 + "      "+ replaced);


// console.log(text1.toUpperCase());
// console.log(text1.toLowerCase());
//console.log(text1.toLocaleLowerCase());

// let a="Vansh", b= "Mahe";
// console.log(a.concat(" ",b));

//let value="     Hello          ";
// console.log(value + "     "+value.trim());
// console.log(value.length + "    "+ value.trim().length);
// console.log(value + "     "+value.trimStart());
// console.log(value.length + "    "+ value.trimStart().length);
// console.log(value + "     "+value.trimEnd());
// console.log(value.length + "    "+ value.trimEnd().length);

let text="150";
//console.log(text.padStart(5,"x"));
console.log(text.padEnd(1,"x"));