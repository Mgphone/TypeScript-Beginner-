class Coder {
  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "Typescript"
  ) {
    name = name;
    music = music;
    age = age;
    lang = lang;
  }
  public getAge() {
    return `Hello, I am ${this.age}`;
  }
}
const MgPhone = new Coder("Phone", "Metal", 33);
// console.log(MgPhone.getAge());
// console.log(MgPhone.age);//got error
// console.log(MgPhone.lang);//got error

class Webdev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }
  public getLang() {
    return `I write ${this.lang}`;
  }
}
const Sara = new Webdev("Mac", "Sara", "HipHop", 44);
// console.log(Sara.age);
// console.log(Sara.lang);
/////////////////////////////////////

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}
class Guitarist implements Musician {
  name: string;
  instrument: string;
  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }
  play(action: string): string {
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
  static count: number = 0;

  static getCount(): number {
    return Peeps.count;
  }

  public id: number;
  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}
const John = new Peeps("John");
const Amy = new Peeps("Amy");
const Steve = new Peeps("Steve");
console.log(Steve.id);
console.log(Peeps.count);

//Static class methods are defined on the class itself.
//You cannot call a static method on an object, only on an object class.

//////////////////////////////////////////////
class Bands {
  private dataState: string[];
  constructor() {
    this.dataState = [];
  }
  public get data(): string[] {
    return this.dataState;
  }
  public set data(value: string[]) {
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
