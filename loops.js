"use strict";
let counter;

const upperLimit = counter = Number(prompt("Insert counter"));
let limit   = Number(prompt("Insert inferior limit"));

// It is important the check if(Number.NaN(!limit) && cond2)

console.log("While");
while(counter >= limit ){
    console.log(counter);
    counter -= 10;
}

console.log("Do...while");
do{
    console.log(counter);
    counter += 10;
}while(counter <= upperLimit);


console.log("For: ");
for(let i = upperLimit; i >= limit; i -= 10){
    console.log(i);
}

// Solution 1
// for (i=100; i>=0; i-=10) {
//     console.log(i);
// }

// Solution 2
// let upperLimit = Number(prompt("Enter upper limit"));
// let lowerLimit = Number(prompt("Enter lower limit"));

// if (!Number.isNaN(upperLimit) && !Number.isNaN(lowerLimit) && upperLimit > lowerLimit) {
//     for (i = upperLimit; i >= lowerLimit; i -= 10) {
//         console.log(i);
//     }
// }






// Solution 3
/* let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];

for (number of numbers) {
    console.log(number);
}

for (number of numbers) {
    if (number % 2 === 0) {
        console.log(number);
    }
}

for (number of numbers) {
    if (number > 10 && number < 60) {
        console.log(number);
    }
} */

// Solution 4 (Interesting to do) (for x of y) -> arrays, iterations
/* let movies = [];
while (true) {
    let title = prompt("Enter movie title");
    let rating = prompt("Enter movie rating (imdb)");

    if (title === null || rating === null) {
        break
    } else {
        movies.push({
            title: title,
            rating: Number(rating)
        });
    }
}

console.log("All with ratings under 7:");
for (movie of movies) {
    if (movie.rating < 7) {
        console.log('${movie.title} (${movie.rating})');
    }
}

console.log("All with ratings over 7:");
for (movie of movies) {
    if (movie.rating >= 7) {
        console.log('${movie.title} (${movie.rating})');
        break;
    }
} */

// Solution 5  (for x in y)  -  in -> objects
/* let vessel = {
    LATITUDE: 40.07288,
    LONGITUDE: 154.48535,
    COURSE: 285.6,
    SPEED: 14.0,
    IMO: 9175717,
    NAME: "MARENO"
}

for (let key in vessel) {
    console.log('${key} -> ${vessel[key]}');
} */



// Solution 7 Modify calculator

/* while (true) {
    let firstNumber = prompt("Enter first number");
    let secondNumber = prompt("Enter second number");
    let operand = prompt("Enter operand (+, -, * or /)");
    let result;

    if (firstNumber === "Q" || secondNumber === "Q" || operand === "Q") {
        break;
    }

    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    if (!Number.isNaN(firstNumber) && !Number.isNaN(secondNumber)) {
        switch (operand) {
            case "+":
                result = firstNumber + secondNumber;
                break;
            case "-":
                result = firstNumber - secondNumber;
                break;
            case "*":
                result = firstNumber * secondNumber;
                break;
            case "/":
                result = firstNumber / secondNumber;
                break;
            default:
                result = "Error: unknown operand";
        }
    } else {
        result = "Error: at least one of the entered values is not a number";
    }
    alert(result);
} */



