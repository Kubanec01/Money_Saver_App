import { Link } from "react-router";
import { inputStyles } from "../../../../../styles/inputStyles";
import { FormEvent } from "react";
import { authStates } from "../../../../../firebase/features/authStates";
import { doPasswordReset } from "../../../../../firebase/auth";
import { FirebaseError } from "firebase/app";
import { t } from "i18next";
import { errorMess, plHol, successMess } from "../../../../../utils/authLabels";
errorMess;

const ResetPasswordForm = () => {
  const st = authStates();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    st.setErrorMessage("");

    try {
      await doPasswordReset(st.email);
      st.setWasDataSent(true);
      st.setSuccessMessage(successMess.passwordResetEmailSent);
    } catch (error) {
      if (error instanceof FirebaseError) {
        st.setIsInvalid(true);
        st.setWasDataSent(false);
        switch (error.code) {
          case "auth/user-not-found":
            st.setErrorMessage(errorMess.noUserFound);
            break;
          default:
            st.setErrorMessage(errorMess.enterEmail);
        }
      }
    }
  };

  const placeHolder = st.isInvalid ? st.errorMessage : `${plHol.email}`;

  return (
    <section className="w-full h-full flex justify-center items-center">
      <div className="lg:shadow-customPurple md:w-[500px] w-[280px] rounded-[10px] p-5 lg:border-[2px] border-[1px] bg-[#131313a4] lg:border-neonPurple border-[#ffffff6e] -mt-16">
        <form onSubmit={onSubmit}>
          <div>
            <h1
              className="md:text-2xl text-lg text-pastelViolet relative
            after:absolute after:w-full after:h-[2px] after:bg-[#ffffff5a] after:-bottom-2 after:left-0 after:rounded-xl
            "
            >
              {t("forgotPasswordPage.title")}
            </h1>
            {st.wasDataSent ? (
              <p className="md:text-lg text text-[#47db30] font-semibold lg:mt-[26px] mt-[16px] lg:mb-0 mb-6">
                {t("auth.messages.success.resetPasswordSent")}
              </p>
            ) : (
              <p className="md:text-[17px] text-sm text-spaceWhite lg:mt-[26px] mt-[16px] lg:mb-0 mb-6">
                {t("forgotPasswordPage.desc")}
              </p>
            )}
          </div>
          <input
            className={`
            ${inputStyles.darkInputStyle} 
            ${st.isInvalid && "placeholder:text-errorColor border-errorColor"}
            md:!h-[48px] !h-[40px] !border-[1px] mt-2 md:!text-lg !text-sm`}
            type="email"
            placeholder={placeHolder}
            onChange={(e) => {
              st.setEmail(e.target.value);
              st.setIsInvalid(false);
            }}
          />
          <div className="w-full flex justify-end items-center gap-2 mt-4">
            {/* BACK BUTTON */}
            <Link
              className="lg:h-[39px] h-[32px] lg:pt-1 lg:w-[100px] w-[80px] rounded-[5px] text-[white] bg-[#434343] hover:bg-[#545454] lg:text-[17px] text-[15px] font-light flex justify-center items-center text-center"
              to="/"
            >
              {t("auth.buttons.goBack")}
            </Link>
            {/* SEND BUTTON */}
            <button
              type="submit"
              className="lg:h-[39px] h-[32px] lg:py-2 py-1 lg:w-[100px] w-[80px] rounded-[5px] text-[white] bg-purpleButton500 hover:bg-purpleButton300 lg:text-[17px] text-[15px] font-light"
            >
              {t("auth.buttons.sendIt")}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ResetPasswordForm;
