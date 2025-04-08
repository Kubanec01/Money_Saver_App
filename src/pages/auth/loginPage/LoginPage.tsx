import { Link, Navigate } from "react-router";
import img1 from "../../../assets/astronaut-img.png";
import style from "./loginPage.module.scss";
import { doSignInWithEmailAndPassword } from "../../../firebase/auth";
import { useAuthContext } from "../../../hooks/context/authContext";
import { useState } from "react";
import { FirebaseError } from "firebase/app";

// STYLES
const inputStyle =
  "w-full h-[60px] pl-2 bg-transparent rounded-[4px] border-[3px] border-[#6b6a6adc] focus:border-neonPurple focus:outline-none caret-[#6b6a6adc] text-xl text-[#c1bfbf]";

const LoginPage = () => {
  const { userLoggedIn } = useAuthContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    if (!email || !password) {
      setErrorMessage("Please enter your email and password.");
      return;
    }

    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithEmailAndPassword(email, password);
      } catch (error: unknown) {
        if (error instanceof FirebaseError)
          if (error.code === "auth/user-not-found") {
            setErrorMessage("No user found with this email");
          } else if (error.code === "auth/invalid-password") {
            setErrorMessage("Incorrect password.");
          } else {
            setErrorMessage("Wrong email or password.");
          }
      } finally {
        setIsSigningIn(false);
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
        <section className="flex flex-row justify-between items-center max-w-[1080px] w-[90%] -mt-30">
          {/* LEFT */}
          <div className="w-[50%] flex flex-col justify-center items-start">
            <img
              className={`${style.img} object-cover w-[80%] h-auto ml-16 -mt-[380px] opacity-90`}
              src={img1}
              alt="cosmonaut-img"
            />
            <h2 className="text-indigo-600 text-5xl font-bold -mt-[84px]">
              Money Saver
            </h2>
            <p className="text-whiteShadow500 text-2xl mt-2">
              Your money. Your mission. Let’s launch it into something greater.
            </p>
          </div>
          {/* RIGHT */}
          <div className="w-[50%] h-full flex justify-end items-center">
            {/* FORM BODY */}
            <div
              style={{
                boxShadow: " 0 0 20px 8px #4317b26a",
              }}
              className="border-[3px] border-neonPurple rounded-[14px] w-[440px] -mt-[100px] py-6"
            >
              <form
                onSubmit={onSubmit}
                action=""
                className="w-full h-full flex flex-col items-center"
              >
                {/* EMAIL AND PASSWORD */}
                <section className="w-[92%] flex flex-col items-center justify-start gap-3">
                  <input
                    type="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setErrorMessage("");
                    }}
                    placeholder="Email..."
                    className={inputStyle}
                  />
                  <input
                    type="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setErrorMessage("");
                    }}
                    placeholder="Password..."
                    className={inputStyle}
                  />
                  <p className="text-errorColor font-semibold">{errorMessage}</p>
                  <button
                    type="submit"
                    className="text-[#ffffffeb] w-full h-[56px] bg-[#4c3bc9] hover:bg-[#5747d2] rounded-[4px] text-2xl"
                  >
                    Log In
                  </button>

                  <button className="text-[#d1cdf5] text-lg hover:underline mt-1">
                    Forgot Password
                  </button>
                </section>
                <section className="w-[52%] flex flex-col items-center justify-end mt-7">
                  <Link
                    to="/register"
                    className="flex justify-center items-center text-[#ffffffeb] w-full h-[54px] bg-[#6bcd5ad9] hover:bg-[#7ccf6ed9] rounded-[4px] text-xl mt-3"
                  >
                    Create New Account
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
