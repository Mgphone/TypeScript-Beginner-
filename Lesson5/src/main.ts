type One =string
type Two=string|number
type Three='Hello'


// covert to more or less specific
let a:One='Hello'
let b=a as Two;// less specific
let c=a as Three//more specific

let d=<One>'world';
let e=<string|number> 'world';

const addorConcat=(a:number,b:number,c:'add'|'concat'):number|string=>{
  if (c==='add')return a+b
  return ''+a+b
}

let myVal:string=addorConcat(2,2,'concat') as string

//be careful,,,, TS retrun string 
let myNextVal:number=addorConcat(2,2,'concat') as number


//10 as string
(10 as unknown) as string

//The DOM
const img=document.querySelector('img')!;
const myImg=document.getElementById('#img') as HTMLImageElement
const nextImg=<HTMLImageElement>document.getElementById('#img')

img.src
myImg.src
nextImg.src


