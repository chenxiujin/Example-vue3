import ObjectWrapper from "./object-wrapper";

export default class Object {
  // typeof 判断 "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function"

  /**
   * 判断对象是否function类型
   * @param obj 判断对象
   * @returns {boolean}
   */
  static isFunction(obj: unknown): boolean {
    return Object.isNotUndefined(obj) && typeof obj === "function";
  }

  /**
   * 判断对象是否number类型
   * @param obj 判断对象
   * @returns {boolean}
   */
  static isNumber(obj: unknown): boolean {
    return Object.isNotUndefined(obj) && typeof obj === "number";
  }

  /**
   * 判断对象是否string类型
   * @param obj 判断对象
   * @returns {boolean}
   */
  static isString(obj: unknown): boolean {
    return Object.isNotUndefined(obj) && typeof obj === "string";
  }

  /**
   * 判断对象是否bigint类型
   * @param obj 判断对象
   * @returns {boolean}
   */
  static isBigint(obj: unknown): boolean {
    return Object.isNotUndefined(obj) && typeof obj === "bigint";
  }

  /**
   * 判断对象是否boolean类型
   * @param obj 判断对象
   * @returns {boolean}
   */
  static isBoolean(obj: unknown): boolean {
    return Object.isNotUndefined(obj) && typeof obj === "boolean";
  }

  /**
   * 判断对象是否symbol类型
   * @param obj 判断对象
   * @returns {boolean}
   */
  static isSymbol(obj: unknown): boolean {
    return Object.isNotUndefined(obj) && typeof obj === "symbol";
  }

  /**
   * 判断对象是否object类型
   * @param obj 判断对象
   * @returns {boolean}
   */
  static isObject(obj: unknown): boolean {
    return Object.isNotUndefined(obj) && typeof obj === "object";
  }

  /**
   * 判断对象是否Map类型
   * @param obj 判断对象
   * @returns {boolean}
   */
  static isMap(obj: unknown): boolean {
    return obj instanceof Map;
  }

  /**
   * 判断对象是否Array类型
   * @param obj 判断对象
   * @returns {boolean}
   */
  static isArray(obj: unknown): boolean {
    return Array.isArray(obj);
  }

  /**
   * 判断一个对象是否是undefined，不判断null的情况
   * @param obj 判断对象
   * @returns {boolean}
   */
  static isUndefined(obj: unknown): boolean {
    return obj === undefined;
  }

  /**
   * 判断一个对象是否不是undefined，不判断不是null的情况
   * @param obj 判断对象
   * @returns {boolean}
   * @see {Object.isUndefined}
   */
  static isNotUndefined(obj: unknown): boolean {
    return !Object.isUndefined(obj);
  }

  /**
   * 判断一个对象是否是null，包含判断undefined的情况
   * @param obj 判断对象
   * @returns {boolean}
   * @see {Object.isUndefined}
   */
  static isNull(obj: unknown): boolean {
    return Object.isUndefined(obj) || obj === null;
  }

  /**
   * 判断一个对象是否不是null，包含判断不是undefined的情况
   * @param obj 判断对象
   * @returns {boolean}
   * @see {Object.isNull}
   */
  static isNotNull(obj: unknown): boolean {
    return !Object.isNull(obj);
  }

  /**
   * 判断对象是否为空
   * 为空逻辑
   * 1、对象为undefined
   * 2、对象为null
   * 3、对象为字符串并且为''
   * 4、对象是数组类型并且length=0
   * 5、对象是Map类型并且size=0
   * @param obj 判断对象
   * @returns {boolean}
   */
  static isEmpty(obj: unknown): boolean {
    return (
      obj === undefined ||
      obj === null ||
      obj === "" ||
      (Array.isArray(obj) && obj.length <= 0) ||
      (obj instanceof Map && obj.size <= 0)
    );
  }

  /**
   * 判断对象是否不为空
   * @param obj 判断对象
   * @returns {boolean}
   * @see {Object.isEmpty}
   */
  static isNotEmpty(obj: unknown): boolean {
    return !Object.isEmpty(obj);
  }

  /**
   * 判断对象是否为空白，只能判断字符串类型
   * 为空逻辑
   * 1、对象为字符串
   * 2、字符串除了空白符如' '外没有其他字符，调用trim方法判断
   * @param str 判断对象
   * @returns {boolean}
   * @see {Object.isEmpty}
   * @see {String.trim}
   */
  static isBlank(str: string): boolean {
    return Object.isEmpty(str) || str.trim() === "";
  }

  /**
   * 判断对象是否不为空白，只能判断字符串类型
   * @param str 判断对象
   * @returns {boolean}
   * @see {Object.isBlank}
   */
  static isNotBlank(str: string): boolean {
    return !Object.isBlank(str);
  }

  static keys(obj: object): string[] {
    return ObjectWrapper.keys(obj);
  }

  /**
   * 判断key在object中是否有效
   * @param object 判断key的对象
   * @param key 判断key
   * @returns {boolean}
   */
  static isValidKey(object: object, key: string | number | symbol): key is keyof typeof object {
    return key in object;
  }
}
