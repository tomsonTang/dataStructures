// console.log(new (Date::Date.bind(null,2015,1,1)));

function a(...sources){
    return sources.reduce((a,b)=> a+b,1)
}

console.log(a([1,2,3,4]));