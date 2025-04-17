import { Link } from "react-router";
import { inputStyles } from "../../../styles/inputStyles";
import { FormEvent } from "react";
import { authStates } from "../../../firebase/features/authStates";
import { doPasswordChange } from "../../../firebase/auth";
import { auth } from "../../../firebase/firebaseConfig";
import { EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import image1 from "../../../assets/correct-mark-img.png";

const SetNewPassword = () => {
  const st = authStates();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    st.setErrorMessage("");

    const user = auth.currentUser;

    if (!user || !user.email) {
      return;
    }

    if (!st.password || !st.newPassword || !st.confirmPassword) {
      st.setErrorMessage("Please fill in all the required information.");
      return;
    }

    if (st.newPassword !== st.confirmPassword) {
      st.setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      const credential = EmailAuthProvider.credential(user.email, st.password);
      await reauthenticateWithCredential(user, credential);

      await doPasswordChange(st.newPassword);
      st.setWasDataSent(true);
      st.setSuccessMessage("The password was successfully changed.");
      st.setErrorMessage("");
    } catch (error) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case "auth/weak-password":
            st.setErrorMessage("Password is too weak.");
            break;
          default:
            st.setErrorMessage(
              "Something went wrong. Is your current password correct?"
            );
        }
      }
    }
  };

  return (
    <section className="w-full h-[100vh] flex justify-center items-center">
      <div
        style={{
          boxShadow: " 0 0 20px 10px #4317b26a",
        }}
        className="w-[90%] max-w-[500px] border-[2px] border-neonPurple bg-[#131313a4] rounded-[14px] px-2 py-[50px]"
      >
        <div className="w-full flex justify-center items-center">
          <h1
            className="text-4xl text-spaceBlue font-semibold relative
          after:absolute after:w-[160%] after:h-[2px] after:bg-spaceBlue after:-bottom-4 after:left-[50%] after:-translate-x-[50%] 
          "
          >
            Change Password
          </h1>
        </div>
        <div className="mt-10 mx-auto w-[86%]">
          <form onSubmit={onSubmit}>
            {st.wasDataSent ? (
              <>
                <div className="h-[300px] flex flex-col justify-center items-center">
                  <img
                    className="object-cover aspect-square w-[110px] opacity-95"
                    src={image1}
                    alt="correct-mark"
                  />
                  <h1 className="text-customWhite300 text-3xl w-[80%] text-center font-semibold mt-2">
                    {st.successMessage}
                  </h1>
                </div>
              </>
            ) : (
              <div className="flex flex-col justify-center items-start gap-7 py-6">
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
              </div>
            )}
            <div className="w-full mt-[10px]">
              <p className="text-errorColor text-2xl text-center">
                {st.errorMessage}
              </p>
            </div>
            {st.wasDataSent ? (
              <div className="w-full mt-6">
                <Link
                  to="/home"
                  className="text-[#ffffffeb] flex justify-center items-center w-full h-[56px] bg-purpleButton500 hover:bg-purpleButton300 rounded-[10px] text-2xl"
                >
                  Go Back
                </Link>
              </div>
            ) : (
              <div className="w-full mx-auto mt-12 flex justify-end items-center gap-3 ">
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
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default SetNewPassword;

// ! nezabudni dorobit podciarknutie v title za pomoci after:
