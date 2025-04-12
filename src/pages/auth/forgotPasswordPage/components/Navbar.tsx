import { FirebaseError } from "firebase/app";
import { authStates } from "../../../../firebase/features/authStates";
import { doSignInWithEmailAndPassword } from "../../../../firebase/auth";

const Navbar = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    isSigningIn,
    setIsSigningIn,
    errorMessage,
    setErrorMessage,
  } = authStates();

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

  // STYLES
  const inputStyle =
    "bg-transparent border-[2px] border-[#ffffff76] focus:border-neonPurple focus:outline-none h-[60%] w-[240px] rounded-[6px] text-white pl-2";

  return (
    <div className="w-full fixed h-auto">
      {/* LOGIN FORM */}
      <section className="w-[40%] max-w-[1200px] mx-auto rounded-[14px] h-[74px] mt-4 px-3 bg-[#323131]">
        {/* LOGIN FORM */}
        <form
          className="w-full h-full flex justify-between items-center px-[70px]"
          action=""
        >
          <input
            className={inputStyle}
            placeholder="Email..."
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={inputStyle}
            placeholder="Password..."
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="w-[90px] h-[60%] rounded-[6px] text-[white] bg-loginButton hover:bg-loginButtonHover font-bold text-lg"
            type="submit"
          >
            Log In
          </button>
        </form>
      </section>
      {/* ERROR MESSAGE */}
      <section>
        {/* tu vyskoci vhyba v pripade, ze sa nieco pokazi. Bude to pravdepodobne cerveny text v sedom ramceku */}
      </section>
    </div>
  );
};

export default Navbar;
