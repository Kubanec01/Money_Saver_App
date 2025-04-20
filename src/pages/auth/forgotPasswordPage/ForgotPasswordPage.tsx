import LoginNavbar from "../../../components/navbars/LoginNavbar";
import ResetPasswordForm from "./components/resetPasswordForm/ResetPasswordForm";

const ForgotPasswordPage = () => {
  return (
    <main
      style={{
        backdropFilter: "blur(5px)",
      }}
      className="w-full h-[100vh] z-[900] bg-[#2d2d2d39]"
    >
      <LoginNavbar />
      <ResetPasswordForm />
    </main>
  );
};

export default ForgotPasswordPage;
