"use strict";

let rosePrice = 8;
let numberOfRoses = 70;
let lilyPrice = 10;
let numberOfLilies = 50;
let tulipPrice = 2;
let numberOfTylips = 120;

let totalRoses = rosePrice * numberOfRoses;
let totalLilies = lilyPrice * numberOfLilies;
let totalTulips = tulipPrice * numberOfTylips;

let sum = totalRoses + totalLilies + totalTulips;

console.log("Rose – unit price: " + rosePrice +", quantity: " + numberOfRoses + ", value: " + totalRoses );
console.log("Lily – unit price: " + lilyPrice +", quantity: " + numberOfLilies + ", value: " + totalLilies );
console.log("Tulip – unit price: " + tulipPrice +", quantity: " + numberOfTylips + ", value: " + totalTulips );
console.log();
console.log("Total: " + sum);