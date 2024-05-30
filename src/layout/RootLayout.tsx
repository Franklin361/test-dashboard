import {Outlet} from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="">
      <span>Root</span>
      <Outlet />
    </div>
  );
};

export default RootLayout;
