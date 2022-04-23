"use strict";

let numbers = [50, 10, 40, 30, 20];
/* function compareNumbers(a, b) {
    let retVal = 0;
    if (a < b) {
        retVal = -1;
    } else if(a > b) {
        retVal = 1;
    }
    return retVal;
}
let sorted = numbers.sort(compareNumbers);
console.log(sorted); // [10, 20, 30, 40, 50] */

console.log(numbers.sort((num1, num2) => (num1 < num2)? -1 
                                        :(num1 > num2)?  1 
                                        : 0 ));

/* let numbers = [50, 10, 40, 30, 20];
let sorted = numbers.sort((a, b) => a - b);
console.log(sorted); // [10, 20, 30, 40, 50] */

console.log(numbers.sort((num1, num2) => num2 - num1));

/* let numbers = [50, 10, 40, 30, 20];
let sorted = numbers.sort((a, b) => b - a);
console.log(sorted); // [10, 20, 30, 40, 50] */

/* function add(num1, num2){
    return checkIsInteger(num1, num2)? num1 + num2 : NaN;
}

function sub(num1, num2){
    return checkIsInteger(num1, num2)? num1 - num2 : NaN;
}

function mult(num1, num2){
    return checkIsInteger(num1, num2)? num1 * num2: NaN;
}

function checkIsInteger(num1, num2){
    return (Number.isInteger(num1) && Number.isInteger(num2))? true : false;
}

console.log(add(12, 10)); // -> 22
console.log(mult(12, 10.1)); // -> NaN */

/* function add(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return NaN;
    }
    return a + b;
}

function sub(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return NaN;
    }
    return a - b;
}

function mult(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return NaN;
    }
    return a * b;
} */

let add  = (num1, num2) => checkIsInteger(num1, num2)? num1 + num2 : NaN;

let sub  = (num1, num2) => checkIsInteger(num1, num2)? num1 - num2 : NaN;

let mult = (num1, num2) => checkIsInteger(num1, num2)? num1 * num2: NaN;

let checkIsInteger = (num1, num2) => (Number.isInteger(num1) && Number.isInteger(num2))? true : false;

console.log(sub(12, 10)); // -> 2
console.log(mult(12, 10.1)); // -> NaN

// Solution
/* let add = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a + b;
let sub = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a - b;
let mult = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a * b; */

let action = (callback, num1, num2) => callback(num1, num2); 

console.log(action(add, 12, 10)); // -> 22
console.log(action(sub, 12, 10)); // -> 2
console.log(action(mult, 10, 10.1)); // -> NaN

// Solution
/* let action = (callback, a, b) => callback(a, b);
// or
let action = function (callback, a, b) {
    return callback(a, b);
}
// or
function action(callback, a, b) {
    return callback(a, b);
} */

/* let printSecuentialNumbers =  */


function printSecuentialNumbers(){
    let i = 1; 
  //   let intervalId = setInterval(delayPrinting(i++), 2000); 
    let intervalId = setInterval( () => console.log(i++), 2000);

    setTimeout( () => clearInterval(intervalId), 22000);

}

function delayPrinting(counter){
    console.log(counter++);
} 

printSecuentialNumbers();


// Solution
/* let counter = 1;
let intervalId = setInterval(function () {
    console.log(counter++);
}, 2000);
setTimeout(function () {
    clearInterval(intervalId)
}, 20000); */



/* let fibonacci = function (nthElement) {

    let sum = 0;
    let counter = 0;
    let previous = 0;
    let beforePrevious = 1;

    /* return nthElement == 0 ? fn0 : sum + ficonacci(nthElement - 1); 
    if(nthElement == 0){
        return 0;
    } else {
        sum = previous + beforePrevious;
        return sum + fibonacci(nthElement - 1);
        
    }
} */

// Solution
/* let fibbRec = function (n) {
    let retVal = 0;
    if (n != 0) {
        if (n === 1) {
            retVal = 1;
        } else {
            retVal = fibbRec(n - 1) + fibbRec(n - 2);
        }
    }
    return retVal;
} */

let fibonacci = n =>  (n == 0)? 0 
                    : (n == 1)? 1 
                    : (fibonacci(n - 1) + fibonacci(n - 2)); 
    

console.log(fibonacci(4)); // -> 3
console.log(fibonacci(7)); // -> 13


// Iterative
function fibbIter(n) {
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let c = a;
        a = b;
        b += c;        
    }
    return b;
}