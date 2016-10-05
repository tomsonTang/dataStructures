import 'babel-polyfill';
/**
 * MethodCheck
 * 
 * @export
 * @class MethodCheck
 */
export default class MethodCheck {

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
    static throwIfMiss(targetFunc:Function = MethodCheck.throwIfMiss(MethodCheck.throwIfMiss),defaultValue:any):any{

        //读取配置文件 常看当前是否debug 模式 并缓存当前配置文件
        let debug = true;
        
        if(debug) throw new Error(`Miss parameter in ${targetFunc.name}`)
        else return defaultValue
    }

}