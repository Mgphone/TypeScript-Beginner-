"use strict";
//original JS code
//1st varitation
// let year: HTMLElement | null
// year=document.getElementById("year");
// let thisYear:string
// thisYear=new Date().getFullYear().toString();
// if(year){
//   year.setAttribute("datetime",thisYear)
//   year.textContent=thisYear;
// }
// console.log("aa");
//2nd varitation
const year = document.getElementById("year");
const thisYear = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
