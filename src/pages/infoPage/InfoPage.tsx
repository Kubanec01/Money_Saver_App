import {
  InfoCard,
  InfoCardProps,
  InfoCardBaseType,
} from "../../components/infoCard/InfoCard";
import coreCoordsImg from "../../assets/api-info-img.png";
import budgetGoalImg from "../../assets/budget-goal-info-img.png";
import financeBarsImg from "../../assets/financeBars-info-img.png";
import resultsImg from "../../assets/results-info-img.png";
import resultsReviewsImg from "../../assets/results-reviews-info-img.png";
import resetBtnImg from "../../assets/reset-btn-info-img.png"

const data: InfoCardProps[] = [
  {
    id: "core-coords-info",
    title: "Core Coords Section",
    desc: "This is your go-to motivational and info hub, packed with key-details for every great adventure. Alongside inspiring quotes, you’ll also find a handy way to keep track of time and date because every captain’s journey runs on perfect timing!",
    image: coreCoordsImg,
    mainPlacement: "right",
  },
  {
    id: "budget-goal-info",
    title: "Budget And Goal",
    desc: "This is where the foundation of your savings journey begins! In the 'Your Budget' section, set the amount you plan to stick to for your chosen saving period. This is your financial anchor—the key detail that shapes everything else on your path. Next, in the 'Your Goal' section, set your savings target. Decide how much you want to save and what you're aiming for.",
    image: budgetGoalImg,
    mainPlacement: "left",
  },
  {
    id: "finance-bars-info",
    title: "Expenses Setter",
    desc: "In this section, you'll be tracking all your expenses. The expense tracker is divided into six categories based on priority and purpose, making it easy to see where your money is going. Simply enter the amount you've spent and hit the '+ button' to add it to the corresponding category. Made a mistake? No worries! Just use the '- button' to remove the amount and adjust your records effortlessly. ",
    image: financeBarsImg,
    mainPlacement: "right",
  },
  {
    id: "expenses-results-info",
    title: "Mission results are in!",
    desc: "Based on the records from the previous section, you now have a clear overview of your expenses. See exactly where your money went and how much you spent in each category. Anything you add or remove in the Expenses Setter will instantly update in this table, keeping your budget tracking seamless and up to date! ",
    image: resultsImg,
    mainPlacement: "left",
  },
];

const expensesReviewsData: InfoCardBaseType[] = [
  {
    id: "saved-bard",
    title: "Saved",
    desc: "The Saved bar shows you how much money you've saved from your original budget, both as a percentage and a numerical value.",
  },
  {
    id: "spent-bar",
    title: "Spent",
    desc: "The Spent bar displays the total amount of money you've spent from your budget, both as a percentage and a numerical value.",
  },
  {
    id: "fun/other-bar",
    title: "Fun/Other",
    desc: "The Fun/Other bar shows the amount of money you've spent specifically on entertainment and other expenses from the Spent bar. This value is displayed both as a number and as a percentage, reflecting its share of the total Spent bar amount.",
  },
];

const InfoPage = () => {
  return (
    <div className="mx-auto w-[90%] max-w-[1300px] mt-[340px]">
      <div className="w-full">
        <h1 className="text-7xl text-spaceNeonBlue font-extrabold uppercase text-center">
          Instructions for Starting <br />
          Your Saving Adventure
        </h1>
        <p
          className="text-2xl text-whiteShadow500 text-center w-[55%] mt-4 mx-auto relative
        after:absolute after:w-[94%] after:-bottom-8 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:bg-[#ffffff7e] after-rounded-[20px]"
        >
          Greetings, Captain! Here you’ll find all the instructions and
          information you’ll need on your journey. I’ll be at your service for
          the entire ride until the very end of your saving days. Yeehaw!
        </p>
      </div>
      <div>
        {/* BARS SECTIONS INFO */}
        {data.map((i) => {
          return (
            <InfoCard
              id={i.id}
              title={i.title}
              desc={i.desc}
              image={i.image}
              mainPlacement={i.mainPlacement}
            />
          );
        })}
      </div>
      <div>
        {/* PERCENTAGE RESULTS BAR */}
        <div className="my-[160px]">
          <div className="h-[340px] w-[900px] mx-auto rounded-[20px]">
            <img
              className="object-cover w-[90%] h-[80%] mx-auto"
              src={resultsReviewsImg}
              alt="expenses-results-reviews-img"
            />
          </div>
          <div className="mx-auto w-[92%] flex p-2 justify-between items-start">
            {expensesReviewsData.map((i) => {
              const widthClass =
                i.id === "fun/other-bar" ? "w-full" : "w-[84%]";

              return (
                <div key={i.id} className="w-[30%] overflow-hidden">
                  <h1 className="text-spaceNeonBlue text-3xl">{i.title}</h1>
                  <p className={`text-spaceWhite text-lg ${widthClass}`}>
                    {i.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        {/* RESET BUTTON INFO */}
        <div className="mb-[140px] p-2">
          <div className="w-[90%] mx-auto">
            <h1 className="text-warningOrange text-4xl text-center mx-auto">
              Self-Destruction Button
            </h1>
            <p className="text-lg text-whiteShadow500 text-center mx-auto w-[54%]">
              If you have successfully completed your mission and a new savings
              period begins, you can easily delete all data by clicking this
              button. <span className="text-white">WARNING</span>, once you
              confirm self-destruction, none of the data will be recoverable.
            </p>
          </div>
          <img
          className="rounded-[20px] object-cover mx-auto mt-[50px] w-[60%]"
          src={resetBtnImg} alt="reset-button-img" />
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
