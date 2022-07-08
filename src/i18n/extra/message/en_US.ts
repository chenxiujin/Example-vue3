import { Locale } from "@/i18n/extra/locale";
import { LocaleMessage } from "./index";

class EnUS implements LocaleMessage {
  locale: Locale = Locale.en_US;
  SIMPLIFIED_CHINESE = "Simplified chinese";
  ENGLISH = "English";
  SIGN_IN = "Sign in";
  SIGN_UP = "Sign up";
  SIGN_OUT = "Sign out";
  USERNAME = "Username";
  PASSWORD = "Password";
  EMAIL = "Email";
  MOBILE = "Mobile";
  CAPTCHA = "Captcha";
}

export default new EnUS();
