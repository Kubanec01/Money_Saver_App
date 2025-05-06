import { t } from "i18next";
import { OrbitProgress } from "react-loading-indicators";

const LoadingPage = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-[#0f041ff8]">
      <div className="flex justify-center items-center flex-col gap-6">
        <h1 className="text-[#7c46f1] text-4xl font-medium md:block hidden">
          {t("loadingPage.title")}
        </h1>
        <OrbitProgress color={"#7c46f1"} size="medium" text="" textColor="" />
      </div>
    </div>
  );
};

export default LoadingPage;
