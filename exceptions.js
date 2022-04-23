"use strict";


let div = function (a, b) { 
    if(b === 0) {
         throw new RangeError("Division by 0 not allowed!");
    } else {
     return a/b;
    }
}


try{
    console.log(div(4,4));
    div(2,0);
}catch(error){
    if(error instanceof RangeError)
        alert(error);
    else    
        alert("What happened?");
}


// Solution
/* function div(a, b) {
    if (b == 0) {
        throw new RangeError("Can’t divide by 0");
    }
    return a / b;
}
console.log(div(4, 2)); // -> 2
console.log(div(4, 0)); // -> Uncaught RangeError: Can’t divide by 0 */

let numbers = [10, 40, 0, 20, 50];

for(let num of numbers){
try {

        console.log(div(1000,num));
    
} catch (error) {
    if(error instanceof RangeError){
        console.log(error);
    }
}
}

/* for (let i = 0; i < numbers.length; i++) {
    let result;
    try {
        result = div(1000, numbers[i]);
    } catch (e) {
        result = e.message;
    }
    console.log(result);
} */