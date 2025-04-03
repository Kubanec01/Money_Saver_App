import { Navigate, Route, Routes } from "react-router";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("../pages/homePage/HomePage"));
const InfoPage = lazy(() => import("../pages/infoPage/InfoPage"));
const LoginPage = lazy(() => import("../pages/auth/loginPage/LoginPage"));
const RegisterPage = lazy(
  () => import("../pages/auth/registerPage/RegisterPage")
);

export const MainRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/info" element={<InfoPage />} />
      </Routes>
    </Suspense>
  );
};

//! POZOR: kazdy uzivatel moze napisat do url home a prenese ho na home takze treba doplnit komponentu ktora tyomu zabrani
// ! Vsetky info ohladom toho a zmapovane docs su v dokumente na Routes Url v dev docs na wallpaper
