import {typeCurrency} from "../../data";
import {IconCurrencyType} from "../IconCurrency";

import {CardCurrency} from "./CardCurrency";

export const SectionListCurrency = () => {
  return (
    <section className="mx-auto max-w-md md:max-w-2xl lg:max-w-4xl ">
      <p className="inline-block space-x-5 text-2xl font-bold lg:text-3xl">
        <span>Total balance </span>
        <span>$183.936</span>
      </p>

      <div className="grid w-full grid-cols-1 gap-0 overflow-x-auto lg:flex lg:gap-5">
        <div className="scroll mx-auto flex w-full snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth py-8 pl-1 pr-1">
          {Object.entries(typeCurrency).map(([key, value]) => (
            <CardCurrency key={key} {...value} type={key as IconCurrencyType} />
          ))}
        </div>
        <div className="px-2 py-8 lg:px-0">
          <button className="flex h-[100px] w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-dashed p-4 text-sm opacity-50 transition-opacity hover:opacity-80 active:opacity-100 lg:h-[113px] lg:w-[265px] lg:text-lg">
            + Add Currency
          </button>
        </div>
      </div>
    </section>
  );
};
