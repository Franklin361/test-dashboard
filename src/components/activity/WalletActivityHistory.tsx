import {walletHistory} from "../../data";

import {WalletActivityHistoryItem} from "./WalletActivityHistoryItem";

export const WalletActivityHistory = () => {
  return (
    <aside className="w-fit rounded-3xl border-2 border-gray-600 bg-gradient-to-br from-gray-700 to-gray-900 px-5 py-8 ">
      <h6 className=" text-2xl font-semibold leading-tight">Wallet activity</h6>
      <header className="my-5 flex items-center justify-between gap-5 text-sm">
        <span>History</span>
        <button className="opacity-70 transition-opacity hover:underline hover:opacity-100">
          See all
        </button>
      </header>
      <ul className="space-y-5">
        {walletHistory.map(({id, ...history}) => (
          <WalletActivityHistoryItem {...history} key={id} />
        ))}
      </ul>
    </aside>
  );
};
