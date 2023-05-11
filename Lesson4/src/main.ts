
//Type Allias
type stringOrNumber=string|number

type stringOrNumberArray=(string|number)[]

//interface mostly work on object, class,(think about)
interface Guitarist{
  name?:string,
  active:boolean,
  albums:stringOrNumberArray//(string|number)[]
}
type UserId=stringOrNumber

//Literal types
let myName:'Dave'

let userName:'Dave'|'Phone'|'MgPhone'
userName='MgPhone'

//functions
const add=(a:number,b:number):number=>{
  return a+b
}

const logMsg=(message:any):void=>{
  console.log(message);
  
}

logMsg('Hello')
logMsg(add(2,3))

// let subtract=function(c:number,d:number):number{
//   return c-d
// }
let subtract=(c:number,d:number):number=>c-d;

type mathFunction=(a:number,b:number)=>number
// interface mathFunction{
//     (a:number,b:number):number
// }

let multiply:mathFunction=function(c,d){
  return c*d
}
logMsg(multiply(2,2))

// optional parameters
const addAll=(a:number,b:number,c?:number):number=>{
  if (typeof c!=='undefined'){
    return a+b+c
  }
  return a+b
}

const sumAll=(a:number=10,b:number,c:number=3):number=>{
  return a+b+c
}
logMsg((addAll(2,3)))
// console.log(addAll(3,4,5))
logMsg((sumAll(undefined,3)))

//Rest Parameters
const total=(a:number, ...nums:number[]):number=>{
  return a+nums.reduce((prev,curr)=> prev +curr )
}
logMsg(total(10,2,3))

const createError=(errMsg:string):never=>{
  throw new Error(errMsg);
}

const infinite=()=>{
  let i:number=1
  while(true){
    i++
    if(i>100) break
  }
}

//custom type guard
const isNumber=(value:any):boolean=>{
  return typeof value==='number'
  ?true :false
}
//use of the never type
const numberOrString=(value:number|string):string=>{
  if(typeof value==='string') return 'string'
  // if(typeof value==='number') return 'number'
  if(isNumber(value)) return 'number'
  return createError('This could not be happen')
}