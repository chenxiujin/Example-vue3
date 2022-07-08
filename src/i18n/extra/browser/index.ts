import { Locale } from "@/i18n/extra/locale";
import UAParser from "ua-parser-js";

const DEFAULT: Map<string, Locale> = new Map<string, Locale>([
  ["en-US", Locale.en_US],
  ["en", Locale.en_US],
  ["zh-CN", Locale.zh_CN]
]);

const uaParser = new UAParser();

const browserLocale = (browser?: string): Locale => {
  browser = browser || uaParser.getBrowser().name;
  switch (browser) {
    case "Safari":
    case "Chrome":
    case "Chromium":
    default:
      return DEFAULT.get(navigator.language) || Locale.zh_CN;
  }
};

export { browserLocale };
