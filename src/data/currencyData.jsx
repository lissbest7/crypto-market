// customerData.js
import UpIcon from "../assets/svg/UpIcon.svg";
import DownIcon from "../assets/svg/DownIcon.svg";
import IconWalet from "../assets/images/IconWallet.png";
import BTC from "../assets/images/IconBTC.png";
import SOL from "../assets/images/IconSOL.png";
import ETH from "../assets/images/IconETH.png";
import VectorIcon from "../assets/images/Vector.png";
import VectorIcon2 from "../assets/images/Vector2.png";
import VectorIcon3 from "../assets/images/Vector3.png";

export const currentRateDate = [
  {
    currency: "BTCUSDT",
    digital_currency: "Bitcoin ",
    amount: "$23,495",
    commission: "+23.4%",
  },
  {
    currency: "AXSUSDT",
    digital_currency: "Axie Infinity",
    amount: "$15.9",
    commission: "-7.8%",
  },
  {
    currency: "ETHUSDT",
    digital_currency: "Ethereum",
    amount: "$15,978",
    commission: "-0.3%",
  },
  {
    currency: "SOLUSDT",
    digital_currency: "Solana",
    amount: "$495",
    commission: "+11.1%",
  },
  {
    currency: "BNBUSDT",
    digital_currency: "Binance",
    amount: "$267",
    commission: "+6.7%",
  },
  {
    currency: "ADAUSDT",
    digital_currency: "Cardano",
    amount: "$0.49",
    commission: "-1.4%",
  },
  {
    currency: "SOLUSDT",
    digital_currency: "Solana",
    amount: "$495",
    commission: "+11.1%",
  },
];

export const rateHistoryData = [
  {
    img: DownIcon,
    to_currency: "Deposit ",
    to_amount: "+$23,738",
    time: "11:34 PM",
    badge: "Pending",
  },
  {
    img: UpIcon,
    to_currency: "SANDUSDT",
    to_amount: "-$576",
    time: "06:01 AM",
    badge: "Done",
  },
  {
    img: DownIcon,
    to_currency: "DOGEUSDT",
    to_amount: "+$3500",
    time: "02:10 AM",
    badge: "Rejected",
  },
  {
    img: UpIcon,
    to_currency: "FTMUSDT",
    to_amount: "-$791",
    time: "06:45 PM",
    badge: "Pending",
  },
  {
    img: DownIcon,
    to_currency: "DOGEUSDT",
    to_amount: "+$3500",
    time: "02:10 AM",
    badge: "Done",
  },
  {
    img: UpIcon,
    to_currency: "FTMUSDT",
    to_amount: "-$791",
    time: "06:45 PM",
    badge: "Rejected",
  },
];

export const cardData = [
  {
    id: 1,
    icon: BTC,
    vector: VectorIcon2,
    name: "BTCUSDT",
    description: "Bitcoin",
    price: "$23,738",
    pnlDaily: {
      value: "-$2560.78",
      percentage: "+14.67%",
    },
  },
  {
    id: 2,
    icon: ETH,
    vector: VectorIcon,
    name: "ETHUSDT",
    description: "Ethereum",
    price: "$1,950",
    pnlDaily: {
      value: "+$350.45",
      percentage: "-18.0%",
    },
  },
  {
    id: 3,
    icon: SOL,
    vector: VectorIcon3,
    name: "LTCUSDT",
    description: "Litecoin",
    price: "$150",
    pnlDaily: {
      value: "+$25.60",
      percentage: "+15.5%",
    },
  },
];

export const BalanceData = [
  {
    id: 1,
    icon: IconWalet,
    name: "Estimated Balance",
    description: "Bitcoin",
    balance: "$123,987",
    mntProfit: {
      value: "-$2560.78",
      percentage: "15.87%",
    },
  },
];
export const gamingData = [
  {
    currency: "GAMUSDT",
    digital_currency: "GameCoin",
    amount: "$100",
    commission: "+5.5%",
    badge: "Done",
  },
  {
    currency: "XYZUSDT",
    digital_currency: "GamingToken",
    amount: "$200",
    commission: "-2.0%",
    badge: "Pending",
  },
  {
    currency: "ENJUSDT",
    digital_currency: "EnjinCoin",
    amount: "$70",
    commission: "+4.0%",
    badge: "Done",
  },
  {
    currency: "CROUSDT",
    digital_currency: "CryptoComCoin",
    amount: "$140",
    commission: "-1.2%",
    badge: "Pending",
  },
  {
    currency: "MBOXUSDT",
    digital_currency: "Mobox",
    amount: "$130",
    commission: "+2.2%",
    badge: "Rejected",
  },
  {
    currency: "FLOKIUSDT",
    digital_currency: "Floki Inu",
    amount: "$75",
    commission: "+6.0%",
    badge: "Done",
  },
  {
    currency: "KSMUSDT",
    digital_currency: "Kusama",
    amount: "$150",
    commission: "+5.0%",
    badge: "Pending",
  },
  {
    currency: "THETAUSDT",
    digital_currency: "ThetaNetwork",
    amount: "$90",
    commission: "+3.5%",
    badge: "Done",
  },
  {
    currency: "CHZUSDT",
    digital_currency: "Chiliz",
    amount: "$80",
    commission: "+1.8%",
    badge: "Pending",
  },
];

