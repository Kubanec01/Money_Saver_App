import { Navigate, Route, Routes } from "react-router";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("../pages/homePage/HomePage"));
const InfoPage = lazy(() => import("../pages/infoPage/InfoPage"))

export const MainRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="info" element={<InfoPage />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </Suspense>
  );
};
