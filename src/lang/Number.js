/** 
 * lang.Number
 * @flow
 */

import 'babel-polyfill'

import MethodCheck from '../MethodCheck'

let throwIfMiss: Function = MethodCheck.throwIfMiss;

/**
 * @export
 * @class NumberT
 */
export default class NumberT {

    /**
     * 浮点数误差检查
     * 
     * NumberT.withErrorMargin( 0.1+0.2, 0.3)
     * 
     * @static
     * @param {number} [left=throwIfMiss(NumberT.withErrorMargin)] 运算结果
     * @param {number} [right=throwIfMiss(NumberT.withErrorMargin)] 期望结果
     * @returns {boolean}
     * 
     * @memberOf NumberT
     */
    static withErrorMargin(
        left: number = throwIfMiss(NumberT.withErrorMargin),
        right: number = throwIfMiss(NumberT.withErrorMargin)
    ): boolean {
        return Math.abs(left - right) < Number.EPSILON
    }

    /**
     * 判断被计算的值以及运算结果是否为安全整数
     * JavaScript 能够准确表示的整数范围在 -2^{53} ~ 2^{53} 之间(不包含两个端点)
     * 
     * @static
     * @param {Array < number >} [numbers=throwIfMiss(NumberT.trusty)] 被计算的整数集
     * @param {number} [result=throwIfMiss(NumberT.trusty)] 期望结果
     * @returns {boolean}
     * 
     * @memberOf NumberT
     */
    static trusty(
        numbers: Array < number > = throwIfMiss(NumberT.trusty),
        result: number = throwIfMiss(NumberT.trusty)
    ): boolean {
        return numbers.concat(result).every((number => Number.isSafeInteger(number)))
    }

    /**
     * 判断是否为 NaN 或 'NaN'
     * 
     * NumberT.isFullNumber(NaN) // true
     * NumberT.isFullNumber('NaN') // true
     * NumberT.isFullNumber('0') // false
     * NumberT.isFullNumber(0) // false
     * 
     * @static
     * @param {(number|string)} number
     * @returns {boolean}
     * 
     * @memberOf NumberT
     */
    static isFullNaN(
        number: number | string = throwIfMiss(NumberT.isFullNaN)
    ): boolean {
        if (typeof number === 'string') {
            return number === 'NaN'
        } else if (typeof number === 'number') {
            return Number.isNaN(number)
        }
        return false;
    }

    /**
     * 获取数值的二进制字符串
     * Javascript 的整数使用32位二进制形式表示
     * 
     * NumberT.binaryString(1) // '00000000000000000000000000000001'
     * 
     * @static
     * @param {number} [number=throwIfMiss(NumberT.binaryString,0)]
     * @returns {string}
     * 
     * @memberOf NumberT
     */
    static binaryString(
        number: number = throwIfMiss(NumberT.binaryString, 0)
    ): string {
        return (number + '').padStart(Math.clz32(number), '0')
    }

}