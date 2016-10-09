'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

require('babel-polyfill');

var _MethodCheck = require('../MethodCheck');

var _MethodCheck2 = _interopRequireDefault(_MethodCheck);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /** 
                                                                                                                                                           * lang.HTML
                                                                                                                                                           * 
                                                                                                                                                           */

var throwIfMiss = _MethodCheck2.default.throwIfMiss;
/**
 * @export
 * @class HTMLT
 */

var HTMLT = function HTMLT() {
    _classCallCheck(this, HTMLT);
};

HTMLT.Rander = {

    /**
     * @property {} cache 
     * @private 
     * @memberOf Rander
     */
    _cache: {},

    /**
     * 解析模板，生成处理函数
     * 
     * @param {string} template 模板字符串
     * @memberOf Rander
     * @return {Function} 
     */
    compile: function compile(template) {
        var evalExper = /<%=(.+?)%>/g;
        var expr = /<%([\s\S]+?)%>/g;

        template = template.replace(evalExper, '`); \n echo($1); \n echo(`').replace(expr, '`); \n $1 \n echo(`');

        template += 'echo(`' + template + '`)';

        var script = '(function parse(data){\n                    var output = "";\n\n                    function echo(html) { \n                        output +=html;\n                    }\n\n                    ' + template + '\n\n                    return output;\n                    \n                })';

        var parse = this._cache.parse = eval(script);
        return parse;
    },


    /**
     * 解析模板，生成 HTML 代码
     * 
     * @param {string} template
     * @param {{}} [data={}]
     * @return {string}
     */
    render: function render(template) {
        var data = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];

        return this.compile(template)(data);
    }
};
exports.default = HTMLT;