import {NavbarActivityPage} from "../components/activity/NavbarActivityPage";
import {SectionListCurrency} from "../components/activity/SectionListCurrency";
import {SectionWalletActivity} from "../components/activity/SectionWalletActivity";

const ActivityPage = () => {
  return (
    <div className="pl-6 pr-4 pt-10">
      <NavbarActivityPage />
      <main className="mt-14">
        <SectionListCurrency />
        <SectionWalletActivity />
      </main>
    </div>
  );
};

export default ActivityPage;
