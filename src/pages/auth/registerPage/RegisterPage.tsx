import React, { useState } from "react";
import { Link, Navigate } from "react-router";
import { doCreateUserWithEmailAndPassword } from "../../../firebase/auth";
import { FirebaseError } from "firebase/app";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    if (!email || !password || !confirmPassword || !userName) {
      setErrorMessage("Please fill in all the required information.");
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      await doCreateUserWithEmailAndPassword(email, password, userName);
      setIsRegistering(true);
    } catch (error) {
      if (error instanceof FirebaseError) {
        if (error.code === "auth/email-already-in-use") {
          setErrorMessage("This email is already in use.");
        } else if (error.code === "auth/weak-password") {
          setErrorMessage("Password should be at least 6 characters.");
        } else {
          setErrorMessage("Something went wrong, please try again later.");
        }
      }
    }
  };

  // STYLES
  const inputStyles =
    "w-full h-[60px] pl-2 bg-transparent rounded-[6px] border-[3px] border-[#6b6a6adc] focus:border-neonPurple focus:outline-none caret-[#6b6a6adc] text-xl text-[#c1bfbf]";

  return (
    <>
      {isRegistering && <Navigate to="/home" replace={true} />}
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
                onChange={(e) => setUserName(e.target.value)}
              />
              {/* EMAIL */}
              <input
                type="email"
                placeholder="Enter your email..."
                className={inputStyles}
                onChange={(e) => setEmail(e.target.value)}
              />
              {/* PASSWORD */}
              <input
                type="password"
                placeholder="Create a password..."
                className={inputStyles}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm your password..."
                className={inputStyles}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <p className="text-lg text-errorColor">{errorMessage}</p>
            </section>
            <section className="flex flex-col justify-center items-center mt-[34px] gap-4">
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
