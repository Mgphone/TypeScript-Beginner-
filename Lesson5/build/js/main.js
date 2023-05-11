"use strict";
// covert to more or less specific
let a = 'Hello';
let b = a; // less specific
let c = a; //more specific
let d = 'world';
let e = 'world';
const addorConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addorConcat(2, 2, 'concat');
//be careful,,,, TS retrun string 
let myNextVal = addorConcat(2, 2, 'concat');
//10 as string
10;
//The DOM
const img = document.querySelector('img');
const myImg = document.getElementById('#img');
const nextImg = document.getElementById('#img');
img.src;
myImg.src;
nextImg.src;
