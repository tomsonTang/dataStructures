"use strict";

// console.log(new (Date::Date.bind(null,2015,1,1)));

function a() {
    for (var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++) {
        sources[_key] = arguments[_key];
    }

    return sources.reduce(function (a, b) {
        return a + b;
    }, 1);
}

console.log(a([1, 2, 3, 4]));