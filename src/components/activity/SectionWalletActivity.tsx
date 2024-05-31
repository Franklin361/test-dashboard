import {WalletActivityGraphic} from "./WalletActivityGraphic";
import {WalletActivityHistory} from "./WalletActivityHistory";

export const SectionWalletActivity = () => {
  return (
    <section className="mt-10 grid grid-cols-[1fr,auto] gap-5">
      <WalletActivityGraphic />

      <WalletActivityHistory />
    </section>
  );
};
