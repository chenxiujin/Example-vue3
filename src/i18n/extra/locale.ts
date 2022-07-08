import Locale from "../standard/rfc-1766";
import { browserLocale } from "../extra/browser";

const DEFAULT_LOCALE: Locale = browserLocale();

export { DEFAULT_LOCALE, Locale };
