import {IconCurrency, IconCurrencyType} from "../IconCurrency";

interface IWalletActivityHistoryItem {
  label: string;
  date: string;
  value: number;
  hasIncreased: boolean;
  typeCurrency: IconCurrencyType;
}

export const WalletActivityHistoryItem = (history: IWalletActivityHistoryItem) => {
  return (
    <li className="flex items-center justify-between gap-3 text-sm">
      <IconCurrency
        className="hidden size-6 rounded-full bg-white/90 text-black sm:block"
        iconName={history.typeCurrency}
      />
      <span className="block w-[90px] truncate opacity-70 lg:w-[120px]">{history.label}</span>
      <span className={`${history.hasIncreased ? "text-green-400" : "text-red-500"}`}>
        {history.hasIncreased ? "+" : "-"}${history.value}
      </span>
      <span className="opacity-70">{history.date}</span>
    </li>
  );
};
