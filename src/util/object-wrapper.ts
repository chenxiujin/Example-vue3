/**
 * 对Object的包装
 */
export default class ObjectWrapper {
  /**
   * 获取对象的所有key
   * @param obj 目标对象
   * @returns 对象的所有key
   */
  static keys(obj: object): string[] {
    return Object.keys(obj);
  }
}
