let bool = new Boolean();
console.log(`${bool} : ${typeof bool}`);  // string interpolation

let num  = new Number();
console.log(`${num} : ${typeof num}`);

let bigi = 0n;
console.log(`${bigi} : ${typeof bigi}`);

let str = new String();
console.log(`${str} : ${typeof str}`);


let und = undefined;
console.log(`${und} : ${typeof und}`);

// Chain of conversions
/* Case 1
 It seems not possible, I tried with nested string interpolations too. Check out!*/
let chainingConv = new Number(new String("1234"));
//let chainingConv = new Bigint( new Number(new String("1234")) + "n");
//let tmp = new Bigint( chainingConv + "n" );
//let chainingConv = new Boolean(new Bigint(new Number(new String("1234"))));
//console.log(tmp);

// Case 2
/*let chainingConv2 = new Boolean(new Bigint( new Number(new String("1234"))));
console.log(chainingConv2);*/

// Try adding two values of the same type and check the result type.
// All primitive types.
//let undSum = undefined + undefined.
//console.log(typeof undSum);
//let NaNSum = NaN + NaN.
//console.log(typeof NaNSum);
//let boolSum = true + true.
//console.log(boolSum);

console.log(NaN + "a");
console.log(undefined + "a");
console.log(false + "a");
console.log(null + "a");

str1 = 42 + new Number("1");
console.log(str1);


// Answers ------------------------------------------------------------------------------------------------------


// Creation of Boolean from conversions
// --> My error was that I mixed the concepts of conversions and object creation
let b = Boolean( BigInt(Number("1234")));
console.log(`${b} [${typeof b}]`);

// or

let s = "1234";
let n = Number(s);
let bi = BigInt(n);
let b2 = Boolean(bi);
console.log(`${b2} [${typeof b2}]`);



// Testing sum operation with same type in primites
let b = true + false;
let n = 100 + 200;
let bi = 100n + 200n;
let s = "He" + "llo";
let u = undefined + undefined;

console.log(`${b} [${typeof b}]`); // !!! number 
console.log(`${n} [${typeof n}]`);
console.log(`${bi} [${typeof bi}]`);
console.log(`${s} [${typeof s}]`);
console.log(`${u} [${typeof u}]`); // !!! number// 


// With different types
let b1 = true + 100; 
// let b2 = true + 100n; // -> error!
let b3 = true + "100"; 
// let n1 = 100 + 200n; // -> error!
let n2 = 100 + true;
let n3 = 100 + "200";
// let bi1 = 100n + 200;  // -> error!
// let bi2 = 100n + true  // -> error!
let bi3 = 100n + "200"; 
let s1 = "100" + 200;
let s2 = "100" + 200n;
let s3 = "100" + true;
let s4 = "abc" + 200;
let s5 = "abc" + 200n;
let s6 = "abc" + true;

console.log('${b1} [${typeof b1}]');    // -> 101 [number]
// console.log('${b2} [${typeof b2}]');
console.log('${b3} [${typeof b3}]');    // -> true100 [string]
// console.log('${n1} [${typeof n1}]');
console.log('${n2} [${typeof n2}]');    // -> 101 [number]
console.log('${n3} [${typeof n3}]');    // -> 100200 [string]
// console.log('${bi1} [${typeof bi1}]');
// console.log('${bi2} [${typeof bi2}]');
console.log('${bi3} [${typeof bi3}]');  // -> 100200 [string]
console.log('${s1} [${typeof s1}]');    // -> 100200 [string]
console.log('${s2} [${typeof s2}]');    // -> 100200 [string]
console.log('${s3} [${typeof s3}]');    // -> 100true [string]
console.log('${s4} [${typeof s4}]');    // -> abc200 [string]
console.log('${s5} [${typeof s5}]');    // -> abc200 [string]
console.log('${s6} [${typeof s6}]');    // -> abctrue [string]


// Solution to conversion
const str1 = 42 + +"1";