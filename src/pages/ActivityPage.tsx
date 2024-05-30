import {Search, Grip, Bell, ChevronDown} from "lucide-react";

const ActivityPage = () => {
  return (
    <div className="p-8 pt-10">
      <nav className="grid grid-cols-2 gap-10">
        <div className="flex items-center justify-end gap-7 ">
          <button className="w-24 rounded-2xl bg-gradient-to-tl from-blue-800 to-blue-500 p-0 px-3 py-1 ">
            Monthly
          </button>
          <button className="w-24 rounded-2xl bg-white/20 p-0 px-3 py-1 transition-colors  hover:bg-white/30">
            Weekly
          </button>
          <button className="w-24 rounded-2xl bg-white/20 p-0 px-3 py-1 transition-colors hover:bg-white/30">
            Daily
          </button>
        </div>

        <div className="flex items-center justify-end gap-7 ">
          <button className="text-[#676876] transition-colors hover:text-[#a3a3ac] active:text-[#676876]">
            <Search className="size-7" />
          </button>

          <button className="text-[#676876] transition-colors hover:text-[#a3a3ac] active:text-[#676876]">
            <Grip className="size-7" />
          </button>

          <button className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-tl from-blue-700 to-blue-400 px-3 py-1 text-sm font-bold transition-all hover:from-blue-800 hover:to-blue-500">
            <Bell className="size-4" />8
          </button>

          <button className="flex items-center gap-2">
            <img alt="profile" className="size-6 rounded-full" src="https://placehold.co/400x400" />
            <span className="line-clamp-2 text-wrap text-start text-sm font-bold">Carlos M.</span>
            <ChevronDown className="size-5 flex-none" />
          </button>
        </div>
      </nav>

      <main>
        <span>Total balance: $183.936</span>

        <div>{/* currency cards */}</div>

        <div>
          <div>{/* graphic */}</div>
          <div>{/* wallet activity */}</div>
        </div>
      </main>
    </div>
  );
};

export default ActivityPage;
