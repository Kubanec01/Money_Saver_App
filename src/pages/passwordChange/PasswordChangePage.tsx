import { Outlet } from "react-router";

const PasswordChangePage = () => {
  return (
    <div
      style={{
        backdropFilter: "blur(5px)",
      }}
      className="w-full h-[100vh]"
    >
      <Outlet />
    </div>
  );
};

export default PasswordChangePage;