export const metaverseData = [
  {
    currency: "METAUSDT",
    digital_currency: "MetaToken",
    amount: "$300",
    commission: "+10.3%",
    badge: "Rejected",
  },
  {
    currency: "VRSUSDT",
    digital_currency: "VirtualReality",
    amount: "$150",
    commission: "-1.5%",
    badge: "Done",
  },
  {
    currency: "MANAUSDT",
    digital_currency: "Decentraland",
    amount: "$210",
    commission: "+3.6%",
    badge: "Done",
  },
  {
    currency: "ENJUSDT",
    digital_currency: "EnjinCoin",
    amount: "$190",
    commission: "+5.4%",
    badge: "Pending",
  },
  {
    currency: "GALAUSDT",
    digital_currency: "GalaGames",
    amount: "$80",
    commission: "+2.1%",
    badge: "Done",
  },
  {
    currency: "SANDUSDT",
    digital_currency: "SandboxToken",
    amount: "$280",
    commission: "+7.8%",
    badge: "Done",
  },
];

export const defiData = [
  {
    currency: "DEFIUSDT",
    digital_currency: "DeFiToken",
    amount: "$250",
    commission: "+8.0%",
    badge: "Done",
  },
  {
    currency: "LPUSDT",
    digital_currency: "LiquidityProvider",
    amount: "$120",
    commission: "-3.3%",
    badge: "Pending",
  },
  {
    currency: "FARMUSDT",
    digital_currency: "FarmToken",
    amount: "$300",
    commission: "+5.5%",
    badge: "Done",
  },
  {
    currency: "YIELDUSDT",
    digital_currency: "YieldToken",
    amount: "$180",
    commission: "+2.0%",
    badge: "Rejected",
  },
];

export const nftData = [
  {
    currency: "NFTUSDT",
    digital_currency: "NFTToken",
    amount: "$150",
    commission: "+1.2%",
    badge: "Done",
  },
  {
    currency: "ARTUSDT",
    digital_currency: "ArtToken",
    amount: "$400",
    commission: "-5.0%",
    badge: "Rejected",
  },
  {
    currency: "MYSTUSDT",
    digital_currency: "MysteryToken",
    amount: "$180",
    commission: "+3.0%",
    badge: "Done",
  },
  {
    currency: "CREATORUSDT",
    digital_currency: "CreatorToken",
    amount: "$275",
    commission: "+0.5%",
    badge: "Pending",
  },
];

