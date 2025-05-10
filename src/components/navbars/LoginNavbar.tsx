import { authStates } from "../../firebase/features/authStates";
import { doSignInWithEmailAndPassword } from "../../firebase/auth";
import { Link, useNavigate } from "react-router";
import { inputStyles } from "../../styles/inputStyles";
import { errorMess, plHol } from "../../utils/authLabels";
import { t } from "i18next";

const LoginNavbar = () => {
  // STATES
  const st = authStates();

  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    st.setErrorMessage("");

    if (!st.email || !st.password) {
      st.setErrorMessage(errorMess.enterEmailAndPassword);
      st.setIsInvalid(true);
      return;
    }

    if (!st.isSigningIn) {
      st.setIsSigningIn(true);
      try {
        await doSignInWithEmailAndPassword(st.email, st.password);
        navigate("/");
      } catch (error: unknown) {
        st.setErrorMessage(errorMess.wrongEmailOrPassword);
        st.setIsInvalid(true);
      } finally {
        st.setIsSigningIn(false);
      }
    }
  };

  return (
    <>
      {/* LOGIN FORM */}
      <div className="z-[1000] lg:w-[700px] w-[600px] rounded-[14px] lg:h-[60px] h-[50px] lg:px-3 bg-[#2f2e2e] top-4 left-[50%] -translate-x-[50%] fixed md:block hidden">
        {/* LOGIN FORM */}
        <form
          className="w-[80%] mx-auto h-full flex justify-between items-center gap-2"
          onSubmit={onSubmit}
        >
          <input
            className={`${inputStyles.lightInputStyle} lg:text-base text-sm`}
            placeholder={plHol.email}
            type="email"
            onChange={(e) => st.setEmail(e.target.value)}
          />
          <input
            className={`${inputStyles.lightInputStyle} lg:text-base text-sm`}
            placeholder={plHol.password}
            type="password"
            onChange={(e) => st.setPassword(e.target.value)}
          />
          <button
            className="w-[90px] h-[60%] rounded-[6px] text-[white] bg-purpleButton500 hover:bg-purpleButton300 font-bold lg:text-lg text-sm"
            type="submit"
          >
            {t("auth.buttons.logIn")}
          </button>
        </form>
      </div>
      {/* ERROR MESSAGE */}
      <section className="mx-auto fixed lg:top-[90px] top-[74px] left-[50%] -translate-x-[50%] md:block hidden">
        <div
          className={`
            ${st.isInvalid ? "block" : "hidden"}
            lg:w-[600px] w-[500px] mx-auto lg:h-[34px] h-[28px] rounded-[14px] bg-[#282828] flex justify-center items-center`}
        >
          <p className="overflow-hidden mx-auto text-errorColor text-center lg:text-base text-sm">
            {st.errorMessage}{" "}
            <Link className="underline" to="//">
              {t("auth.messages.errors.returnToLoginPage")}
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default LoginNavbar;
