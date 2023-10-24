// Returns a random integer from 1 to 100:
//console.log(Math.floor(Math.random() * 100) + 1);


// Returns a random integer from 1 to 10:

//console.log(Math.floor(Math.random() * 10) + 1);
// Returns a random integer from 0 to 100:

//console.log(Math.floor(Math.random() * 101));
// Returns a random integer from 0 to 99:

//console.log(Math.floor(Math.random() * 100));

// Returns a random integer from 0 to 10:

//console.log(Math.floor(Math.random() * 11));

//A Proper Random Function

//random number between min (included) and max (excluded):

// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min) ) + min;
//   }

//   console.log(getRndInteger(20,58));

//between min and max (both included):

// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
//   }

  //console.log(getRndInteger(20,58));

//   for (let index = 0; index < 20; index++) {
//     console.log(getRndInteger(20,58));
    
//   }