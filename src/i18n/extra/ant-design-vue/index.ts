import enUS from "ant-design-vue/es/locale/en_US";
import zhCN from "ant-design-vue/es/locale/zh_CN";
import { Locale } from "@/i18n/extra/locale";

const LOCALE: Map<Locale, unknown> = new Map<Locale, unknown>([
  [Locale.en_US, enUS],
  [Locale.en, enUS],
  [Locale.zh_CN, zhCN]
]);

export default LOCALE;
