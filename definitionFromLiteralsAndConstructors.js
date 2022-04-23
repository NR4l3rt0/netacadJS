// Definition from literals and constructors (when possible)
let b1 = true;
let b2 = Boolean(true);

let n1 = 100;
let n2 = Number(200);

let bi1 = 100n;
let bi2 = BigInt(200);
console.log(typeof bi2);
let s1 = "Hello";
let s2 = String("Hello");

let u1 = undefined;

// String interpolation
console.log('${b1} [${typeof b1}]');
console.log('${b2} [${typeof b2}]');
console.log('${n1} [${typeof n1}]');
console.log('${n2} [${typeof n2}]');
console.log('${bi1} [${typeof bi1}]');
console.log('${bi2} [${typeof bi2}]');
console.log('${s1} [${typeof s1}]');
console.log('${s2} [${typeof s2}]');
console.log('${u1} [${typeof u1}]');