import { IconCurrencyType } from "../components/IconCurrency";

export const typeCurrency = {
  bitcoin: {
    value: 1.9678,
    label: "BTC",
    percentage: 12.5,
    hasIncreased: true,
    isActive: true,
  },
  ethereum: {
    value: 23.234,
    label: "ETH",
    percentage: 5.23,
    hasIncreased: false,
    isActive: false,
  },
  litecoin: {
    value: 380.234,
    label: "LTC",
    percentage: 39.69,
    hasIncreased: true,
    isActive: false,
  },
};

interface IWalletActivityHistoryItem {
  label: string;
  date: string;
  value: number;
  hasIncreased: boolean;
  typeCurrency: IconCurrencyType;
  id: string;
}

export const walletHistory: IWalletActivityHistoryItem[] = [
  {
    date: "08/05/2024",
    hasIncreased: true,
    label: "From BTC Wallet Binance",
    typeCurrency: "bitcoin",
    value: 50,
    id: crypto.randomUUID(),
  },
  {
    date: "08/05/2024",
    hasIncreased: false,
    label: "From LTC Wallet Binance",
    typeCurrency: "litecoin",
    value: 4.54,
    id: crypto.randomUUID(),
  },
  {
    date: "08/05/2024",
    hasIncreased: true,
    label: "From ETH Wallet Binance",
    typeCurrency: "ethereum",
    value: 8.81,
    id: crypto.randomUUID(),
  },
  {
    date: "08/05/2024",
    hasIncreased: true,
    label: "From BTC Wallet Binance",
    typeCurrency: "bitcoin",
    value: 50,
    id: crypto.randomUUID(),
  },
];
