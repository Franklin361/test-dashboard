import {Outlet} from "react-router-dom";
import {useMediaQuery} from "usehooks-ts";

import {SideBar} from "../components/SideBar";
import {SideBarMobile} from "../components/SideBarMobile";

const RootLayout = () => {
  const matches = useMediaQuery("(min-width: 1324px)");

  return (
    <div className="flex min-h-dvh grid-cols-[auto,1fr] justify-center gap-0 p-0 lg:grid lg:gap-10 lg:p-2">
      {matches ? <SideBar /> : <SideBarMobile />}
      <Outlet />
    </div>
  );
};

export default RootLayout;
