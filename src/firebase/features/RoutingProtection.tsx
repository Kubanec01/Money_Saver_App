import { Navigate, Outlet } from "react-router";

import { useAuthContext } from "../../hooks/auth/authContext/authContext";

const RoutingProtection = () => {
  const { userLoggedIn } = useAuthContext();

  return userLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default RoutingProtection;
