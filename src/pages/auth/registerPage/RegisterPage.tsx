import { Link, Navigate } from "react-router";
import { doCreateUserWithEmailAndPassword } from "../../../firebase/auth";
import { FirebaseError } from "firebase/app";
import { authStates } from "../../../firebase/features/authStates";
import ShowAndHidePasswordBtn from "../../../firebase/features/ShowAndHidePasswordBtn";
import { t } from "i18next";
import { plHol, errorMess } from "../../../utils/authLabels";

const RegisterPage = () => {
  const st = authStates();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    st.setErrorMessage("");

    if (!st.email || !st.password || !st.confirmPassword || !st.userName) {
      st.setErrorMessage(errorMess.fillAllInformation);
      return;
    }
    if (st.password !== st.confirmPassword) {
      st.setErrorMessage(errorMess.passwordsDoNotMatch);
      return;
    }

    try {
      await doCreateUserWithEmailAndPassword(
        st.email,
        st.password,
        st.userName
      );
      st.setIsRegistering(true);
    } catch (error) {
      if (error instanceof FirebaseError) {
        if (error.code === "auth/email-already-in-use") {
          st.setErrorMessage(errorMess.emailsIsInUse);
        } else if (error.code === "auth/weak-password") {
          st.setErrorMessage(errorMess.weakPassword);
        } else {
          st.setErrorMessage(errorMess.unknownError);
        }
      }
    }
  };

  // STYLES
  const inputStyles =
    "w-full xl:h-[60px] lg:h-[50px] h-[40px] pl-2 bg-transparent rounded-[6px] xl:border-[2px] border-[1px] border-[#6b6a6adc] focus:border-neonPurple focus:outline-none caret-[#6b6a6adc] xl:text-xl lg:text-lg md:text-base text-sm text-[#c1bfbf]";

  return (
    <>
      {st.isRegistering && <Navigate to="/home" replace={true} />}
      <div
        style={{
          backdropFilter: "blur(5px)",
        }}
        className="w-full h-[100vh] flex justify-center items-center"
      >
        <div className="lg:shadow-customPurple xl:border-[3px] lg:border-[2px] sm:border-[1px] lg:border-neonPurple border-[#ffffff66] rounded-[14px] xl:w-[430px] lg:w-[400px] w-[360px] p-5">
          <h1
            className="text-spaceWhite mx-auto text-center lg:text-3xl text-xl relative
        after:absolute after:lg:w-[80%] after:w-[90%] after:border-[1px] after:border-spaceBlue after:-bottom-3 after:left-[50%] after:translate-x-[-50%]  
        "
          >
            {t("registerPage.title")}
          </h1>
          <form className="w-full lg:mt-[64px] mt-[54px]" onSubmit={onSubmit}>
            <section className="lg:w-full w-[86%] mx-auto flex flex-col justify-center items-center gap-5">
              {/* USER NAME */}
              <input
                type="text"
                placeholder={plHol.name}
                className={`${inputStyles} mb-5`}
                onChange={(e) => st.setUserName(e.target.value)}
              />
              {/* EMAIL */}
              <input
                type="email"
                placeholder={plHol.enterEmail}
                className={inputStyles}
                onChange={(e) => st.setEmail(e.target.value)}
              />
              {/* PASSWORD */}
              <span className="w-full relative">
                <input
                  type={st.isPasswordHidden ? "password" : "text"}
                  placeholder={plHol.createPassword}
                  className={inputStyles}
                  onChange={(e) => st.setPassword(e.target.value)}
                />
                <ShowAndHidePasswordBtn
                  isPasswordHidden={st.isPasswordHidden}
                  onClick={() => st.setIsPasswordHidden((e) => !e)}
                  class="xl:top-[19px] lg:top-[20px] top-[12px] xl:right-5 lg:right-4 right-3"
                />
              </span>
              <span className="w-full relative">
                <input
                  type={st.isPasswordHidden ? "password" : "text"}
                  placeholder={plHol.confirmPassword}
                  className={inputStyles}
                  onChange={(e) => st.setConfirmPassword(e.target.value)}
                />
              </span>
              <p className="lg:text-xl md:text-base text-sm text-center text-errorColor">
                {st.errorMessage}
              </p>
            </section>
            <section className="flex flex-col justify-center items-center lg:mt-[44px] mt-[10px] gap-4">
              <button
                type="submit"
                className="text-[#ffffffeb] xl:w-full lg:w-[90%] w-[80%] xl:h-[52px] lg:h-[46px] h-[34px] bg-[#4c3bc9] hover:bg-[#5747d2] lg:rounded-[4px] rounded-[20px] lg:text-2xl text-lg"
              >
                {t("auth.buttons.signUp")}
              </button>
              <Link
                to="/"
                className="text-pastelViolet xl:text-xl lg:text-lg hover:underline"
              >
                {t("auth.buttons.haveAnAccount")}
              </Link>
            </section>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
