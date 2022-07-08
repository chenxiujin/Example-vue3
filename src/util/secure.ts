import CryptoJS from "crypto-js";
import JSEncrypt from "jsencrypt";
import Object from "./object";

/**
 * 摘要类
 */
export class Digest {
  /**
   * sha256 信息摘要
   * @param word 待摘要数据
   * @returns {*} 摘要后数据
   */
  static sha256With(data: object): string {
    return Digest.sha256(Digest.sortStringify(data));
  }

  /**
   * sha256 信息摘要
   * @param word 待摘要数据
   * @returns {*} 摘要后数据
   */
  static sha256(word: string): string {
    return CryptoJS.SHA256(word).toString();
  }

  private static sortStringify(data: object): string {
    return JSON.stringify(Digest.doSortData(data));
  }

  private static doSortData(data: object): object {
    const dataJson = JSON.parse(JSON.stringify(data));
    const keys: string[] = Object.keys(dataJson);
    keys.sort();
    const sortData: any = {};
    for (const key of keys) {
      const element = dataJson[key];
      if (!Object.isObject(element) || Object.isArray(element)) {
        sortData[key] = element;
      } else {
        sortData[key] = this.doSortData(element);
      }
    }
    return sortData;
  }
}

/**
 * 加密类
 */
export class Crypto {
  /**
   * 生成aes密钥, 默认32位长度
   */
  static generateSecret(length?: number): string {
    const tuples = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@#$^()!+-*/-_=|{}:;'$%,<.>/?";
    let secretKey = "";
    if (!length) {
      length = 32;
    }
    for (let i = 0; i < length; i++) {
      secretKey += tuples[Math.floor(Math.random() * tuples.length)];
    }
    return secretKey;
  }

  /**
   * aes 加密 加密方式 RSA/ECB/PKCS1Padding
   * @param key 密钥 16字节或32字节十六进制数作为密钥
   * @param data 待加密数据
   * @returns {string} 加密后数据
   */
  static aesEncrypt(key: string, data: string): string {
    const keyParse = CryptoJS.enc.Utf8.parse(key);
    const parseData = CryptoJS.enc.Utf8.parse(data);
    const encrypt = CryptoJS.AES.encrypt(parseData, keyParse, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 });
    return encrypt.toString();
  }

  /**
   * aes 解密 加密方式 RSA/ECB/PKCS1Padding
   * @param key 密钥 16字节或32字节十六进制数作为密钥
   * @param data 待解密数据
   * @returns {string} 解密后的数据
   */
  static aesDecrypt(key: string, data: string): string {
    const keyParse = CryptoJS.enc.Utf8.parse(key);
    const decrypt = CryptoJS.AES.decrypt(data, keyParse, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 });
    return CryptoJS.enc.Utf8.stringify(decrypt).toString();
  }

  /**
   * 创建rsa对象
   * @param privateKey 私钥
   * @param publicKey 公钥
   * @returns {JSEncrypt}
   */
  static rsa(privateKey?: string, publicKey?: string): JSEncrypt {
    const rsa = new JSEncrypt();
    if (privateKey) {
      rsa.setPrivateKey(privateKey);
    }
    if (publicKey) {
      rsa.setPublicKey(publicKey);
    }
    return rsa;
  }

  /**
   * rsa公钥加密
   * @param publicKey 公钥
   * @param data 加密数据
   * @returns {string} 加密后数据
   * @returns {false} 加密失败
   */
  static rsaEncrypt(publicKey: string, data: string): string | false {
    if (!publicKey) {
      return false;
    }
    const rsa = Crypto.rsa(undefined, publicKey);
    rsa.setPublicKey(publicKey);
    return rsa.encrypt(data);
  }

  /**
   * rsa私钥解密
   * @param privateKey 私钥
   * @param data 解密数据
   * @returns {string} 解密后数据
   * @returns {false} 解密失败
   */
  static rsaDecrypt(privateKey: string, data: string): string | false {
    if (!privateKey) {
      return false;
    }
    const rsa = Crypto.rsa(privateKey, undefined);
    return rsa.decrypt(data);
  }

  /**
   * rsa私钥签名
   * @param privateKey 私钥
   * @param data 签名数据
   * @returns {string} 签名
   * @returns {false} 签名失败
   */
  static rsaSign(privateKey: string, data: string): string | false {
    if (!privateKey) {
      return false;
    }
    const rsa = Crypto.rsa(privateKey, undefined);
    return rsa.encrypt(data);
  }

  /**
   * rsa公钥验签
   * @param publicKey 公钥
   * @param data 验签数据
   * @returns {string} 验签数据
   * @returns {false} 验签失败
   */
  static rsaVerify(publicKey: string, data: string): string | false {
    if (!publicKey) {
      return false;
    }
    const rsa = Crypto.rsa(undefined, publicKey);
    return rsa.decrypt(data);
  }
}
