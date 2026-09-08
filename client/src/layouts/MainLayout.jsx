import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import { Sidebar } from "../components/Sidebar";

export const MainLayout = () => {
  return (
    <>
      <Sidebar>
        <Outlet />
      </Sidebar>
      <ToastContainer />
    </>
  );
};
