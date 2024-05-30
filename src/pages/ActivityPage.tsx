import {Search, Grip, Bell, ChevronDown} from "lucide-react";

export const CardCurrency = () => {
  return (
    <div className="flex flex-none items-center gap-2 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-600 p-4 text-lg shadow-lg shadow-yellow-400/40">
      <div className="size-[3.5rem] rounded-full bg-black/20" />
      <div className="grid grid-cols-[100px,auto] gap-x-4 gap-y-1">
        <span className=" text-end text-xl font-semibold">1.9678</span>
        <span className=" text-end font-semibold  opacity-50">BTC</span>
        <div className="col-span-2 flex items-center gap-2 ">
          <div className="h-[50px] w-[100px] rounded bg-black/20" />
          <span>+12,5%</span>
        </div>
      </div>
    </div>
  );
};

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

      <main className="mx-auto mt-14 max-w-4xl ">
        <p className="inline-block space-x-5 text-4xl font-bold">
          <span>Total balance </span>
          <span>$183.936</span>
        </p>

        <div className="flex w-full gap-5 overflow-x-auto ">
          <div className="mx-auto flex w-full gap-5 overflow-x-auto  py-8 pl-1 pr-1">
            <CardCurrency />
            <CardCurrency />
            <CardCurrency />
          </div>
          <div className="py-8">
            <div className="flex h-[113px] w-[265px] cursor-pointer items-center justify-center gap-2 rounded-lg border border-dashed p-4 text-lg opacity-50 transition-opacity hover:opacity-80">
              + Add Currency
            </div>
          </div>
        </div>

        <div>
          <div>{/* graphic */}</div>
          <div>{/* wallet activity */}</div>
        </div>
      </main>
    </div>
  );
};

export default ActivityPage;
