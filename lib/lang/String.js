'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * lang.String
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

require('babel-polyfill');

var _MethodCheck = require('../MethodCheck');

var _MethodCheck2 = _interopRequireDefault(_MethodCheck);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var throwIfMiss = _MethodCheck2.default.throwIfMiss;

/**
 * @export
 * @class StringT
 */

var StringT = function () {
  function StringT() {
    _classCallCheck(this, StringT);
  }

  _createClass(StringT, null, [{
    key: 'is32Bit',


    /**
     * 判断字符是2字节还是4字节 
     * 兼容大于 \uFFFF 的 Unicode字符
     * 
     * 返回 false 为2字节字符
     * 返回 true  为4字节字符
     * 
     * @static
     * @param {string} [char=throwIfMiss(StringT.is32Bit)] 需要计算的字符
     * @returns {boolean}
     * 
     * @memberOf StringT
     */
    value: function is32Bit() {
      var char = arguments.length <= 0 || arguments[0] === void 0 ? throwIfMiss(StringT.is32Bit) : arguments[0];

      return char.codePointAt(0) > 0xFFFF;
    }

    /**
     * 返回正确的字符串长度 
     * 兼容大于 \uFFFF 的32位Unicode字符 版本1
     * 
     * @static
     * @param {string} [text=throwIfMiss(StringT.codePointLength)] 需要计算的字符串
     * @returns {number}
     * 
     * @memberOf StringT
     */

  }, {
    key: 'codePointLength',
    value: function codePointLength() {
      var text = arguments.length <= 0 || arguments[0] === void 0 ? throwIfMiss(StringT.codePointLength) : arguments[0];

      a = '';
      console.log(a);
      var result = text.match(/(?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g);
      return result ? result.length : 0;
    }

    /**
     * 返回正确的字符串长度 
     * 兼容大于 \uFFFF 的32位Unicode字符 版本2
     * 
     * @static
     * @param {string} [text=throwIfMiss(StringT.countSymbols)]
     * @returns {number}
     * 
     * @memberOf StringT
     */

  }, {
    key: 'countSymbols',
    value: function countSymbols() {
      var text = arguments.length <= 0 || arguments[0] === void 0 ? throwIfMiss(StringT.countSymbols) : arguments[0];

      return Array.from(text).length;
    }

    /**
     * 返回正确的字符串长度 
     * 兼容大于 \uFFFF 的32位Unicode字符 版本3
     * 
     * @static
     * @param {string} [text=throwIfMiss(StringT.length)]
     * @returns {number}
     * 
     * @memberOf StringT
     */

  }, {
    key: 'length',
    value: function length() {
      var text = arguments.length <= 0 || arguments[0] === void 0 ? throwIfMiss(StringT.length) : arguments[0];

      return [].concat(_toConsumableArray(text)).length;
    }

    /**
     * 反转字符串内容 
     * 兼容大于 \uFFFF 的32位Unicode字符
     *  
     * let str = 'x\uD83D\uDE80y'
     * bad:
     *      str.split('').reverse().join('') // 'y\uDE80\uD83Dx'
     * good:
     *      StringT.reverse(str) // 'y\uD83D\uDE80x'
     * 
     * 
     * @static
     * @param {string} [text=throwIfMiss(StringT.reverse)]
     * @returns {string}
     * 
     * @memberOf StringT
     */

  }, {
    key: 'reverse',
    value: function reverse() {
      var text = arguments.length <= 0 || arguments[0] === void 0 ? throwIfMiss(StringT.reverse) : arguments[0];

      return [].concat(_toConsumableArray(text)).reverse().join('');
    }
  }]);

  return StringT;
}();

exports.default = StringT;