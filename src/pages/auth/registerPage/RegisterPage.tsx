import React, { useState } from "react";
import { Link, Navigate } from "react-router";
import { doCreateUserWithEmailAndPassword } from "../../../firebase/auth";
import { FirebaseError } from "firebase/app";
import ShowAndHidePasswordIcon from "../../../firebase/features/ShowAndHidePassword";
import { authStates } from "../../../firebase/features/authStates";

const RegisterPage = () => {
  const st = authStates();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    st.setErrorMessage("");

    if (!st.email || !st.password || !st.confirmPassword || !st.userName) {
      st.setErrorMessage("Please fill in all the required information.");
      return;
    }
    if (st.password !== st.confirmPassword) {
      st.setErrorMessage("Passwords do not match.");
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
          st.setErrorMessage("This email is already in use.");
        } else if (error.code === "auth/weak-password") {
          st.setErrorMessage("Password should be at least 6 characters.");
        } else {
          st.setErrorMessage("Something went wrong, please try again later.");
        }
      }
    }
  };

  // STYLES
  const inputStyles =
    "w-full h-[60px] pl-2 bg-transparent rounded-[6px] border-[3px] border-[#6b6a6adc] focus:border-neonPurple focus:outline-none caret-[#6b6a6adc] text-xl text-[#c1bfbf]";

  return (
    <>
      {st.isRegistering && <Navigate to="/home" replace={true} />}
      <div
        style={{
          backdropFilter: "blur(5px)",
        }}
        className="w-full h-[100vh] flex justify-center items-center relative"
      >
        <div
          style={{
            boxShadow: " 0 0 20px 10px #4317b26a",
          }}
          className="border-[3px] border-neonPurple rounded-[14px] w-[90%] max-w-[430px] p-5"
        >
          <h1
            className="text-spaceWhite mx-auto text-center text-3xl relative
        after:absolute after:w-[80%] after:border-[1px] after:border-spaceBlue after:-bottom-3 after:left-[50%] after:translate-x-[-50%]  
        "
          >
            Creating New Account
          </h1>
          <form className="w-full" onSubmit={onSubmit} action="">
            <section className="flex flex-col justify-center items-center mt-[64px] gap-5">
              {/* USER NAME */}
              <input
                type="text"
                placeholder="Name..."
                className={`${inputStyles} mb-5`}
                onChange={(e) => st.setUserName(e.target.value)}
              />
              {/* EMAIL */}
              <input
                type="email"
                placeholder="Enter your email..."
                className={inputStyles}
                onChange={(e) => st.setEmail(e.target.value)}
              />
              {/* PASSWORD */}
              <span className="w-full relative">
                <input
                  type={st.isPasswordHidden ? "password" : "text"}
                  placeholder="Create a password..."
                  className={inputStyles}
                  onChange={(e) => st.setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => st.setIsPasswordHidden((e) => !e)}
                >
                  <ShowAndHidePasswordIcon
                    isPasswordHidden={st.isPasswordHidden}
                  />
                </button>
              </span>
              <span className="w-full relative">
                <input
                  type={st.isPasswordHidden ? "password" : "text"}
                  placeholder="Confirm your password..."
                  className={inputStyles}
                  onChange={(e) => st.setConfirmPassword(e.target.value)}
                />
              </span>
              <p className="text-xl text-errorColor">{st.errorMessage}</p>
            </section>
            <section className="flex flex-col justify-center items-center mt-[44px] gap-4">
              <button
                type="submit"
                className="text-[#ffffffeb] w-full h-[52px] bg-[#4c3bc9] hover:bg-[#5747d2] rounded-[4px] text-2xl"
              >
                Sign Up
              </button>
              <Link
                to="/"
                className="text-pastelViolet text-xl hover:underline"
              >
                I have an account
              </Link>
            </section>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
