console.log("Break");

for (let index = 0; index < 10; index++) {
    if (index == 5) {
        break;
    }
    console.log(index);
}

console.log("Continue");
for (let index = 0; index < 10; index++) {
    if (index == 5) {
        continue;
    }
    console.log(index);
}