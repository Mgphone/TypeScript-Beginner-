"use strict";
//Type Allias
console.log("fuuu");


function names(namesAndAges: [String,Number][]/* type goes here */): string[] {
    return namesAndAges.map(a=>a[0]);
    
  }


  names([['Betty', 17], ['Cindy', 26], ['Dalili', 82], ['Ebony', 10]]);