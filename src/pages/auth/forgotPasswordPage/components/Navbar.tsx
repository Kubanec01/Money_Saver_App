import { authStates } from "../../../../firebase/features/authStates";
import { doSignInWithEmailAndPassword } from "../../../../firebase/auth";
import { Link } from "react-router";
import { inputStyles } from "../../../../styles/inputStyles";

const Navbar = () => {
  // STATES
  const st = authStates();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    st.setErrorMessage("");

    if (!st.email || !st.password) {
      st.setErrorMessage("Please enter your email and password.");
      st.setIsInvalid(true);
      return;
    }

    if (!st.isSigningIn) {
      st.setIsSigningIn(true);
      try {
        await doSignInWithEmailAndPassword(st.email, st.password);
      } catch (error: unknown) {
        st.setErrorMessage("Wrong email or password.");
        st.setIsInvalid(true);
      } finally {
        st.setIsSigningIn(false);
      }
    }
  };

  // STYLES

  return (
    <div className="w-full fixed h-auto">
      {/* LOGIN FORM */}
      <section className="w-[40%] z-[1000] max-w-[800px] mx-auto rounded-[14px] h-[70px] mt-4 px-3 bg-[#2f2e2e]">
        {/* LOGIN FORM */}
        <form
          className="w-[80%] mx-auto h-full flex justify-between items-center gap-2"
          onSubmit={onSubmit}
        >
          <input
            className={inputStyles.lightInputStyle}
            placeholder="Email..."
            type="email"
            onChange={(e) => st.setEmail(e.target.value)}
          />
          <input
            className={inputStyles.lightInputStyle}
            placeholder="Password..."
            type="password"
            onChange={(e) => st.setPassword(e.target.value)}
          />
          <button
            className="w-[90px] h-[60%] rounded-[6px] text-[white] bg-purpleButton500 hover:bg-purpleButton300 font-bold text-lg"
            type="submit"
          >
            Log In
          </button>
        </form>
      </section>
      {/* ERROR MESSAGE */}
      <section className="mx-auto mt-2">
        <div
          className={`
          ${st.isInvalid ? "block" : "hidden"}
          w-[90%] max-w-[700px] mx-auto h-[34px] rounded-[14px] bg-[#282828] flex justify-center items-center`}
        >
          <p className="overflow-hidden mx-auto text-lg text-errorColor text-center">
            {st.errorMessage}{" "}
            <Link className="underline" to="//">
              Return to the Login page?
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
