import {walletHistory} from "../../data";

import {WalletActivityGraphic} from "./WalletActivityGraphic";
import {WalletActivityHistoryItem} from "./WalletActivityHistoryItem";

export const SectionWalletActivity = () => {
  return (
    <section className="mt-10 grid grid-cols-[1fr,auto] gap-5">
      <WalletActivityGraphic />

      <aside className="w-fit rounded-3xl border-2 border-white/10 px-5 py-8">
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
    </section>
  );
};
