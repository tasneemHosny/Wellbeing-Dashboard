import { Outlet } from "react-router-dom";
import SideBar from "./../SideBar/SideBar.jsx";

function Layout() {
  return (
    <div className="flex bg-[#B2CEF2]">
      <SideBar />
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
