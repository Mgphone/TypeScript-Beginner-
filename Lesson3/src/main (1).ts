let StringArr=['one','two','three']
let guitars=['Strat','Les Paul',500]
let mixedData=['EVH',1990,true]

StringArr[0]='Phone'
StringArr.push('hey')

guitars[0]=2000;
guitars.unshift('hey')

let test=[]
let bands:string[]=[]
bands.push("Music")

//Tuple

let myTuple:[string,number,boolean]=['Dave',10,false]
let mixed=['John',22,true]
myTuple[1]=44
//objects
let myObj:object
myObj=[]
console.log(typeof myObj);

myObj=bands;
myObj={}

const exampleObj={
  prop1:'Name',
  prop2:true
}
exampleObj.prop2=false

interface Guitarist{
  name?:string,
  active:boolean,
  albums:(string|number)[]
}

let evh:Guitarist={
  name:'Eddie',
  active:false,
  albums:[1920,2000,'hello']
}

let jp:Guitarist={
  active:true,
  albums:['1',2,'IV']
}

const greetGuitarist=(guitarist:Guitarist)=>{

  if(guitarist.name){
    return `Hello ${guitarist.name}!`
  }
  return 'Hello'
}
console.log(greetGuitarist(evh));

// Enums 
// "Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime."


enum Grade{
  U=5,D,C,B,A,
}
console.log(Grade.A);



