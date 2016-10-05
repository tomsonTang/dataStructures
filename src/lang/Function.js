import 'babel-polyfill'

import {
    MethodCheck
} from '../MethodCheck'

let throwIfMiss = MethodCheck.throwIfMiss;

/**
 * lang.Function
 * 
 * @export
 * @class FunctionT
 */
export default class FunctionT {

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
    static pipeline(funcs: Array < Function > = throwIfMiss(FunctionT.pipeline)): any {
        return (values) => {
            let i = 0;
            return values.reduce((a, b) => funcs[i++](a, b));
        }
    }
}