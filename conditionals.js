let userAnswer = prompt("Introduce a number: ");

if (userAnswer > 90 && userAnswer < 110){
    window.alert("Bingo!");
} else {
    alert("Miss");
}


let msg = (userAnswer > 90 && userAnswer < 110)? "Bingo!" : "Miss";

alert(msg);