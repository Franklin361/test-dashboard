import {Outlet} from "react-router-dom";

import {SideBar} from "../components/SideBar";

const RootLayout = () => {
  return (
    <div className="grid min-h-dvh grid-cols-[auto,1fr] gap-10 p-2">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
