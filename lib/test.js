'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// console.log(new (Date::Date.bind(null,2015,1,1)));

// function a(...sources){
//     return sources.reduce((a,b)=> a+b,1)
// }

// console.log(a([1,2,3,4]));
var a = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }];
var b = { a: 1, b: 2, c: 3 };
var c = _extends({}, a);
var d = [].concat(_toConsumableArray('qwe'));

console.log(c);