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
 * lang.Number
 * 
 * @export
 * @class NumberT
 */

var NumberT = function () {
    function NumberT() {
        _classCallCheck(this, NumberT);
    }

    _createClass(NumberT, null, [{
        key: 'withErrorMargin',


        /**
         * 浮点数误差检查
         * 
         * NumberT.withErrorMargin( 0.1+0.2, 0.3)
         * 
         * @static
         * @param {number} [left=throwIfMiss(NumberT.withErrorMargin)] 运算结果
         * @param {number} [right=throwIfMiss(NumberT.withErrorMargin)] 期望结果
         * @returns {boolean}
         * 
         * @memberOf NumberT
         */
        value: function withErrorMargin() {
            var left = arguments.length <= 0 || arguments[0] === void 0 ? throwIfMiss(NumberT.withErrorMargin) : arguments[0];
            var right = arguments.length <= 1 || arguments[1] === void 0 ? throwIfMiss(NumberT.withErrorMargin) : arguments[1];

            return Math.abs(left - right) < Number.EPSILON;
        }

        /**
         * 判断被计算的值以及运算结果是否为安全整数
         * JavaScript 能够准确表示的整数范围在 -2^{53} ~ 2^{53} 之间(不包含两个端点)
         * 
         * @static
         * @param {Array < number >} [numbers=throwIfMiss(NumberT.trusty)] 被计算的整数集
         * @param {number} [result=throwIfMiss(NumberT.trusty)] 期望结果
         * @returns {boolean}
         * 
         * @memberOf NumberT
         */

    }, {
        key: 'trusty',
        value: function trusty() {
            var numbers = arguments.length <= 0 || arguments[0] === void 0 ? throwIfMiss(NumberT.trusty) : arguments[0];
            var result = arguments.length <= 1 || arguments[1] === void 0 ? throwIfMiss(NumberT.trusty) : arguments[1];

            return numbers.concat(result).every(function (number) {
                return Number.isSafeInteger(number);
            });
        }

        /**
         * 判断是否为 NaN 或 'NaN'
         * 
         * NumberT.isFullNumber(NaN) // true
         * NumberT.isFullNumber('NaN') // true
         * NumberT.isFullNumber('0') // false
         * NumberT.isFullNumber(0) // false
         * 
         * @static
         * @param {(number|string)} number
         * @returns {boolean}
         * 
         * @memberOf NumberT
         */

    }, {
        key: 'isFullNaN',
        value: function isFullNaN() {
            var number = arguments.length <= 0 || arguments[0] === void 0 ? throwIfMiss(NumberT.isFullNaN) : arguments[0];

            if (typeof number === 'string') {
                return number === 'NaN';
            } else if (typeof number === 'number') {
                return Number.isNaN(number);
            }
            return false;
        }

        /**
         * 获取数值的二进制字符串
         * Javascript 的整数使用32位二进制形式表示
         * 
         * NumberT.binaryString(1) // '00000000000000000000000000000001'
         * 
         * @static
         * @param {number} [number=throwIfMiss(NumberT.binaryString,0)]
         * @returns {string}
         * 
         * @memberOf NumberT
         */

    }, {
        key: 'binaryString',
        value: function binaryString() {
            var number = arguments.length <= 0 || arguments[0] === void 0 ? throwIfMiss(NumberT.binaryString, 0) : arguments[0];

            return (number + '').padStart(Math.clz32(number), 0);
        }
    }]);

    return NumberT;
}();

exports.default = NumberT;