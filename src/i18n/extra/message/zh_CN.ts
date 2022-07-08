import { Locale } from "@/i18n/extra/locale";
import { LocaleMessage } from "./index";

class ZhCN implements LocaleMessage {
  locale: Locale = Locale.zh_CN;
  SIMPLIFIED_CHINESE = "简体中文";
  ENGLISH = "英文";
  SIGN_IN = "登录";
  SIGN_UP = "注册";
  SIGN_OUT = "注销";
  USERNAME = "用户名";
  PASSWORD = "密码";
  EMAIL = "邮箱";
  MOBILE = "手机号";
  CAPTCHA = "验证码";
}

export default new ZhCN();
