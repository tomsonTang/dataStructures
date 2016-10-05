'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('babel-polyfill');

var _MethodCheck = require('../MethodCheck');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var throwIfMiss = _MethodCheck.MethodCheck.throwIfMiss;

/**
 * lang.Function
 * 
 * @export
 * @class FunctionT
 */

var FunctionT = function () {
    function FunctionT() {
        _classCallCheck(this, FunctionT);
    }

    _createClass(FunctionT, null, [{
        key: 'pipeline',


        /**
         * 部署一个函数管道
         * 函数管道即前一个函数的输出是后一个函数的输入
         * 
         * const plus1 = a => a+1;
         * const mult2 = a => a*2;
         * const addThenMult = FunctionT.pipeline([plus1,mult2]);
         * 
         * addThenMult(5) // 12
         * 
         * @static
         * @param {Array<Function>} [funcs=throwIfMiss(FunctionT.pipeline)]
         * @returns {*}
         * 
         * @memberOf FunctionT
         */
        value: function pipeline() {
            var funcs = arguments.length <= 0 || arguments[0] === void 0 ? throwIfMiss(FunctionT.pipeline) : arguments[0];

            return function (values) {
                var i = 0;
                return values.reduce(function (a, b) {
                    return funcs[i++](a, b);
                });
            };
        }
    }]);

    return FunctionT;
}();

exports.default = FunctionT;