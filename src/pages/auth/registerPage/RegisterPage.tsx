import { Link } from "react-router";

const RegisterPage = () => {
  // STYLES
  const inputStyles =
    "w-full h-[60px] pl-2 bg-transparent rounded-[6px] border-[3px] border-[#6b6a6adc] focus:border-neonPurple focus:outline-none caret-[#6b6a6adc] text-xl text-[#c1bfbf]";

  return (
    <section
      style={{
        backdropFilter: "blur(5px)",
      }}
      className="w-full h-[100vh] flex justify-center items-center"
    >
      <div className="border-[3px] border-neonPurple rounded-[14px] w-[90%] max-w-[430px] p-5">
        <h1
          className="text-spaceWhite mx-auto text-center text-3xl relative
        after:absolute after:w-[80%] after:border-[2px] after:border-spaceBlue after:-bottom-3 after:left-[50%] after:translate-x-[-50%]  
        "
        >
          Creating New Account
        </h1>
        <form className="w-full" onSubmit={(e) => e.preventDefault()} action="">
          <section className="flex flex-col justify-center items-center mt-[54px] gap-5">
            {/* EMAIL */}
            <input
              id="email"
              type="email"
              placeholder="Enter your email..."
              className={inputStyles}
            />
            {/* PASSWORD */}
            <input
              type="text"
              placeholder="Create a password..."
              className={inputStyles}
            />
            <input
              type="text"
              placeholder="Confirm your password..."
              className={inputStyles}
            />
          </section>
          <section className="flex flex-col justify-center items-center mt-[54px] gap-4">
            <button
              type="submit"
              className="text-[#ffffffeb] w-full h-[52px] bg-[#4c3bc9] hover:bg-[#5747d2] rounded-[4px] text-2xl"
            >
              Sign Up
            </button>
            <Link
              to="/"
              className="text-[#d1cdf5] text-xl hover:underline"
            >
              I have an account
            </Link>
          </section>
        </form>
      </div>
    </section>
  );
};

export default RegisterPage;
