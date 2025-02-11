import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      hero: {
        title: "Greetings Capt.",
        subTitle1: "Today's Mission:",
        subTitle2: "Save Your Money",
        desc: "This app is here to help you improve your saving habits, boost your financial literacy, and provide you with essential everyday info. Join us on a journey where we'll take your finances to the next level and save money on an intergalactic scale!",
      },
      info: {
        title: "Core Coords",
        desc: "Today, we’re in the perfect position and at the right level to kick off a successful savings plan.",
      },
      saverSection: {
        title: "Let's Set Goals",
        desc: "On the left side, write down your budget for the savings period. On the right side, write your financial goal that you want to achieve by the end of your deadline.",
        subDesc:
          "This step is essential for achieving your goal and gaining a strong dose of motivation.",
      },
      financeBars: {
        title: "Here you enter your expenses and income.",
        bars: {},
      },
      explainSection: {
        subTitle: "explanation",
        title: "Protocols for Your Intergalactic Voyage",
      },
    },
  },
  fr: {
    translation: {
      "Welcome to React": "Bienvenue à React et react-i18next",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: "en",
    // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },

    detection: {
      order: ["navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
