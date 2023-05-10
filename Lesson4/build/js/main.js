"use strict";
//Literal types
let myName;
let userName;
userName = 'MgPhone';
//functions
const add = (a, b) => {
    return a + b;
};
const losgMsg = (message) => {
    console.log(message);
};
losgMsg('Hello');
losgMsg(add(2, 3));
// let subtract=function(c:number,d:number):number{
//   return c-d
// }
let subtract = (c, d) => c - d;
// interface mathFunction{
//     (a:number,b:number):number
// }
let multiply = function (c, d) {
    return c * d;
};
losgMsg(multiply(2, 2));
// optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
const sumAll = (a = 10, b, c = 3) => {
    return a + b + c;
};
losgMsg((addAll(2, 3)));
// console.log(addAll(3,4,5))
losgMsg((sumAll(undefined, 3)));
//Rest Parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
losgMsg(total(10, 2, 3));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
//custom type guard
const isNumber = (value) => {
    return typeof value === 'number'
        ? true : false;
};
//use of the never type
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    // if(typeof value==='number') return 'number'
    if (isNumber(value))
        return 'number';
    return createError('This could not be happen');
};
