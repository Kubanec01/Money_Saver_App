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
            title: "User",
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
      auth: {
        buttons: {
          // AUTH PAGES
          logIn: "Log In",
          goBack: "Go Back",
          signUp: "Sign Up",
          sendIt: "Send It",
          forgotPassword: "Forgot Password",
          createNewAccount: "Create New Account",
          haveAnAccount: "I have an account",
          // USER BUTTON
          user: "User",
          changePassword: "Change Password",
          logOut: "Log Out",
        },
        placeholders: {
          name: "Name...",
          email: "Email...",
          password: "Password...",
          enterEmail: "Enter your email...",
          createPassword: "Create a password...",
          confirmPassword: "Confirm your password...",
          enterCurrentPassword: "Enter your current password...",
          setNewPassword: "Set new Password...",
          confirmYourCurrPassword: "Confirm your new password...",
        },
        labels: {
          currPassword: "Current Password",
          newPassword: "New Password",
          confirmPassword: "Confirm Password",
        },
        messages: {
          errors: {
            enterEmailAndPassword: "Please enter your email and password.",
            enterEmail: "Please enter a valid email.",
            passwordIsTooWeak: "Password is too weak.",
            wrongEmailOrPassword: "Wrong email or password.",
            ReturnToLoginPage: "Return to the Login page?",
            noUserFound: "No user found with this email",
            incorrectPassword: "Incorrect password.",
            fillAllInformation: "Please fill in all the required information.",
            passwordsDoNotMatch: "Passwords do not match.",
            emailsIsInUse: "This email is already in use.",
            weakPassword: "Password should be at least 6 characters.",
            unknownError: "Something went wrong, please try again later.",
            unknownErrorChangePassword:
              "Something went wrong. Is your current password correct?",
          },
          success: {
            resetPasswordSent:
              "Email was sent. If nothing arrives in 5 minutes, please check your spam or try again.",
            passwordResetEmailSent: "Password reset email send.",
            passwordWasChanged: "The password was successfully changed.",
          },
        },
      },
      loginPage: {
        title: "Money Saver",
        desc: "Your money. Your mission. Let’s launch it into something greater.",
      },
      forgotPasswordPage: {
        title: "Forgot Your Password?",
        desc: "Don't worry. Please enter your email and we will send you a message to reset your password.",
      },
      registerPage: {
        title: "Creating New Account",
      },
      changePasswordPage: {
        title: "Change Password",
      },
      notFoundPage: {
        title: "Page Not Found",
        desc: "Oops! The page you're looking for doesn't exist. It might have been moved or deleted.",
        button: "Go To Homepage",
      },
      loadingPage: {
        title: "Loading...",
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
      financeResults: {
        subTitle: "your steps and",
        title: "<span>Mission</span> results:",
        desc: "Mission results speak loud and clear—keep up the great work! And if you haven’t met your expectations just yet, don’t give up. You’re capable of extraordinary things—you’ve got this!",
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
  sk: {
    translation: {
      components: {
        navbar: {
          accountButton: {
            title: "Účet",
          },
          restartButton: {
            title: "Reštart",
          },
        },
        explainBtn: {
          text: "Pozrieť viac",
        },
        resetModal: {
          title:
            "Chystáte sa resetovať všetky hodnoty! Ste si istý, že to chcete urobiť?",
          desc: "Stlačením deštruktívneho tlačidla resetujete všetky svoje hodnoty. Rozpočet, cieľ, výdavky, výsledky a grafy budú mať hodnotu nula.",
          leftBtn: "Oneskoriť sebadeštrukciu",
          rightBtn: "Áno, všetko zničiť",
        },
        missingBudgetModal: {
          title:
            "Chcete míňať zo svojho rozpočtu bez toho, aby ste mali rozpočet?",
          desc: "Nebojte sa, kapitán, toto sa môže stať aj tým najlepším z nás. Zadajte súradnice svojho rozpočtu, aby ste mohli pokračovať v správe svojich financií.",
          leftBtn: "Rozumiem, koniec.",
          rightBtn: "Čo?! Povedz mi viac",
        },
      },
      hero: {
        title: "Zdravím, kapitán.",
        subTitle1: "Dnešná misia:",
        subTitle2: "Ušetriť Vaše peniaze.",
        desc: "Táto aplikácia je tu, aby vám pomohla zlepšiť vaše návyky v šetrení, zvýšiť vašu finančnú gramotnosť a poskytnúť vám dôležité každodenné informácie. Pripojte sa k nám na ceste, kde vaše financie posunieme na ďalšiu úroveň a ušetríme peniaze na medzihviezdnej úrovni!",
      },
      info: {
        title: "Hlavné súradnice",
        desc: "Dnes sme v dokonalnej pozícii a na správnej úrovni, aby sme začali úspešný plán šetrenia.",
      },
      saverSection: {
        title: "Nastavme ciele.",
        desc: "Na ľavej strane si zapíšte svoj rozpočet na obdobie šetrenia. Na pravej strane si zapíšte svoj finančný cieľ, ktorý chcete dosiahnuť do konca stanoveného termínu.",
        subDesc:
          "Tento krok je kľúčový pre dosiahnutie vášho cieľa a získanie silnej dávky motivácie.",
      },
      financeBars: {
        title: "Sem zadáte svoje výdavky a príjmy.",
        bars: {},
        caption: "To, čo sa rozhodnete zadať, závisí od vás.",
      },
      financeResults: {
        subTitle: "vaše kroky a",
        title: "<span>Výsledky</span> misie:",
        desc: "Výsledky misie hovoria jasne a nahlas – pokračujte v skvelej práci! A ak ste ešte nenaplnili svoje očakávania, nevzdávajte sa. Ste schopní dosiahnuť výnimočné veci – zvládnete to!",
      },
      explainSection: {
        subTitle: "Vysvetlenie",
        title: "Protokoly pre vašu medzihviezdnu cestu",
      },
      explainData: {
        1: {
          title: "Rozpočet a Cieľ",
          desc: "Sekcia, kde si môžete zaznamenať svoj rozpočet a cieľ na dosiahnutie finančných úspor.",
        },
        2: {
          title: "Pridať & Uložiť",
          desc: "Vaša cesta začína tu. Kategorizujete výdavky do rôznych skupín, čo vám poskytne jasný prehľad o tom, na čo míňate peniaze a koľko.",
        },
        3: {
          title: "Výsledky Misie",
          desc: "Výsledky vašich dosiahnutých cieľov sú zobrazené v tejto tabuľke, ktorá vám poskytuje podrobný prehľad o ceste, ktorou vaše výdavky smerujú.",
        },
        4: {
          title: "Grafy a percentá",
          desc: "Poskytujú matematický pohľad na to, ako dobre ste splnili svoje očakávania. Prvé percento ukazuje, koľko ste ušetrili, druhé percento zobrazuje náklady na nevyhnutné investície a tretie percento zdôrazňuje, koľko míňate na zábavu a iné aktivity.",
        },
      },
      infoPage: {
        hero: {
          title:
            "Inštrukcie na začatie <br/> vašej šetriacej dobrodružnej cesty",
          desc: "Zdravím, kapitán! Tu nájdete všetky inštrukcie a informácie, ktoré budete potrebovať na svojej ceste. Budem vám k službám po celú dobu vašej jazdy až do úplného konca vašich šetriacich dní.",
        },
        infoCarts: {
          coreCoordsInfo: {
            title: "Sekcia hlavné súradnice",
            desc: "Toto je váš motivačný a informačný hub, plný kľúčových informácií pre každé veľké dobrodružstvo. Okrem inšpirujúcich citátov tu nájdete aj praktický spôsob, ako sledovať čas a dátum, pretože každá kapitánova cesta sa riadi dokonalým načasovaním!",
          },
          budgetGoalInfo: {
            title: "Rozpočet A Cieľov",
            desc: "Toto je miesto, kde začína základ vášho šetriaceho dobrodružstva! V sekcii „Váš rozpočet“ nastavte sumu, ktorú plánujete dodržiavať počas zvoleného obdobia šetrenia. Toto je vaša finančná kľúčová informácia, ktorá formuje všetko ostatné na vašej ceste. Ďalej, v sekcii „Vaše ciele“, nastavte svoj cieľ šetrenia. Rozhodnite sa, koľko chcete ušetriť a na čo sa zameriavate.",
          },
          financeBarsInfo: {
            title: "Nastavenie Výdavkov",
            desc: "V tejto sekcii budete sledovať všetky svoje výdavky. Sledovač výdavkov je rozdelený do šiestich kategórií podľa priority a účelu, čo vám uľahčí zistiť, kam vaše peniaze idú. Jednoducho zadajte sumu, ktorú ste minuli, a stlačte tlačidlo '+' na jej pridanie do príslušnej kategórie. Urobili ste chybu? Žiadny problém! Stačí použiť tlačidlo '-' na odstránenie sumy a ľahko upravit vaše záznamy.",
          },
          expensesResultsInfo: {
            title: "Výsledky misie sú tu!",
            desc: "Na základe záznamov z predchádzajúcej sekcie teraz máte jasný prehľad o svojich výdavkoch. Uvidíte presne, kam vaše peniaze išli a koľko ste minuli v každej kategórii. Čokoľvek pridáte alebo odstránite v Nastavení výdavkov, sa okamžite aktualizuje v tejto tabuľke, čím sa zabezpečí, že vaše sledovanie rozpočtu bude plynulé a aktuálne!",
          },
        },
        expensesReviewsCart: {
          savedBar: {
            title: "Ušetrené",
            desc: "Pásik „Ušetrené“ vám ukáže, koľko peňazí ste ušetrili zo svojho pôvodného rozpočtu, a to ako v percentách, tak aj v číselnej hodnote.",
          },
          spentBar: {
            title: "Minuté",
            desc: "Pásik „Minulé“ zobrazuje celkovú sumu peňazí, ktorú ste minuli zo svojho rozpočtu, a to ako v percentách, tak aj v číselnej hodnote.",
          },
          funOtherBar: {
            title: "Zábava/Iné",
            desc: "Pásik „Zábava/Iné“ zobrazuje sumu peňazí, ktorú ste minuli konkrétne na zábavu a iné výdavky zo pásika „Minulé“. Táto hodnota je zobrazená ako číslo aj ako percento, ktoré odráža podiel tejto sumy na celkovej sume pásika „Minulé“.",
          },
        },
        resetButtonInfo: {
          title: "Tlačidlo sebadeštrukcie",
          desc: "Ak ste úspešne dokončili svoju misiu a začína nové obdobie šetrenia, môžete jednoducho vymazať všetky údaje kliknutím na toto tlačidlo. <span>UPOZORNENIE</span>, po potvrdení sebadeštrukcie už nebude možné obnoviť žiadne údaje.",
        },
      },
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
