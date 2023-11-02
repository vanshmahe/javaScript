const letters = new Set(["a","b","c"]);
letters.add("d");
letters.add('b');
//console.log(letters);

//letters.forEach((value) => console.log(value));

let text = "";
for (const x of letters.values()) {
  text += x + `\n`;
}
console.log(text);