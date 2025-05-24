import { Link, Navigate } from "react-router";
import img1 from "../../../assets/astronaut-img.png";
import style from "./loginPage.module.scss";
import { doSignInWithEmailAndPassword } from "../../../firebase/auth";
import { useAuthContext } from "../../../hooks/auth/authContext/authContext";
import { FirebaseError } from "firebase/app";
import { authStates } from "../../../firebase/features/authStates";
import { inputStyles } from "../../../styles/inputStyles";
import { t } from "i18next";
import ShowAndHidePasswordBtn from "../../../firebase/features/ShowAndHidePasswordBtn";
import { errorMess, plHol } from "../../../utils/authLabels";


// STYLES

const LoginPage = () => {
  const { userLoggedIn } = useAuthContext();

  const st = authStates();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    st.setErrorMessage("");

    if (!st.email || !st.password) {
      st.setErrorMessage(errorMess.enterEmailAndPassword);
      return;
    }

    if (!st.isSigningIn) {
      st.setIsSigningIn(true);
      try {
        await doSignInWithEmailAndPassword(st.email, st.password);
      } catch (error) {
        if (error instanceof FirebaseError) {
          switch (error.code) {
            case "auth/user-not-found":
              st.setErrorMessage(errorMess.noUserFound);
              break;
            case "auth/invalid-password":
              st.setErrorMessage(errorMess.incorrectPassword);
              break;
            default:
              st.setErrorMessage(errorMess.wrongEmailOrPassword);
          }
        }
      } finally {
        st.setIsSigningIn(false);
      }
    }
  };

  return (
    <>
      {userLoggedIn && <Navigate to="/home" replace={true} />}
      <div
        style={{
          backdropFilter: "blur(5px)",
        }}
        className="w-full h-[100vh] z-[1000] flex justify-center items-center"
      >
        <section className="flex lg:flex-row flex-col justify-between items-center max-w-[1080px] w-[90%]">
          {/* LEFT */}
          <div className="lg:w-[50%] flex flex-col justify-center lg:items-start items-center xl:pl-0 lg:pl-4 pl-0">
            <img
              className={`${style.img} lg:block hidden object-cover w-[80%] h-auto ml-16 -mt-[380px] opacity-90`}
              src={img1}
              alt="cosmonaut-img"
            />
            <h1 className="text-indigo-600 xl:text-5xl md:text-4xl text-3xl font-bold xl:-mt-[84px] md:-mt-[74px]">
              {t("loginPage.title")}
            </h1>
            <p className="text-whiteShadow500 xl:text-2xl lg:text-xl md:text-lg text-sm lg:text-left text-center xl:w-full w-[74%] md:mt-2 mt-1">
              {t("loginPage.desc")}
            </p>
          </div>
          {/* RIGHT */}
          <div className="lg:w-[50%] w-full lg:mt-0 md:mt-[140px] mt-[120px] h-full flex lg:justify-end justify-center items-center">
            {/* FORM BODY */}
            <div className="lg:shadow-customPurple mx-auto xl:border-[3px] lg:border-[2px] sm:border-[1px] lg:border-neonPurple border-[#ffffff50] rounded-[14px] xl:w-[440px] lg:w-[350px] w-[280px] -mt-[100px] py-6">
              <form
                onSubmit={onSubmit}
                className="w-full h-full flex flex-col items-center"
              >
                {/* EMAIL AND PASSWORD */}
                <section className="w-[92%] flex flex-col items-center justify-start gap-3">
                  <input
                    type="email"
                    onChange={(e) => {
                      st.setEmail(e.target.value);
                      st.setErrorMessage("");
                    }}
                    placeholder={plHol.email}
                    className={`${inputStyles.darkInputStyle}`}
                  />
                  <span className="w-full relative">
                    <input
                      type={st.isPasswordHidden ? "password" : "text"}
                      onChange={(e) => {
                        st.setPassword(e.target.value);
                        st.setErrorMessage("");
                      }}
                      placeholder={plHol.password}
                      className={inputStyles.darkInputStyle}
                    />
                    <ShowAndHidePasswordBtn
                      onClick={() => st.setIsPasswordHidden((e) => !e)}
                      isPasswordHidden={st.isPasswordHidden}
                      class="xl:top-[19px] lg:top-[18px] top-[14px] xl:right-5 lg:right-4 right-3"
                    />
                  </span>
                  {/* ERROR MESSAGE */}
                  <p className="text-errorColor xl:text-base text-sm lg:mb-0 mb-1 lg:mt-0 -mt-1 font-semibold text-center">
                    {st.errorMessage}
                  </p>
                  <button
                    type="submit"
                    className="text-[#ffffffeb] w-full lg:mt-2 -mt-2 xl:h-[56px] lg:h-[46px] h-[36px] xl:text-2xl lg:text-xl text-lg bg-purpleButton500 hover:bg-purpleButton300 lg:rounded-[4px] rounded-[14px]"
                  >
                    {t("auth.buttons.logIn")}
                  </button>

                  <Link
                    to="/forgot-password"
                    className="text-[#d1cdf5] xl:text-lg hover:underline lg:mt-1 mt-7"
                  >
                    {t("auth.buttons.forgotPassword")}
                  </Link>
                </section>
                <section className="lg:w-[52%] w-[70%] flex flex-col items-center justify-end lg:mt-7">
                  <Link
                    to="/register"
                    className="flex justify-center items-center text-[#ffffffeb] w-full xl:h-[54px] lg:h-[44px] h-[36px] bg-[#6bcd5ad9] hover:bg-[#7ccf6ed9] lg:rounded-[4px] rounded-[14px] xl:text-xl lg:text-lg mt-3"
                  >
                    {t("auth.buttons.createNewAccount")}
                  </Link>
                </section>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LoginPage;
