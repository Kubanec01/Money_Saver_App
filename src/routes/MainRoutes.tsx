import { Route, Routes } from "react-router";
import { lazy, Suspense } from "react";
import RoutingProtection from "../firebase/features/RoutingProtection";
import LoadingPage from "../pages/loadingPage/LoadingPage";
import VerifyPassword from "../pages/passwordChange/components/SetNewPassword";

// LAZY PAGES
const HomePage = lazy(() => import("../pages/homePage/HomePage"));
const InfoPage = lazy(() => import("../pages/infoPage/InfoPage"));
const LoginPage = lazy(() => import("../pages/auth/loginPage/LoginPage"));
const RegisterPage = lazy(
  () => import("../pages/auth/registerPage/RegisterPage")
);
const ForgotPasswordPage = lazy(
  () => import("../pages/auth/forgotPasswordPage/ForgotPasswordPage")
);
const Error404Page = lazy(() => import("../pages/404/404Error/NotFoundPage"));
const PasswordChangePage = lazy(
  () => import("../pages/passwordChange/PasswordChangePage")
);
const VerifyPasswordPage = lazy(() => import('../pages/passwordChange/components/SetNewPassword'))

export const MainRoutes = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes>
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<Error404Page />} />
        <Route element={<RoutingProtection />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route
            path="/change-password"
            element={<PasswordChangePage />}
          >
            <Route path="verify" element={<VerifyPasswordPage/>} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};
