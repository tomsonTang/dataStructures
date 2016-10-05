import 'babel-polyfill'
/**
 * lang.HTML
 * 
 * @export
 * @class HTMLT
 */
export default class HTMLT {
    
    /**
     * 
     * 
     * @static
     * 
     * @memberOf HTMLUtil
     */
    static Rander = {

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
        compile(template: string): Function {
            let evalExper = /<%=(.+?)%>/g;
            let expr = /<%([\s\S]+?)%>/g;

            template = template
                .replace(evalExper, '`); \n echo($1); \n echo(`')
                .replace(expr, '`); \n $1 \n echo(`');

            template += 'echo(`' + template + '`)';

            let script =
                `(function parse(data){
                    var output = "";

                    function echo(html) { 
                        output +=html;
                    }

                    ${template}

                    return output;
                    
                })`;

            let parse = this._cache.parse = eval(script);
            return parse;
        },


        /**
         * 解析模板，生成 HTML 代码
         * 
         * @param {string} template
         * @param {{}} [data={}]
         * @return {string}
         */
        render(template: string, data: {} = {}): string {
            return this.compile(template)(data);
        }
    }
}