import {SVGProps} from "react";

import {cn} from "../lib/utils";

export type IconCurrencyType = "ethereum" | "bitcoin" | "litecoin";

interface IIconCurrency extends SVGProps<SVGSVGElement> {
  iconName: IconCurrencyType;
}

export const IconCurrency = ({iconName, className, ...props}: IIconCurrency) => {
  const icon = {
    ethereum: (
      <svg
        {...props}
        className={cn(className)}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m12 1.75l-6.25 10.5L12 16l6.25-3.75zM5.75 13.5L12 22.25l6.25-8.75L12 17.25z"
          fill="currentColor"
        />
      </svg>
    ),
    bitcoin: (
      <svg
        {...props}
        className={cn(className)}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34M13 6a1 1 0 0 0-1 1h-1a1 1 0 0 0-2 0a1 1 0 1 0 0 2v6a1 1 0 0 0 0 2c0 1.333 2 1.333 2 0h1a1 1 0 0 0 2 0v-.15c1.167-.394 2-1.527 2-2.85l-.005-.175a3.06 3.06 0 0 0-.734-1.827c.46-.532.739-1.233.739-1.998c0-1.323-.833-2.456-2-2.85V7a1 1 0 0 0-1-1m.09 7c.492 0 .91.437.91 1s-.418 1-.91 1H11v-2zm0-4c.492 0 .91.437.91 1c0 .522-.36.937-.806.993L13.09 11H11V9z"
          fill="currentColor"
        />
      </svg>
    ),
    litecoin: (
      <svg
        {...props}
        className={cn(className)}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12m9.25-5.75a.75.75 0 0 1 .75.75v3.957l1.445-.642a.75.75 0 0 1 .61 1.37l-2.055.913v3.652h4.25a.75.75 0 0 1 0 1.5h-4.4a1.35 1.35 0 0 1-1.35-1.35v-3.135l-.945.42a.75.75 0 0 1-.61-1.37l1.555-.691V7a.75.75 0 0 1 .75-.75"
          fill="currentColor"
          fillRule="evenodd"
        />
      </svg>
    ),
  };

  return icon[iconName] || null;
};
