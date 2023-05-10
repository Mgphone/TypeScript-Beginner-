"use strict";
let StringArr = ['one', 'two', 'three'];
let guitars = ['Strat', 'Les Paul', 500];
let mixedData = ['EVH', 1990, true];
StringArr[0] = 'Phone';
StringArr.push('hey');
guitars[0] = 2000;
guitars.unshift('hey');
let test = [];
let bands = [];
bands.push("Music");
//Tuple
let myTuple = ['Dave', 10, false];
let mixed = ['John', 22, true];
myTuple[1] = 44;
//objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: 'Name',
    prop2: true
};
exampleObj.prop2 = false;
let evh = {
    name: 'Eddie',
    active: false,
    albums: [1920, 2000, 'hello']
};
let jp = {
    active: true,
    albums: ['1', 2, 'IV']
};
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name}!`;
    }
    return 'Hello';
};
console.log(greetGuitarist(evh));
// Enums 
// "Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime."
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 5] = "U";
    Grade[Grade["D"] = 6] = "D";
    Grade[Grade["C"] = 7] = "C";
    Grade[Grade["B"] = 8] = "B";
    Grade[Grade["A"] = 9] = "A";
})(Grade || (Grade = {}));
console.log(Grade.A);
