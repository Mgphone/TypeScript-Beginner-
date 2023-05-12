"use strict";
//Utilify Types
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "adfdf",
    title: "final Proj",
    grade: 0,
};
console.log(assign1);
console.log(updateAssignment(assign1, { grade: 34 }));
const assignGraded = updateAssignment(assign1, { grade: 95 });
console.log(assignGraded);
////////////////////////////////////////
//Required and readonly change all the properties in an obj to be required
const recordAssignment = (assign) => {
    //send database or save
    return assign;
};
recordAssignment(Object.assign(Object.assign({}, assignGraded), { vertified: true }));
// NOTE: assignVerified won't work with recordAssignment!
// Why? Try it and see what TS tells you :) coz that is readonly and required
recordAssignment(Object.assign(Object.assign({}, assignGraded), { vertified: true }));
//////////////////
//Record....Record is a shortcut to
// defining an object type with a specific key type and value type.
const hexColorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
};
const finalGrades = {
    Sara: "B",
    Kelly: "U",
    Phone: "C",
};
const gradeData = {
    Sara: { assign1: 100, assign2: 200 },
    Kelly: { assign1: 100, assign2: 200 },
    Phone: { assign1: 100, assign2: 200 },
};
const score = {
    studentId: "34343",
    grade: 85,
};
const preview = {
    studentId: "adfadf",
    title: "Typescript",
};
////////////////////////
//Return Type
// ReturnType extracts the return type of a function type.
// type newAssign={title:string,points:number}
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign("Utilti 1", 30);
console.log(tsAssign);
const assignArgs = ["Number", 1];
const tAssign2 = createNewAssign(...assignArgs);
console.log(tAssign2);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
        return res.json();
    })
        .catch((err) => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
fetchUsers().then((users) => console.log(users));
