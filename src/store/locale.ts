import { defineStore } from "pinia";
import AntDesignVueLocale from "@/i18n/extra/ant-design-vue";
import DayJsLocale from "@/i18n/extra/day-js";
import { message, LocaleMessage } from "@/i18n/extra/message";
import { Locale, DEFAULT_LOCALE } from "@/i18n/extra/locale";
import zhCN from "@/i18n/extra/message/zh_CN";

interface LocaleState {
  antDesignVueLocale: unknown;
  localeMessage: LocaleMessage;
}

const localeStore = defineStore("locale", {
  state: (): LocaleState => ({
    antDesignVueLocale: AntDesignVueLocale.get(DEFAULT_LOCALE),
    localeMessage: message.get(DEFAULT_LOCALE) || zhCN
  }),
  getters: {},
  actions: {
    localize(local: Locale): void {
      this.antDesignVueLocale = AntDesignVueLocale.get(local);
      DayJsLocale.localize(local);
      this.localeMessage = message.get(local) || zhCN;
    }
  }
});

export { localeStore };
