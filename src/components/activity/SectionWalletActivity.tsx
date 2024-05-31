import {WalletActivityGraphic} from "./WalletActivityGraphic";
import {WalletActivityHistory} from "./WalletActivityHistory";

export const SectionWalletActivity = () => {
  return (
    <section className="mt-10 flex grid-cols-[1fr,auto] flex-col gap-10 lg:mt-20 lg:grid lg:gap-5">
      <WalletActivityGraphic />

      <WalletActivityHistory />
    </section>
  );
};