export const allCoins = [
  {
    currency: "MATICUSDT",
    digital_currency: "Polygon",
    amount: "$1.20",
    commission: "+3.5%",
  },
  {
    currency: "AVAXUSDT",
    digital_currency: "Avalanche",
    amount: "$15.50",
    commission: "-2.1%",
  },
  {
    currency: "DOTUSDT",
    digital_currency: "Polkadot",
    amount: "$6.00",
    commission: "+5.2%",
  },
  {
    currency: "LINKUSDT",
    digital_currency: "Chainlink",
    amount: "$25.00",
    commission: "+1.8%",
  },
  {
    currency: "XTZUSDT",
    digital_currency: "Tezos",
    amount: "$1.80",
    commission: "+4.0%",
  },
  {
    currency: "FILUSDT",
    digital_currency: "Filecoin",
    amount: "$5.00",
    commission: "-1.0%",
  },
  {
    currency: "TRXUSDT",
    digital_currency: "TRON",
    amount: "$0.08",
    commission: "+2.3%",
  },
  {
    currency: "SANDUSDT",
    digital_currency: "The Sandbox",
    amount: "$0.50",
    commission: "+3.0%",
  },
  {
    currency: "HBARUSDT",
    digital_currency: "Hedera",
    amount: "$0.07",
    commission: "-0.5%",
  },
  {
    currency: "LUNAUSDT",
    digital_currency: "Terra",
    amount: "$20.00",
    commission: "+4.5%",
  },
  {
    currency: "NFTUSDT",
    digital_currency: "NFTToken",
    amount: "$150",
    commission: "+1.2%",
    badge: "Done",
  },
  {
    currency: "ARTUSDT",
    digital_currency: "ArtToken",
    amount: "$400",
    commission: "-5.0%",
    badge: "Rejected",
  },
  {
    currency: "DEFIUSDT",
    digital_currency: "DeFiToken",
    amount: "$250",
    commission: "+8.0%",
    badge: "Done",
  },
  {
    currency: "LPUSDT",
    digital_currency: "LiquidityProvider",
    amount: "$120",
    commission: "-3.3%",
    badge: "Pending",
  },
  {
    currency: "METAUSDT",
    digital_currency: "MetaToken",
    amount: "$300",
    commission: "+10.3%",
    badge: "Rejected",
  },
  {
    currency: "VRSUSDT",
    digital_currency: "VirtualReality",
    amount: "$150",
    commission: "-1.5%",
    badge: "Done",
  },
  {
    currency: "GAMUSDT",
    digital_currency: "GameCoin",
    amount: "$100",
    commission: "+5.5%",
    badge: "Done",
  },
  {
    currency: "XYZUSDT",
    digital_currency: "GamingToken",
    amount: "$200",
    commission: "-2.0%",
    badge: "Pending",
  },
  {
    currency: "BTCUSDT",
    digital_currency: "Bitcoin ",
    amount: "$23,495",
    commission: "+23.4%",
  },
  {
    currency: "AXSUSDT",
    digital_currency: "Axie Infinity",
    amount: "$15.9",
    commission: "-7.8%",
  },
  {
    currency: "ETHUSDT",
    digital_currency: "Ethereum",
    amount: "$15,978",
    commission: "-0.3%",
  },
  {
    currency: "SOLUSDT",
    digital_currency: "Solana",
    amount: "$495",
    commission: "+11.1%",
  },
  {
    currency: "BNBUSDT",
    digital_currency: "Binance",
    amount: "$267",
    commission: "+6.7%",
  },
  {
    currency: "ADAUSDT",
    digital_currency: "Cardano",
    amount: "$0.49",
    commission: "-1.4%",
  },
  {
    currency: "SOLUSDT",
    digital_currency: "Solana",
    amount: "$495",
    commission: "+11.1%",
  },
  {
    currency: "MYSTUSDT",
    digital_currency: "MysteryToken",
    amount: "$180",
    commission: "+3.0%",
    badge: "Done",
  },
  {
    currency: "CREATORUSDT",
    digital_currency: "CreatorToken",
    amount: "$275",
    commission: "+0.5%",
    badge: "Pending",
  },
  {
    currency: "FARMUSDT",
    digital_currency: "FarmToken",
    amount: "$300",
    commission: "+5.5%",
    badge: "Done",
  },
  {
    currency: "YIELDUSDT",
    digital_currency: "YieldToken",
    amount: "$180",
    commission: "+2.0%",
    badge: "Rejected",
  },
  {
    currency: "MANAUSDT",
    digital_currency: "Decentraland",
    amount: "$210",
    commission: "+3.6%",
    badge: "Done",
  },
  {
    currency: "ENJUSDT",
    digital_currency: "EnjinCoin",
    amount: "$190",
    commission: "+5.4%",
    badge: "Pending",
  },
  {
    currency: "GALAUSDT",
    digital_currency: "GalaGames",
    amount: "$80",
    commission: "+2.1%",
    badge: "Done",
  },
  {
    currency: "SANDUSDT",
    digital_currency: "SandboxToken",
    amount: "$280",
    commission: "+7.8%",
    badge: "Done",
  },
  {
    currency: "ENJUSDT",
    digital_currency: "EnjinCoin",
    amount: "$70",
    commission: "+4.0%",
    badge: "Done",
  },
  {
    currency: "CROUSDT",
    digital_currency: "CryptoComCoin",
    amount: "$140",
    commission: "-1.2%",
    badge: "Pending",
  },
  {
    currency: "MBOXUSDT",
    digital_currency: "Mobox",
    amount: "$130",
    commission: "+2.2%",
    badge: "Rejected",
  },
  {
    currency: "FLOKIUSDT",
    digital_currency: "Floki Inu",
    amount: "$75",
    commission: "+6.0%",
    badge: "Done",
  },
  {
    currency: "KSMUSDT",
    digital_currency: "Kusama",
    amount: "$150",
    commission: "+5.0%",
    badge: "Pending",
  },
  {
    currency: "THETAUSDT",
    digital_currency: "ThetaNetwork",
    amount: "$90",
    commission: "+3.5%",
    badge: "Done",
  },
  {
    currency: "CHZUSDT",
    digital_currency: "Chiliz",
    amount: "$80",
    commission: "+1.8%",
    badge: "Pending",
  },
];
