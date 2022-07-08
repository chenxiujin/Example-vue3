import { Digest, Crypto } from "@/util/secure";
import AuthApi from "./api";
import Object from "@/util/object";
import config, { SystemInfo } from "@/config";

export class Login {
  static api: AuthApi = new AuthApi();
  static loginAccount(account: Account): void {
    account.addReferer("");
    this.api
      .getPublicKey()
      .then(publicKey => {
        window.sessionStorage.setItem("publicKey", publicKey);
        if (Object.isEmpty(publicKey)) {
          return;
        }
        const secretKey = Crypto.generateSecret();
        account.addSecretKey(window.btoa(secretKey));
        const secretKeyRsa = Crypto.rsaEncrypt(publicKey, account.secretKey);
        account.addSign(Digest.sha256With(account));
        const encryptData = Crypto.aesEncrypt(secretKey, JSON.stringify(account));
        this.api.signIn(secretKeyRsa ? secretKeyRsa : "", encryptData);
      })
      .catch(error => {
        console.log(error);
      });
  }

  static loginPhone() {
    // TODO
  }

  static loginQRCode() {
    // TODO
  }
}

export abstract class BaseSign {
  protected constructor() {
    this.addApplicationKey(config.APPLICATION_KEY)
      .addSystem(config.SYSTEM)
      .addLang(navigator.language)
      .addTimestamp(new Date().toISOString());
  }
  /**
   * 应用key
   */
  applicationKey!: string;

  /**
   * 系统信息
   */
  system!: SystemInfo;

  /**
   * 语言
   */
  lang!: string;

  /**
   * 来源
   */
  referer!: string;

  /**
   * 请求时间戳
   */
  timestamp!: string;

  /**
   * 密钥(base64形式)
   */
  secretKey!: string;

  /**
   * 登录类型
   */
  loginType!: string;

  /**
   * 签名
   */
  sign!: string;

  public addApplicationKey<T extends BaseSign>(applicationKey: string): T {
    this.applicationKey = applicationKey;
    return this as unknown as T;
  }

  public addSystem<T extends BaseSign>(system: SystemInfo): T {
    this.system = system;
    return this as unknown as T;
  }

  public addLang<T extends BaseSign>(lang: string): T {
    this.lang = lang;
    return this as unknown as T;
  }

  public addReferer<T extends BaseSign>(referer: string): T {
    this.referer = referer;
    return this as unknown as T;
  }

  public addTimestamp<T extends BaseSign>(timestamp: string): T {
    this.timestamp = timestamp;
    return this as unknown as T;
  }

  public addSecretKey<T extends BaseSign>(secretKey: string): T {
    this.secretKey = secretKey;
    return this as unknown as T;
  }

  public addLoginType<T extends BaseSign>(loginType: string): T {
    this.loginType = loginType;
    return this as unknown as T;
  }

  public addSign<T extends BaseSign>(sign: string): T {
    this.sign = sign;
    return this as unknown as T;
  }
}

export class Account extends BaseSign {
  username!: string;
  password!: string;
  captcha?: string;

  public static builder(): Account {
    const account = new Account();
    account.addLoginType("account");
    return account;
  }

  public build(): Account {
    return this;
  }

  public addUsername(username: string): Account {
    this.username = username;
    return this;
  }

  public addPassword(password: string): Account {
    this.password = password;
    return this;
  }

  public addCaptcha(captcha: string): Account {
    this.captcha = captcha;
    return this;
  }
}
