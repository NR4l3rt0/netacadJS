let num1 = prompt("Introduce one number, please: ");

let num2; 

if (Number.isNaN(num1)){
    alert("Bad answer!");
} else {
   num2 = prompt("Introduce another one, please: ");
}

let operation = Number.isNaN(num2)? "Bad answer" : prompt("Write an operation", "+");

num1 = Number(num1);
num2 = Number(num2);

switch(operation){
    case "+":
        alert(num1 + num2);
        break;
    case "-":
        alert(num1 + num2);
        break;
    case "*":
        alert(num1 * num2);
        break;
    case "/":
        alert(num1 / num2);
        break;
    case "**":
        alert(num1 ** num2);
        break;
    default:
        alert("What should we do with this?");
}



// let firstNumber = Number(prompt("Enter first number"));
// let secondNumber = Number(prompt("Enter second number"));
// let operand = prompt("Enter operand (+, -, * or /)");
// let result;

// if (!Number.isNaN(firstNumber) && !Number.isNaN(secondNumber)) {
//     switch (operand) {
//         case "+": result = firstNumber + secondNumber; break;
//         case "-": result = firstNumber - secondNumber; break;
//         case "*": result = firstNumber * secondNumber; break;
//         case "/": result = firstNumber / secondNumber; break;
//         default: result = "Error: unknown operand";
//     }
// } else {
//     result = "Error: at least one of the entered values is not a number";
// }
// alert(result);



