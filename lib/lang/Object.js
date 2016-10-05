'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('babel-polyfill');

var _MethodCheck = require('../MethodCheck');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var throwIfMiss = _MethodCheck.MethodCheck.throwIfMiss;
/**
 * lang.Object
 * 
 * @export
 * @class ObjectT
 */

var ObjectT = function () {
    function ObjectT() {
        _classCallCheck(this, ObjectT);
    }

    _createClass(ObjectT, null, [{
        key: 'marge',
        value: function marge() {
            var origin = arguments.length <= 0 || arguments[0] === void 0 ? throwIfMiss(ObjectT.marge) : arguments[0];

            for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                sources[_key - 1] = arguments[_key];
            }

            return sources.reduce(function (ori, source) {
                return _extends(ori, source);
            }, origin);
        }

        /**
         * 得到一个对象的浅克隆版本 新克隆的版本不包含源对象的继承体系
         * 
         * @static
         * @param {Object} [origin=throwIfMiss(ObjectT.easyClone)]
         * @returns {Object}
         * 
         * @memberOf ObjectT
         */

    }, {
        key: 'easyClone',
        value: function easyClone() {
            var origin = arguments.length <= 0 || arguments[0] === void 0 ? throwIfMiss(ObjectT.easyClone) : arguments[0];

            return _extends({}, origin);
        }
    }, {
        key: 'clone',
        value: function clone() {
            var origin = arguments.length <= 0 || arguments[0] === void 0 ? throwIfMiss(ObjectT.clone) : arguments[0];

            return _extends(Object.create(Reflect.getPrototypeOf(origin)), origin);
        }
    }]);

    return ObjectT;
}();

exports.default = ObjectT;