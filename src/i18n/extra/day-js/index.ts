import dayjs from "dayjs";
import "dayjs/locale/en";
import "dayjs/locale/zh-cn";
import { Locale } from "@/i18n/extra/locale";

const LOCALE: Map<Locale, string> = new Map<Locale, string>([
  [Locale.en_US, "en"],
  [Locale.en, "en"],
  [Locale.zh_CN, "zh-cn"]
]);

class DayJsLocale {
  static localize(local: Locale): void {
    dayjs.locale(LOCALE.get(local));
  }
}

export default DayJsLocale;
