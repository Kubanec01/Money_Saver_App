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
        navbar: {
          accountButton: {
            title: "Account",
          },
          restartButton: {
            title: "Restart",
          },
        },
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
          title:
            "Do you want to spend from your budget without having a budget?",
          desc: "Don't worry, Captain, this can happen to the best of us. Please enter the coordinates for your budget so you can continue managing your finances.",
          leftBtn: "Roger that, over",
          rightBtn: "What?! Tell me more",
        },
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
        caption: "What you choose to input is up to you.",
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
      infoPage: {
        hero: {
          title: "Instructions for Starting <br/> Your Saving Adventure",
          desc: "Greetings, Captain! Here you’ll find all the instructions and information you’ll need on your journey. I’ll be at your service for the entire ride until the very end of your saving days.",
        },
        infoCarts: {
          coreCoordsInfo: {
            title: "Core Coords Section",
            desc: "This is your go-to motivational and info hub, packed with key-details for every great adventure. Alongside inspiring quotes, you’ll also find a handy way to keep track of time and date because every captain’s journey runs on perfect timing!",
          },
          budgetGoalInfo: {
            title: "Budget And Goal",
            desc: "This is where the foundation of your savings journey begins! In the 'Your Budget' section, set the amount you plan to stick to for your chosen saving period. This is your financial anchor—the key detail that shapes everything else on your path. Next, in the 'Your Goal' section, set your savings target. Decide how much you want to save and what you're aiming for.",
          },
          financeBarsInfo: {
            title: "Expenses Setter",
            desc: "In this section, you'll be tracking all your expenses. The expense tracker is divided into six categories based on priority and purpose, making it easy to see where your money is going. Simply enter the amount you've spent and hit the '+ button' to add it to the corresponding category. Made a mistake? No worries! Just use the '- button' to remove the amount and adjust your records effortlessly.",
          },
          expensesResultsInfo: {
            title: "Mission results are in!",
            desc: "Based on the records from the previous section, you now have a clear overview of your expenses. See exactly where your money went and how much you spent in each category. Anything you add or remove in the Expenses Setter will instantly update in this table, keeping your budget tracking seamless and up to date!",
          },
        },
        expensesReviewsCart: {
          savedBar: {
            title: "Saved",
            desc: "The Saved bar shows you how much money you've saved from your original budget, both as a percentage and a numerical value.",
          },
          spentBar: {
            title: "Spent",
            desc: "The Spent bar displays the total amount of money you've spent from your budget, both as a percentage and a numerical value.",
          },
          funOtherBar: {
            title: "Fun/Other",
            desc: "The Fun/Other bar shows the amount of money you've spent specifically on entertainment and other expenses from the Spent bar. This value is displayed both as a number and as a percentage, reflecting its share of the total Spent bar amount.",
          },
        },
        resetButtonInfo: {
          title: "Self-Destruction Button",
          desc: "If you have successfully completed your mission and a new savings period begins, you can easily delete all data by clicking this button. <span>WARNING</span>, once you confirm self-destruction, none of the data will be recoverable.",
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
