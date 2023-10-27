let x = 10.9;
let y = 20;
let choice = '+';
switch(choice){
    case '+' : 
    console.log( x+y );
    break;
    case 2 :  
    console.log( x-y );
    break;
    case 3: 
    console.log(x*y);
    break;
    case 4 : 
    console.log(x/y);
    break;
    case 5 : 
    console.log(x%y);
    break;
    case 6 : 
    console.log(Math.sqrt(x));
    break;
    case 7 : 
    console.log(Math.round(x));
    break;
    default:
        console.log("enter valid choice");
}