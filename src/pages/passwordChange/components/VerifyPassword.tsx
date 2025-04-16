import { Link } from "react-router";
import { inputStyles } from "../../../styles/inputStyles";
import { FormEvent } from "react";
import { authStates } from "../../../firebase/features/authStates";
import { doPasswordChange } from "../../../firebase/auth";
import { auth } from "../../../firebase/firebaseConfig";
import { EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth";
import { FirebaseError } from "firebase/app";

const VerifyPassword = () => {
  const st = authStates();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    st.setErrorMessage("");

    const user = auth.currentUser;

    if (!user || !user.email) {
      return;
    }

    if (st.newPassword !== st.confirmPassword) {
      st.setErrorMessage("Password do not match.");
      return;
    }

    try {
      const credential = EmailAuthProvider.credential(user.email, st.password);
      await reauthenticateWithCredential(user, credential);

      await doPasswordChange(st.newPassword);
      st.setSuccessMessage("Password has been updated.");
    } catch (error) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case "auth/wrong-password":
            st.setErrorMessage("Current password is incorrect.");
            break;
          case "auth/weak-password":
            st.setErrorMessage("PAssword is too weak.");
            break;
          default:
            st.setErrorMessage("Something went wrong. Please try again later.");
        }
      }
    }
  };

  console.log(st.errorMessage);

  return (
    <section className="w-full h-[100vh] flex justify-center items-center">
      <div className="w-[90%] max-w-[500px] border rounded-[14px] px-2 py-[50px]">
        <div className="w-full flex justify-center items-center">
          <h1 className="text-4xl text-[white] font-semibold">
            Change Password
          </h1>
        </div>
        {/* v tomto dive bude podmienka */}
        {/* tu nezabudni pridat after a before */}
        <div className="mt-10 mx-auto w-[86%] relative">
          <form
            onSubmit={onSubmit}
            className="flex flex-col justify-center items-start gap-7"
          >
            {/* CONFIRM PASSWORD */}
            <div className="w-full">
              <label
                htmlFor="current-password"
                className="text-[23px] tracking-wider text-[white] mb-10"
              >
                Current Password
              </label>
              <input
                id="current-password"
                onChange={(e) => st.setPassword(e.target.value)}
                className={inputStyles.darkInputStyle}
                type="text"
              />
            </div>
            {/* NEW PASSWORD */}
            <div className="w-full">
              <label
                htmlFor="new-password"
                className="text-[23px] tracking-wider text-[white]"
              >
                New Password
              </label>
              <input
                id="new-password"
                onChange={(e) => st.setNewPassword(e.target.value)}
                className={inputStyles.darkInputStyle}
                type="text"
              />
            </div>
            {/* CONFIRM PASSWORD */}
            <div className="w-full">
              <label
                htmlFor="confirm-password"
                className="text-[23px] tracking-wider text-[white]"
              >
                Confirm Password
              </label>
              <input
                id="confirm-password"
                onChange={(e) => st.setConfirmPassword(e.target.value)}
                className={inputStyles.darkInputStyle}
                type="text"
              />
            </div>
            <div className="w-[86%] mx-auto mt-10 flex justify-end items-center gap-3">
              <Link
                className="h-[46px] pt-1 w-[120px] rounded-[5px] text-[white] bg-[#434343] hover:bg-[#545454] text-[20px] font-light flex justify-center items-center text-center"
                to="/home"
              >
                Go Back
              </Link>
              {/* SEND BUTTON */}
              <button
                type="submit"
                className="h-[46px] py-[10px] w-[120px] rounded-[5px] text-[white] bg-purpleButton500 hover:bg-purpleButton300 text-[20px] font-light"
              >
                Send It
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default VerifyPassword;
