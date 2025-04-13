import { Link } from "react-router";
import { inputStyles } from "../../../../styles/inputStyles";
import { FormEvent } from "react";
import { authStates } from "../../../../firebase/features/authStates";
import { doPasswordReset } from "../../../../firebase/auth";
import { FirebaseError } from "firebase/app";

const ResetPasswordForm = () => {
  const st = authStates();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    st.setErrorMessage("");

    try {
      await doPasswordReset(st.email);
      st.setSuccessMessage("Password reset email send.");
    } catch (error) {
      if (error instanceof FirebaseError) {
        st.setIsInvalid(true);
        switch (error.code) {
          case "auth/invalid-email":
            st.setErrorMessage("Invalid email format");
            break;
          case "auth/user-not-found":
            st.setErrorMessage("No user found with this email.");
            break;
          default:
            st.setErrorMessage("Please enter a valid email.");
        }
      }
    }
  };

  const placeHolder = st.isInvalid ? st.errorMessage : "Email...";

  return (
    <section className="w-full h-full flex justify-center items-center">
      <div
        style={{
          boxShadow: " 0 0 20px 2px #4317b26a",
        }}
        className="w-[500px] h-[270px] rounded-[10px] p-5 border-[2px] bg-[#131313a4] border-neonPurple -mt-16"
      >
        <form onSubmit={onSubmit}>
          <div>
            <h1
              className="text-2xl text-pastelViolet relative
            after:absolute after:w-full after:h-[2px] after:bg-[#ffffff5a] after:-bottom-2 after:left-0 after:rounded-xl
            "
            >
              Forgot Your Password?
            </h1>
            <p className="text-[17px] text-spaceWhite mt-[26px]">
              Don't worry. Please enter your email and we will send you a
              message to reset your password.
            </p>
          </div>
          <input
            className={`
            ${inputStyles.darkInputStyle} 
            ${st.isInvalid && "placeholder:text-errorColor border-errorColor"}
            !h-[48px] !border-[2px] mt-2 !text-lg`}
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
              className="h-[39px] pt-1 w-[100px] rounded-[5px] text-[white] bg-[#434343] hover:bg-[#545454] text-[17px] font-light flex justify-center items-center text-center"
              to="/"
            >
              Go Back
            </Link>
            {/* SEND BUTTON */}
            <button
              type="submit"
              className="h-[39px] py-2 w-[100px] rounded-[5px] text-[white] bg-purpleButton500 hover:bg-purpleButton300 text-[17px] font-light"
            >
              Send It
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ResetPasswordForm;
