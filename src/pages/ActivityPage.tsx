import {NavbarActivityPage} from "../components/activity/NavbarActivityPage";
import {SectionListCurrency} from "../components/activity/SectionListCurrency";
import {SectionWalletActivity} from "../components/activity/SectionWalletActivity";

const ActivityPage = () => {
  return (
    <div className="mx-auto pl-4 pr-4 pt-16 lg:pr-10 lg:pt-10 xl:max-w-7xl">
      <NavbarActivityPage />
      <main className="my-14">
        <SectionListCurrency />
        <SectionWalletActivity />
      </main>
    </div>
  );
};

export default ActivityPage;
