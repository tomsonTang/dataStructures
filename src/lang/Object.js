import 'babel-polyfill'

import {
    MethodCheck
} from '../MethodCheck'

let throwIfMiss = MethodCheck.throwIfMiss;

/**
 * lang.Object
 * 
 * @export
 * @class ObjectT
 */
export default class ObjectT {

    /**
     * 对象浅合并 仅且合并源对象的自身可枚举属性 排在后面的源对象会覆盖排在前面的源对象的同名属性
     * 若源对象内含有引用类型 则合并后的对应属性亦为其引用
     * 若源对象内含有访问器（accessor）则对应的访问器会被触发
     * 注意: 排在后面的源对象覆盖排在前面的源对象的同名属性时，若排前的源对象的该同名属性为只读状态(writeable:false) 会抛出异常且中断当前操作
     * 
     * @static
     * @param {any} sources 需合并源对象
     * @returns {Object}
     * 
     * @memberOf ObjectT
     */
    static easyMarge(...sources): Object {
        return Object.assign({}, ...sources));
    }

    /**
     * 得到一个对象的浅克隆版本 仅且克隆源源对象的自身可枚举属性 新克隆的版本不包含源对象的继承体系
     * 若源对象内含有引用类型 则新克隆的版本的对应属性亦为其引用
     * 若源对象内含有访问器（accessor）则对应的访问器会被触发
     * 
     * @static
     * @param {Object} [origin=throwIfMiss(ObjectT.easyClone)] 源对象
     * @returns {Object}
     * 
     * @memberOf ObjectT
     */
    static easyClone(origin: Object = throwIfMiss(ObjectT.easyClone)): Object {
        return ObjectT.easyMarge(origin)
    }


    /**
     * 得到一个对象的浅克隆版本 仅且克隆源对象的自身可枚举属性 新克隆的版本包含源对象的继承体系
     * 若源对象内含有引用类型 则新克隆的版本的对应属性亦为其引用
     * 若源对象内含有访问器（accessor）则对应的访问器会被触发
     * 
     * @static
     * @param {Object} [origin=throwIfMiss(ObjectT.clone)] 源对象
     * @returns {Object}
     * 
     * @memberOf ObjectT
     */
    static easyCloneWithParent(origin: Object = throwIfMiss(ObjectT.easyCloneWithParent)): Object {
        return Object.assign(Object.create(Reflect.getPrototypeOf(origin)), origin)
    }
    
    /**
     * JSON式克隆 仅且克隆源源对象的自身可枚举属性 新克隆的版本不包含源对象的继承体系
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
    static jsonClone(origin:Object|string = throwIfMiss(ObjectT.jsonClone),replacer:Function|Array = undefined):Object{
        return JSON.parse(typeof origin === 'string' ? origin : JSON.stringify(origin))
    }


    static deepMarge(...soruces):Object{
        return 
    }

    static deepClone(origin:Object = throwIfMiss(ObjectT.deepClone)):Object{
        
    }
}