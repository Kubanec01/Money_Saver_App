import { Link } from "react-router";
import { inputStyles } from "../../../styles/inputStyles";
import { FormEvent, useState } from "react";
import { authStates } from "../../../firebase/features/authStates";
import { doPasswordChange } from "../../../firebase/auth";
import { auth } from "../../../firebase/firebaseConfig";
import { EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import image1 from "../../../assets/correct-mark-img.png";
import ShowAndHidePasswordIcon from "../../../firebase/features/ShowAndHidePasswordBtn";
import { passwordVisibility } from "../../../features/passwordVisibility";

const SetNewPassword = () => {
  // STATES
  const st = authStates();
  const [isCurrPasswordHidden, setIsCurrPasswordHidden] = useState(true);

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

  // STYLES
  const labelStyle = "lg:text-[23px] text-[14px] tracking-wider text-[white]";
  const showAndHideBtnStyle = "xl:top-0 top-[1px] md:right-5 right-3";

  return (
    <section className="w-full h-[100vh] flex justify-center items-center">
      <div className="md:shadow-customPurple lg:w-[500px] md:w-[400px] w-[280px] lg:border-[2px] md:border-[1px] md:border-neonPurple bg-[#131313a4] rounded-[14px] px-2 py-[50px]">
        <div className="w-full flex justify-center items-center">
          <h1
            className="lg:text-4xl text-2xl text-spaceBlue font-semibold relative
          after:absolute lg:after:w-[160%] after:w-[130%] after:h-[2px] after:bg-spaceBlue lg:after:-bottom-4 after:-bottom-2 after:left-[50%] after:-translate-x-[50%] 
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
                    className="object-cover aspect-square lg:w-[110px] w-[80px] opacity-95"
                    src={image1}
                    alt="correct-mark"
                  />
                  <h1 className="text-customWhite300 lg:text-3xl text-xl md:w-[80%] w-[90%] text-center font-semibold mt-2">
                    {st.successMessage}
                  </h1>
                </div>
              </>
            ) : (
              <div className="flex flex-col justify-center items-start gap-7 py-6">
                {/* CURRENT PASSWORD */}
                <div className="w-full">
                  <label htmlFor="current-password" className={labelStyle}>
                    Current Password
                  </label>
                  <span className="w-full relative">
                    <input
                      id="current-password"
                      placeholder="Enter your current password..."
                      onChange={(e) => st.setPassword(e.target.value)}
                      className={inputStyles.darkInputStyle}
                      type={passwordVisibility(isCurrPasswordHidden)}
                    />
                    <ShowAndHidePasswordIcon
                      isPasswordHidden={isCurrPasswordHidden}
                      onClick={() => setIsCurrPasswordHidden((e) => !e)}
                      class={showAndHideBtnStyle}
                    />
                  </span>
                </div>
                {/* NEW PASSWORD */}
                <div className="w-full">
                  <label htmlFor="new-password" className={labelStyle}>
                    New Password
                  </label>
                  <span className="w-full relative">
                    <input
                      id="new-password"
                      placeholder="Set new Password..."
                      onChange={(e) => st.setNewPassword(e.target.value)}
                      className={inputStyles.darkInputStyle}
                      type={passwordVisibility(st.isPasswordHidden)}
                    />
                    <ShowAndHidePasswordIcon
                      isPasswordHidden={st.isPasswordHidden}
                      onClick={() => st.setIsPasswordHidden((e) => !e)}
                      class={showAndHideBtnStyle}
                    />
                  </span>
                </div>
                {/* CONFIRM PASSWORD */}
                <div className="w-full">
                  <label htmlFor="confirm-password" className={labelStyle}>
                    Confirm Password
                  </label>
                  <input
                    id="confirm-password"
                    placeholder="Confirm your new password..."
                    onChange={(e) => st.setConfirmPassword(e.target.value)}
                    className={inputStyles.darkInputStyle}
                    type={passwordVisibility(st.isPasswordHidden)}
                  />
                </div>
              </div>
            )}
            {/* ERROR MESSAGE */}
            <section className="w-full md:mt-[10px]">
              <p className="text-errorColor md:text-2xl text-center">
                {st.errorMessage}
              </p>
            </section>
            {/* BUTTONS  */}
            {st.wasDataSent ? (
              <div className="w-full mt-6">
                <Link
                  to="/home"
                  className="text-[#ffffffeb] flex justify-center items-center md:w-full w-[90%] mx-auto lg:h-[56px] md:h-[46px] h-[40px] bg-purpleButton500 hover:bg-purpleButton300 rounded-[10px] lg:text-2xl md:text-xl text-lg"
                >
                  Go Back
                </Link>
              </div>
            ) : (
              <div className="w-full mx-auto md:mt-12 mt-8 flex md:justify-end justify-center items-center gap-3 ">
                <Link
                  className="lg:h-[46px] h-[36px] pt-1 lg:w-[120px] w-[100px] rounded-[5px] text-[white] bg-[#434343] hover:bg-[#545454] lg:text-[20px] font-light flex justify-center items-center text-center"
                  to="/home"
                >
                  Go Back
                </Link>
                {/* SEND BUTTON */}
                <button
                  type="submit"
                  className="lg:h-[46px] h-[36px] lg:py-[10px] py-[8px] lg:w-[120px] w-[100px] rounded-[5px] text-[white] bg-purpleButton500 hover:bg-purpleButton300 lg:text-[20px] font-light"
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
