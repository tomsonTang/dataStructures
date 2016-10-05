// console.log(new (Date::Date.bind(null,2015,1,1)));

// function a(...sources){
//     return sources.reduce((a,b)=> a+b,1)
// }

// console.log(a([1,2,3,4]));
let a = [{a:1},{a:2},{a:3},{a:4}];
let b = {a:1,b:2,c:3}
let c = {...a}

console.log(c);