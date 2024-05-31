import {
  Star,
  CirclePlus,
  LineChart,
  CircleHelp,
  MessagesSquare,
  Settings,
  Flag,
  LogOut,
  Wallet,
  Newspaper,
  Mail,
  CircleX,
} from "lucide-react";
import {NavLink} from "react-router-dom";

export const SideBar = () => {
  return (
    <aside className="scroll sticky top-2 h-[97dvh] w-[300px] overflow-y-auto rounded-2xl border border-white/20 bg-[#23253A]">
      <div className="flex items-start justify-between p-4 pt-6">
        <img alt="" className="h-[60px]" src="/image.png" />
        <label
          className=" block cursor-pointer opacity-80  transition-opacity hover:opacity-100 active:opacity-100 md:hidden "
          htmlFor="menu"
        >
          <CircleX className="size-7" />
        </label>
      </div>

      <div className="p-4">
        <span className="mb-3 inline-block text-[#676876]">Dashboard Overview</span>
        <ul className="flex flex-col gap-3  text-[#81828E]">
          <li className="">
            <NavLink
              className={({isActive}) => (isActive ? "active-link" : "inactive-link")}
              to="/"
            >
              <div className="flex items-center gap-4">
                <Star className="size-6" /> Activity
              </div>
              <CirclePlus className="size-6" />
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({isActive}) => (isActive ? "active-link" : "inactive-link")}
              to="/deposit"
            >
              <div className="flex items-center gap-4">
                <Wallet className="size-6" />
                Deposit
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({isActive}) => (isActive ? "active-link group" : "inactive-link")}
              to="/news"
            >
              <div className="flex items-center gap-4 ">
                <Newspaper className="size-6" /> News
              </div>
              <div className="grid size-6 place-items-center rounded-full bg-emerald-600 text-sm text-white group-first:bg-black/50 group-first:font-bold ">
                1
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({isActive}) => (isActive ? "active-link group" : "inactive-link")}
              to="/messages"
            >
              <div className="flex items-center gap-4">
                <Mail className="size-6" /> Messages
              </div>
              <div className="grid size-6 place-items-center rounded-full bg-blue-600 text-sm text-white  group-first:bg-black/50 group-first:font-bold ">
                2
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({isActive}) => (isActive ? "active-link" : "inactive-link")}
              to="/analytics"
            >
              <div className="flex items-center gap-4">
                <LineChart className="size-6" /> Analytics
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({isActive}) => (isActive ? "active-link" : "inactive-link")}
              to="/announcements"
            >
              <div className="flex items-center gap-4">
                <Flag className="size-6" /> Announcements
              </div>
            </NavLink>
          </li>
        </ul>
      </div>

      <hr className="mt-5 block border-white/20" />

      <div className="p-4">
        <span className="mb-3 inline-block text-[#676876]">Support</span>
        <ul className="flex flex-col gap-3 text-[#81828E]">
          <li>
            <NavLink
              className={({isActive}) => (isActive ? "active-link" : "inactive-link")}
              to="/settings"
            >
              <div className="flex items-center gap-4">
                <Settings className="size-6" /> Settings
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({isActive}) => (isActive ? "active-link" : "inactive-link")}
              to="/help"
            >
              <div className="flex items-center gap-4">
                <CircleHelp className="size-6" /> Help
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({isActive}) => (isActive ? "active-link" : "inactive-link")}
              to="/chat"
            >
              <div className="flex items-center gap-4">
                <MessagesSquare className="size-6" /> Chat
              </div>
            </NavLink>
          </li>
        </ul>
      </div>

      <hr className="mb-3 border-white/20" />

      <div className="flex items-center justify-between p-2 px-4 pb-4">
        <span className="text-sm">Meeteam 2024®️</span>
        <button className="rounded-md p-3 hover:bg-white/20 active:bg-white/10">
          <LogOut />
        </button>
      </div>
    </aside>
  );
};
