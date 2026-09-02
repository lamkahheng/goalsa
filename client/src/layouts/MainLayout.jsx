import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

export const MainLayout = () => {
  return (
    <>
      <Outlet />
      <ToastContainer />
    </>
  );
};
