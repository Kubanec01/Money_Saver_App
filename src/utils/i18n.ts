import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      components: {
        explainBtn: {
          text: "See More",
        },
        resetModal: {
          title:
            "You are about to reset all values! Are you sure you want to do this?",
          desc: "By pressing the destructive button, you will reset all your values. Budget, Goal, Expenses, Results, and Graphs will have a value of zero.",
          leftBtn: "Delay self-destruction",
          rightBtn: "Yes, Destroy everything",
        },
        missingBudgetModal: {
          title: "Do you want to spend from your budget without having a budget?",
          desc: "Don't worry, Captain, this can happen to the best of us. Please enter the coordinates for your budget so you can continue managing your finances.",
          leftBtn: "Roger that, over",
          rightBtn: "What?! Tell me more",
        }
      },
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
      explainData: {
        1: {
          title: "Budget and Goal",
          desc: "A section where you can record your budget and goal to achieve financial savings.",
        },
        2: {
          title: "Add & Save",
          desc: "Your journey begins here. You categorize expenses into different groups, giving you a clear overview of what you're spending your money on and how much.",
        },
        3: {
          title: "Mission Results",
          desc: "The results of your achievements are displayed in this table, providing you with a detailed overview of the path your expenses are taking.",
        },
        4: {
          title: "Graphs and Percentages",
          desc: "Provide a more mathematical insight into how well you’ve met your expectations. The first percentage shows how much you’ve saved, the second percentage displays the cost of essential investments, and the third percentage highlights how much you’re spending on Fun and Other activities.",
        },
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
