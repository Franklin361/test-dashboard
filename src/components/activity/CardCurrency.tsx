import {IconCurrency, IconCurrencyType} from "../IconCurrency";

interface ICardCurrencyProps {
  type: IconCurrencyType;
  value: number;
  label: string;
  percentage: number;
  hasIncreased: boolean;
  isActive: boolean;
}

export const CardCurrency = (currency: ICardCurrencyProps) => {
  return (
    <div
      className={`flex flex-none snap-start items-center gap-2 rounded-lg border bg-gradient-to-br p-2 text-sm lg:p-4 lg:text-lg ${currency.isActive ? "border-transparent from-yellow-400 to-yellow-600 shadow-lg shadow-yellow-400/40" : "border-gray-600 from-gray-700 to-gray-900 "}`}
    >
      <IconCurrency
        className={`size-7 lg:size-[3.5rem] ${currency.isActive ? "text-white" : "text-gray-500"}`}
        iconName={currency.type}
      />
      <div className="grid grid-cols-[100px,auto] gap-x-4 gap-y-1">
        <span
          className={`text-end text-xl font-semibold ${currency.isActive ? "" : "text-gray-400"}`}
        >
          {currency.value}
        </span>
        <span className=" text-end font-semibold  opacity-50">{currency.label}</span>
        <div className="col-span-2 flex items-center gap-2 ">
          <div className="h-[50px] w-[100px] rounded bg-black/20" />
          <span
            className={`${currency.hasIncreased ? "text-green-400" : "text-red-500"} ${currency.isActive ? "text-white" : ""}`}
          >
            {currency.hasIncreased ? "+" : "-"} {currency.percentage} %
          </span>
        </div>
      </div>
    </div>
  );
};
