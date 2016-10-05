'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.List = void 0;

var _MethodCheck = require('./MethodCheck');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * structure.List
 * 
 * @export
 * @class List
 * @extends {MethodCheck}
 */
var List = exports.List = function (_Array) {
  _inherits(List, _Array);

  function List(props) {
    _classCallCheck(this, List);

    var _this = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, props));

    _this.listSize = 0;
    _this.pos = 0;
    _this.dataStore = [];
    return _this;
  }

  /**
   * 
   * @memberOf List
   */


  /**
   * 
   * @memberOf List
   */


  /**
   * 
   * 
   * 
   * @memberOf List
   */


  return List;
}(Array);

;

var __methods = { clear: clear, toString: toString, remove: remove, find: find, getElement: getElement, insert: insert, append: append, front: front, end: end, next: next, prev: prev, currPos: currPos, moveTo: moveTo };

function toString() {}

function clear() {}

function remove() {}

function find() {}

function getElement() {}

function insert() {}

function append() {}

function front() {}

function end() {}

function prev() {}

function next() {}

function currPos() {}

function moveTo() {}