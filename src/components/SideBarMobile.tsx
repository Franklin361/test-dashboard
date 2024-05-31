import {Menu} from "lucide-react";
import {useRef} from "react";

import {SideBar} from "./SideBar";

export const SideBarMobile = () => {
  const menuRef = useRef<HTMLInputElement>(null);

  const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const el = e.target as HTMLDivElement;

    if (el.classList.contains("active-link") || el.classList.contains("inactive-link"))
      menuRef.current?.click();
  };

  return (
    <div className="group/menu ">
      <div className="fixed left-0 top-0 z-10 flex w-full bg-[#181731] p-3">
        <label
          className=" flex  cursor-pointer  items-center justify-center gap-2 rounded-md text-sm transition-colors hover:bg-white/20"
          htmlFor="menu"
        >
          <Menu className="size-7" />
          Menu
        </label>
        <input ref={menuRef} className="hidden" id="menu" type="checkbox" />
      </div>

      <label
        className="fixed left-0 top-0 z-10 hidden h-[100dvh] w-[100dvw] bg-black/50 backdrop-blur-md group-has-[:checked]/menu:block"
        htmlFor="menu"
      />

      <div
        className="fixed left-2 top-2 z-20 -translate-x-[310px] transition-all duration-200 ease-in group-has-[:checked]/menu:translate-x-0 "
        onClick={onClick}
      >
        <SideBar />
      </div>
    </div>
  );
};
