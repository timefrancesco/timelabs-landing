import en from "./en.json";
import it from "./it.json";
import ja from "./ja.json";

const translations: Record<string, Record<string, string>> = { en, it, ja };

export type Locale = "en" | "it" | "ja";

export const locales: { code: Locale; label: string }[] = [
  { code: "en", label: "English" },
  { code: "it", label: "Italiano" },
  { code: "ja", label: "日本語" },
];

export function t(locale: Locale, key: string): string {
  return translations[locale]?.[key] ?? translations.en[key] ?? key;
}
