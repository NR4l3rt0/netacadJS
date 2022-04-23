"use strict";

let box ={
    width : null,
    height: null,
    length: null
}

box.width = Number(window.prompt('Insert the width', 20));

let answer = window.confirm('Insert the height is 10?');

box.height = answer? 10 : 5;

box.length = Number(window.prompt('Insert the length', "We recommend 50..."));

let volume = box.width * box.height * box.length;
window.alert(`The box' volume is: ${volume}`);

