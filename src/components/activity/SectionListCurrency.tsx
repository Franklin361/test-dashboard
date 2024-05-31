import {typeCurrency} from "../../data";
import {IconCurrencyType} from "../IconCurrency";

import {CardCurrency} from "./CardCurrency";

export const SectionListCurrency = () => {
  return (
    <section className="mx-auto max-w-4xl">
      <p className="inline-block space-x-5 text-3xl font-bold">
        <span>Total balance </span>
        <span>$183.936</span>
      </p>

      <div className="flex w-full gap-5 overflow-x-auto">
        <div className="scroll mx-auto flex w-full snap-x snap-mandatory  gap-5 overflow-x-auto scroll-smooth py-8 pl-1 pr-1">
          {Object.entries(typeCurrency).map(([key, value]) => (
            <CardCurrency key={key} {...value} type={key as IconCurrencyType} />
          ))}
        </div>
        <div className="py-8">
          <button className="flex h-[113px] w-[265px] cursor-pointer items-center justify-center gap-2 rounded-lg border border-dashed p-4 text-lg opacity-50 transition-opacity hover:opacity-80 active:opacity-100">
            + Add Currency
          </button>
        </div>
      </div>
    </section>
  );
};
