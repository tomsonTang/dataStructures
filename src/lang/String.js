import 'babel-polyfill'

import {
    MethodCheck
} from '../MethodCheck'

let throwIfMiss = MethodCheck.throwIfMiss;

/**
 * lang.String
 * 
 * @export
 * @class StringT
 */
export default class StringT {


    /**
     * 判断字符是2字节还是4字节 兼容大于 \uFFFF 的 Unicode字符
     * 
     * 返回 false 为2字节字符
     * 返回 true  为4字节字符
     * 
     * @static
     * @param {string} [char=throwIfMiss(StringT.is32Bit)] 需要计算的字符
     * @returns {boolean}
     * 
     * @memberOf StringT
     */
    static is32Bit(char: string = throwIfMiss(StringT.is32Bit)): boolean {
        return c.codePointAt(0) > 0xFFFF
    }



    /**
     * 返回正确的字符串长度 兼容大于 \uFFFF 的32位Unicode字符 版本1
     * 
     * @static
     * @param {string} [text=throwIfMiss(StringT.codePointLength)] 需要计算的字符串
     * @returns {number}
     * 
     * @memberOf StringT
     */
    static codePointLength(text: string = throwIfMiss(StringT.codePointLength)): number {
        let result = text.match(/[\s\S]/ug)
        return result ? result.length : 0
    }



    /**
     * 返回正确的字符串长度 兼容大于 \uFFFF 的32位Unicode字符 版本2
     * 
     * @static
     * @param {string} [text=throwIfMiss(StringT.countSymbols)]
     * @returns {number}
     * 
     * @memberOf StringT
     */
    static countSymbols(text: string = throwIfMiss(StringT.countSymbols)): number {
        return Array.from(text).length
    }

    /**
     * 返回正确的字符串长度 兼容大于 \uFFFF 的32位Unicode字符 版本3
     * 
     * @static
     * @param {string} [text=throwIfMiss(StringT.length)]
     * @returns {number}
     * 
     * @memberOf StringT
     */
    static length(text: string = throwIfMiss(StringT.length)): number {
        return [...text].length
    }

    
    /**
     * 反转字符串内容 兼容大于 \uFFFF 的32位Unicode字符
     *  
     * let str = 'x\uD83D\uDE80y'
     * bad:
     *      str.split('').reverse().join('') // 'y\uDE80\uD83Dx'
     * good:
     *      StringT.reverse(str) // 'y\uD83D\uDE80x'
     * 
     * 
     * @static
     * @param {string} [text=throwIfMiss(StringT.reverse)]
     * @returns {string}
     * 
     * @memberOf StringT
     */
    static reverse(text:string = throwIfMiss(StringT.reverse)):string{
        return [...text].reverse().join('');
    }

    
}