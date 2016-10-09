'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *  MethodCheck
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *   
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


require('babel-polyfill');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @export
 * @class MethodCheck
 */
var MethodCheck = function () {
  function MethodCheck() {
    _classCallCheck(this, MethodCheck);
  }

  _createClass(MethodCheck, null, [{
    key: 'throwIfMiss',


    /**
     * 指定某一参数在 debug 模式下不得省略，否则抛出错误
     * 同时可指定该参数在非 debug 模式下返回的默认值
     *
     * function name(params = MethodCheck.throwIfMiss(name)) {}
     *
     * @static
     * @param {Function} [targetFunc=MethodCheck.throwIfMiss(MethodCheck.throwIfMiss)] 被检查函数
     * @param {*} defaultValue 默认值
     *
     * @memberOf MethodCheck
     */
    value: function throwIfMiss() {
      var targetFunc = arguments.length <= 0 || arguments[0] === void 0 ? MethodCheck.throwIfMiss(MethodCheck.throwIfMiss) : arguments[0];
      var defaultValue = arguments[1];


      //读取配置文件 常看当前是否debug 模式 并缓存当前配置文件
      var debug = true;

      if (debug) throw new Error('Miss parameter in ' + targetFunc.name);else return defaultValue;
    }
  }]);

  return MethodCheck;
}();

exports.default = MethodCheck;


MethodCheck.throwIfMiss();