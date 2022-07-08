import zhCN from "./zh_CN";
import enUS from "./en_US";
import { Locale } from "@/i18n/extra/locale";

const message: Map<Locale, LocaleMessage> = new Map<Locale, LocaleMessage>([
  [Locale.en_US, enUS],
  [Locale.en, enUS],
  [Locale.zh_CN, zhCN]
]);

export interface LocaleMessage {
  locale: Locale;
  SIMPLIFIED_CHINESE: string;
  ENGLISH: string;
  SIGN_IN: string;
  SIGN_UP: string;
  SIGN_OUT: string;
  USERNAME: string;
  PASSWORD: string;
  EMAIL: string;
  MOBILE: string;
  CAPTCHA: string;
}

export { message };
