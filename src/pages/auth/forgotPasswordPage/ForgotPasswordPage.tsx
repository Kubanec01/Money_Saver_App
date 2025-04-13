import Navbar from "./components/Navbar";
import ResetPasswordForm from "./components/ResetPasswordForm";

const ForgotPasswordPage = () => {
  return (
    <main
      style={{
        backdropFilter: "blur(5px)",
      }}
      className="w-full h-[100vh] z-[900] bg-[#2d2d2d39]"
    >
      <Navbar />
      <ResetPasswordForm />
    </main>
  );
};

export default ForgotPasswordPage;
