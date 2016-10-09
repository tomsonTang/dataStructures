'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * lang.Object
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

require('babel-polyfill');

var _MethodCheck = require('../MethodCheck');

var _MethodCheck2 = _interopRequireDefault(_MethodCheck);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var throwIfMiss = _MethodCheck2.default.throwIfMiss;

/**
 * @export
 * @class ObjectT
 */

var ObjectT = function () {
  function ObjectT() {
    _classCallCheck(this, ObjectT);
  }

  _createClass(ObjectT, null, [{
    key: 'easyMarge',


    /**
     * 对象浅合并 
     * 仅且合并源对象的自身可枚举属性 排在后面的源对象会覆盖排在前面的源对象的同名属性
     * 若源对象内含有引用类型 则合并后的对应属性亦为其引用
     * 若源对象内含有访问器（accessor）则对应的访问器会被触发
     * 注意: 排在后面的源对象覆盖排在前面的源对象的同名属性时，若排前的源对象的该同名属性为只读状态(writeable:false) 会抛出异常且中断当前操作
     * 
     * @static
     * @param {Object} target 目标对象
     * @param {any} sources 需合并源对象
     * @returns {Object}
     * 
     * @memberOf ObjectT
     */
    value: function easyMarge(target) {
      for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        sources[_key - 1] = arguments[_key];
      }

      return _extends.apply(void 0, [{}].concat(sources));
    }

    /**
     * 得到一个对象的浅克隆版本 版本1
     * 仅且克隆源源对象的自身可枚举属性 新克隆的版本不包含源对象的继承体系
     * 若源对象内含有引用类型 则新克隆的版本的对应属性亦为其引用
     * 若源对象内含有访问器（accessor）则对应的访问器会被触发
     * 
     * @static
     * @param {Object} [origin=throwIfMiss(ObjectT.easyClone)] 源对象
     * @returns {Object}
     * 
     * @memberOf ObjectT
     */

  }, {
    key: 'easyClone',
    value: function easyClone() {
      var origin = arguments.length <= 0 || arguments[0] === void 0 ? throwIfMiss(ObjectT.easyClone) : arguments[0];

      return ObjectT.easyMarge({}, origin);
    }

    /**
     * 得到一个对象的浅克隆版本 版本2
     * 仅且克隆源源对象的自身可枚举属性 新克隆的版本不包含源对象的继承体系
     * 若源对象内含有引用类型 则新克隆的版本的对应属性亦为其引用
     * 若源对象内含有访问器（accessor）则对应的访问器会被触发
     * 
     * @static
     * @param {Object} [origin=throwIfMiss(ObjectT.easyClone)] 源对象
     * @returns {Object}
     * 
     * @memberOf ObjectT
     */

  }, {
    key: 'easyClone2',
    value: function easyClone2() {
      var origin = arguments.length <= 0 || arguments[0] === void 0 ? throwIfMiss(ObjectT.easyClone) : arguments[0];

      return _extends({}, origin);
    }

    /**
     * 得到一个对象的浅克隆版本 
     * 仅且克隆源对象的自身可枚举属性 新克隆的版本包含源对象的继承体系
     * 若源对象内含有引用类型 则新克隆的版本的对应属性亦为其引用
     * 若源对象内含有访问器（accessor）则对应的访问器会被触发
     * 
     * @static
     * @param {Object} [origin=throwIfMiss(ObjectT.clone)] 源对象
     * @returns {Object}
     * 
     * @memberOf ObjectT
     */

  }, {
    key: 'easyCloneWithParent',
    value: function easyCloneWithParent() {
      var origin = arguments.length <= 0 || arguments[0] === void 0 ? throwIfMiss(ObjectT.easyCloneWithParent) : arguments[0];

      return _extends(Object.create(Reflect.getPrototypeOf(origin)), origin);
    }

    /**
     * JSON式克隆 
     * 仅且克隆源源对象的自身可枚举属性 新克隆的版本不包含源对象的继承体系
     * 
     * 非数组对象的属性不能保证以特定的顺序出现在序列化后的字符串中。
     * 布尔值、数字、字符串的包装对象在序列化过程中会自动转换成对应的原始值。
     * undefined、任意的函数以及 symbol 值，在序列化过程中会被忽略（出现在非数组对象的属性值中时）或者被转换成 null（出现在数组中时）。
     * 所有以 symbol 为属性键的属性都会被完全忽略掉，即便 replacer 参数中强制指定包含了它们。
     * 不可枚举的属性会被忽略
     * 
     * see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
     * 
     * @static
     * @param {(Object|string)} [origin=throwIfMiss(ObjectT.jsonClone)] 源对象
     * @param {(Function|Array)} [replacer=undefined] 
     * @returns {Object}
     * 
     * @memberOf ObjectT
     */

  }, {
    key: 'jsonClone',
    value: function jsonClone() {
      var origin = arguments.length <= 0 || arguments[0] === void 0 ? throwIfMiss(ObjectT.jsonClone) : arguments[0];
      var replacer = arguments[1];

      return JSON.parse(typeof origin === 'string' ? origin : JSON.stringify(origin));
    }

    /**
     * 对象深合并 
     * 合并源对象的所有可以或不可枚举的自身属性的属性包括可以或不可以枚举的 Symbol 属性 
     * 排在后面的源对象会覆盖排在前面的源对象的同名属性
     * 
     * @static
     * @param {Object} target 目标对象
     * @param {...Object} sources 源对象
     * @returns {Object}
     * 
     * @memberOf ObjectT
     */

  }, {
    key: 'deepMarge',
    value: function deepMarge(target) {
      for (var _len2 = arguments.length, sources = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        sources[_key2 - 1] = arguments[_key2];
      }

      return sources.forEach(function (source) {
        var descriptors = Reflect.ownKeys(source).reduce(function (descriptors, key) {
          descriptors[key] = Reflect.getOwnPropertyDescriptor(source, key);
          return descriptors;
        }, {});

        Object.defineProperties(target, descriptors);
      }), target;
    }

    /**
     * 对象深克隆 
     * 合并源对象的所有可以或不可枚举的自身属性的属性包括可以或不可以枚举的 Symbol 属性 排在后面的源对象会覆盖排在前面的源对象的同名属性 
     * 新克隆的版本不包含源对象的继承体系
     * 
     * @static
     * @param {Object} [origin=throwIfMiss(ObjectT.deepClone)] 源对象
     * @returns {Object}
     * 
     * @memberOf ObjectT
     */

  }, {
    key: 'deepClone',
    value: function deepClone() {
      var origin = arguments.length <= 0 || arguments[0] === void 0 ? throwIfMiss(ObjectT.deepClone) : arguments[0];

      return ObjectT.deepMarge({}, origin);
    }

    /**
     * 对象深克隆 
     * 合并源对象的所有可以或不可枚举的自身属性的属性包括可以或不可以枚举的 Symbol 属性 排在后面的源对象会覆盖排在前面的源对象的同名属性 
     * 新克隆的版本包含源对象的继承体系
     * 
     * @static
     * @param {Object} [origin=throwIfMiss(ObjectT.deepCloneWithParent)] 源对象
     * @returns {Object}
     * 
     * @memberOf ObjectT
     */

  }, {
    key: 'deepCloneWithParent',
    value: function deepCloneWithParent() {
      var origin = arguments.length <= 0 || arguments[0] === void 0 ? throwIfMiss(ObjectT.deepCloneWithParent) : arguments[0];

      return ObjectT.deepMarge(Object.create(Reflect.getPrototypeOf(origin)), origin);
    }

    /**
     * 判断参数是否为一个对象
     * 
     * let a = ()=>{}; 
     * typeof a // 'function'
     * ObjectT.isObject(a) //true
     * 
     * ObjectT.isObject({}) //true
     * ObjectT.isObject(Math) //true
     * ObjectT.isObject(1) //false
     * ObjectT.isObject(null) //false
     * ObjectT.isObject(undefined) //false
     * 
     * @static
     * @param {*} value 
     * @returns {boolean}
     * 
     * @memberOf ObjectT
     */

  }, {
    key: 'isObject',
    value: function isObject(value) {
      /**
       * Object 构造函数为给定的值创建一个对象包装。
       * 如果给定值是  null or undefined，将会创建并返回一个空对象，否则，将返回一个与给定值对应类型的对象。
       * 若给定值是 对象 则返回该对象
       * 当以非构造函数形式被调用时，Object 等同于 new Object()
       */
      return Object(value) === value;
    }
  }]);

  return ObjectT;
}();

exports.default = ObjectT;