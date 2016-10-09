/** 
 * lang.Object
 * @flow
 */

import 'babel-polyfill'

import MethodCheck from '../MethodCheck'

let throwIfMiss: Function = MethodCheck.throwIfMiss;

/**
 * @export
 * @class ObjectT
 */
export default class ObjectT {

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
    static easyMarge(
        target: Object,
        ...sources: Array < Object >
    ): Object {
        return Object.assign({}, ...sources);
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
    static easyClone(
        origin: Object = throwIfMiss(ObjectT.easyClone)
    ): Object {
        return ObjectT.easyMarge({}, origin)
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
    static easyClone2(
        origin: Object = throwIfMiss(ObjectT.easyClone)
    ): Object {
        return {...origin
        }
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
    static easyCloneWithParent(
        origin: Object = throwIfMiss(ObjectT.easyCloneWithParent)
    ): Object {
        return Object.assign(Object.create(Reflect.getPrototypeOf(origin)), origin)
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
    static jsonClone(
        origin: Object | string = throwIfMiss(ObjectT.jsonClone),
        replacer: {
            (key: string, value: string):any
        } | Array < string >
    ): Object {
        return JSON.parse(typeof origin === 'string' ? origin : JSON.stringify(origin))
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
    static deepMarge(
        target: Object,
        ...sources: Array < Object >
    ): Object {
        return sources.forEach((source) => {
            let descriptors: Object = Reflect.ownKeys(source).reduce((descriptors, key) => {
                descriptors[key] = Reflect.getOwnPropertyDescriptor(source, key)
                return descriptors;
            }, {})

            Object.defineProperties(target, descriptors)
        }), target
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
    static deepClone(
        origin: Object = throwIfMiss(ObjectT.deepClone)
    ): Object {
        return ObjectT.deepMarge({}, origin)
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
    static deepCloneWithParent(
        origin: Object = throwIfMiss(ObjectT.deepCloneWithParent)
    ): Object {
        return ObjectT.deepMarge(Object.create(Reflect.getPrototypeOf(origin)), origin)
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
    static isObject(value: any): boolean {
        /**
         * Object 构造函数为给定的值创建一个对象包装。
         * 如果给定值是  null or undefined，将会创建并返回一个空对象，否则，将返回一个与给定值对应类型的对象。
         * 若给定值是 对象 则返回该对象
         * 当以非构造函数形式被调用时，Object 等同于 new Object()
         */
        return Object(value) === value
    }
}