"use strict";
class Coder {
    constructor(name, music, age, lang = "Typescript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        name = name;
        music = music;
        age = age;
        lang = lang;
    }
    getAge() {
        return `Hello, I am ${this.age}`;
    }
}
const MgPhone = new Coder("Phone", "Metal", 33);
// console.log(MgPhone.getAge());
// console.log(MgPhone.age);//got error
// console.log(MgPhone.lang);//got error
class Webdev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Sara = new Webdev("Mac", "Sara", "HipHop", 44);
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist("jimmy", "guitar");
console.log(Page);
console.log(Page.play("play"));
//extends vs implement
//extend if parents is child can be child coming with inheritance(
// properties,method) inheritance
//can only extend only one class
//implement same shape but not the child same shape ..polymorphism
//contract class has to follow, class need to following methods,properties
//can get multiple interface
////////////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps("John");
const Amy = new Peeps("Amy");
const Steve = new Peeps("Steve");
console.log(Steve.id);
console.log(Peeps.count);
//Static class methods are defined on the class itself.
//You cannot call a static method on an object, only on an object class.
//////////////////////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        // if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
        //   this.dataState = value;
        //   return;
        // } else throw new Error("no match of arry strings");
        this.dataState = value;
        return; //can not return value setter
    }
}
const MyBands = new Bands();
MyBands.data = ["Neil Young"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "Jessie J"];
console.log(MyBands.data);
MyBands.data = ["...MyBands.data", "123"];
console.log(MyBands.data);
