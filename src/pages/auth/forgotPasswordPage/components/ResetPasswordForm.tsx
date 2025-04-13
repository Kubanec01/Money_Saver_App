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
      if (error instanceof FirebaseError)
        switch (error.code) {
          case "auth/invalid-email":
            st.setErrorMessage("Invalid email format");
            break;
          case "auth/user-not-found":
            st.setErrorMessage("No user found with this email.");
            break;
          default:
            st.setErrorMessage("Something went wrong. Please try again.");
        }
    }
  };

  return (
    <section className="w-full h-full flex justify-center items-center">
      <div
        // style={{
        //   boxShadow: " 0 0 20px 8px #4317b26a",
        // }}
        className="w-[500px] h-[270px] rounded-[10px] p-5 border-[2px] bg-[#13131374] border-[#504f4f92]"
      >
        <form
        onSubmit={(e) => {
          e.preventDefault()
          console.log('form submit is submited submit brother')
        }}
        >
          <div>
            <h1
              className="text-2xl text-white relative
            after:absolute after:w-full after:h-[2px] after:bg-[#ffffff5a] after:-bottom-2 after:left-0 after:rounded-xl
            "
            >
              Forgot Your Password?
            </h1>
            <p className="text-[17px] text-white mt-[24px]">
              Don't worry. Please enter your email and we will send you a
              message to reset your password.
            </p>
          </div>
          <input
            className={`${inputStyles.darkInputStyle} !h-[48px] !border-[2px] mt-2 !text-lg`}
            type="email"
            placeholder="Email..."
          />
          <div className="w-full flex justify-end items-center gap-2 mt-4">
            {/* BACK BUTTON */}
            <Link
              className="border h-[39px] w-[100px] rounded-[6px] text-[white] text-[17px] font-light flex justify-center items-center text-center"
              to="//"
            >
              Go Back
            </Link>
            {/* SEND BUTTON */}
            <button
              type="submit"
              className="border h-[39px] w-[100px] rounded-[6px] text-[white] text-[17px] font-light flex justify-center items-center text-center"
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
