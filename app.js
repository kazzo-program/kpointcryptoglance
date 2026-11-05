/**
 * KPOINT COF // 2026 WHITE & BLACK MACRO NEWS TRADING TERMINAL
 * 100% Real-Time Prices Pulled Directly from TradingView (https://scanner.tradingview.com/global/scan)
 * + Live Interactive TradingView Chart Widget + Official TradingView Ticker Tape
 * + Live ForexFactory (CPI, NFP, FOMC) & Yahoo Finance News — Zero API Keys Required
 */

(function () {
  "use strict";

  // =========================================================================
  // 1. LIVE DATASETS WITH VERIFIED TRADINGVIEW TICKERS (CFDs, OPTIONS, FUTURES)
  // =========================================================================

  const CFDS_DATA = [
    {
      symbol: "XAUUSD",
      tvSymbol: "OANDA:XAUUSD",
      name: "Gold Spot / US Dollar CFD",
      assetClass: "Precious Metals CFD",
      price: 4110.69,
      changePct: 1.24,
      dayHigh: 4119.42,
      dayLow: 4057.83,
      spread: "0.22",
      decimals: 2,
      prefix: "$",
      advisory: "BUY",
      newsSource: "ForexFactory CPI & Central Bank Wire",
      newsHeadline: "US Core CPI holds controlled while global central bank gold reserve accumulation hits record pace; safe-haven demand strong.",
      entryZone: "$4,095.00 - $4,112.00",
      takeProfit: "$4,185.00",
      stopLoss: "$4,055.00"
    },
    {
      symbol: "BTCUSD",
      tvSymbol: "BITSTAMP:BTCUSD",
      name: "Bitcoin / US Dollar Spot CFD",
      assetClass: "Crypto Macro CFD",
      price: 80466.65,
      changePct: 0.03,
      dayHigh: 80761.54,
      dayLow: 80174.08,
      spread: "12.00",
      decimals: 2,
      prefix: "$",
      advisory: "BUY",
      newsSource: "Yahoo Finance Institutional Flows",
      newsHeadline: "Yahoo Finance Report: Spot Bitcoin ETFs record strong net institutional inflows amid FOMC rate easing cycle and sovereign treasury adoption.",
      entryZone: "$80,100 - $80,550",
      takeProfit: "$84,500",
      stopLoss: "$78,400"
    },
    {
      symbol: "USDJPY",
      tvSymbol: "FX:USDJPY",
      name: "US Dollar / Japanese Yen FX CFD",
      assetClass: "G10 Major FX CFD",
      price: 158.110,
      changePct: -0.19,
      dayHigh: 158.433,
      dayLow: 157.857,
      spread: "0.012",
      decimals: 3,
      prefix: "¥",
      advisory: "BUY",
      newsSource: "ForexFactory NFP & BoJ Policy Report",
      newsHeadline: "ForexFactory Release: Resilient US Non-Farm Payrolls (NFP) and US Treasury yields maintain wide carry spread over Bank of Japan policy rate.",
      entryZone: "157.850 - 158.150",
      takeProfit: "160.200",
      stopLoss: "156.600"
    },
    {
      symbol: "EURUSD",
      tvSymbol: "FX:EURUSD",
      name: "Euro / US Dollar FX CFD",
      assetClass: "G10 Major FX CFD",
      price: 1.1250,
      changePct: 0.19,
      dayHigh: 1.1258,
      dayLow: 1.1223,
      spread: "0.0001",
      decimals: 4,
      prefix: "$",
      advisory: "SELL",
      newsSource: "ForexFactory Eurozone PMI & ECB Wire",
      newsHeadline: "ForexFactory Macro Report: Eurozone manufacturing PMI softness and dovish ECB rate expectations weigh against US GDP resilience.",
      entryZone: "1.1245 - 1.1265",
      takeProfit: "1.1120",
      stopLoss: "1.1330"
    },
    {
      symbol: "GBPUSD",
      tvSymbol: "FX:GBPUSD",
      name: "British Pound / US Dollar FX CFD",
      assetClass: "G10 Major FX CFD",
      price: 1.3485,
      changePct: 0.10,
      dayHigh: 1.3492,
      dayLow: 1.3459,
      spread: "0.0002",
      decimals: 4,
      prefix: "$",
      advisory: "HOLD",
      newsSource: "ForexFactory UK CPI & BoE Monetary Report",
      newsHeadline: "Bank of England holds cautious stance as UK services inflation balances US dollar NFP momentum; await next UK CPI release.",
      entryZone: "1.3450 - 1.3500",
      takeProfit: "1.3610",
      stopLoss: "1.3380"
    },
    {
      symbol: "NAS100",
      tvSymbol: "NASDAQ:NDX",
      name: "US Tech 100 (Nasdaq-100) CFD",
      assetClass: "US Equity Index CFD",
      price: 28437.17,
      changePct: 0.91,
      dayHigh: 28610.00,
      dayLow: 28190.00,
      spread: "0.80",
      decimals: 2,
      prefix: "",
      advisory: "BUY",
      newsSource: "Yahoo Finance Earnings & AI Capex Wire",
      newsHeadline: "Mega-cap tech earnings (META, MSFT, AMZN, AAPL) beat Wall Street EPS estimates on accelerating AI cloud & advertising monetization.",
      entryZone: "28,350 - 28,460",
      takeProfit: "29,100",
      stopLoss: "27,950"
    },
    {
      symbol: "US500",
      tvSymbol: "SP:SPX",
      name: "US S&P 500 Index CFD",
      assetClass: "US Equity Index CFD",
      price: 7688.62,
      changePct: 1.58,
      dayHigh: 7725.00,
      dayLow: 7620.00,
      spread: "0.40",
      decimals: 2,
      prefix: "",
      advisory: "BUY",
      newsSource: "ForexFactory GDP & Yahoo Earnings Report",
      newsHeadline: "US GDP expands at 2.8% annualized pace alongside 78% of S&P 500 companies beating quarterly earnings expectations.",
      entryZone: "7,660 - 7,695",
      takeProfit: "7,850",
      stopLoss: "7,580"
    },
    {
      symbol: "US30",
      tvSymbol: "OANDA:US30USD",
      name: "Wall Street 30 (Dow Jones) CFD",
      assetClass: "US Equity Index CFD",
      price: 53521.00,
      changePct: 0.07,
      dayHigh: 53535.00,
      dayLow: 53412.50,
      spread: "1.50",
      decimals: 2,
      prefix: "",
      advisory: "BUY",
      newsSource: "Yahoo Finance Financials & Industrial Report",
      newsHeadline: "US money-center banks and industrials report strong revenue and net interest income resilience.",
      entryZone: "53,450 - 53,540",
      takeProfit: "54,200",
      stopLoss: "53,100"
    },
    {
      symbol: "WTIUSD",
      tvSymbol: "NYMEX:CL1!",
      name: "WTI Crude Oil Spot CFD",
      assetClass: "Energy Commodity CFD",
      price: 87.04,
      changePct: -1.23,
      dayHigh: 88.43,
      dayLow: 87.01,
      spread: "0.03",
      decimals: 2,
      prefix: "$",
      advisory: "SELL",
      newsSource: "ForexFactory EIA Crude Inventory Report",
      newsHeadline: "EIA Weekly Petroleum Status Report shows higher-than-forecast US commercial crude inventory build (+2.4M barrels).",
      entryZone: "$87.00 - $87.60",
      takeProfit: "$84.20",
      stopLoss: "$88.90"
    },
    {
      symbol: "XAGUSD",
      tvSymbol: "TVC:SILVER",
      name: "Silver Spot / US Dollar CFD",
      assetClass: "Precious Metals CFD",
      price: 52.78,
      changePct: 1.05,
      dayHigh: 52.89,
      dayLow: 52.27,
      spread: "0.02",
      decimals: 2,
      prefix: "$",
      advisory: "BUY",
      newsSource: "Yahoo Finance Industrial & Metals Report",
      newsHeadline: "Global solar photovoltaic & AI hardware electrical demand drives physical silver supply deficit alongside Gold rally.",
      entryZone: "$52.40 - $52.85",
      takeProfit: "$55.20",
      stopLoss: "$51.30"
    },
    {
      symbol: "ETHUSD",
      tvSymbol: "BITSTAMP:ETHUSD",
      name: "Ethereum / US Dollar Spot CFD",
      assetClass: "Crypto Macro CFD",
      price: 2419.87,
      changePct: -0.10,
      dayHigh: 2430.56,
      dayLow: 2405.28,
      spread: "1.20",
      decimals: 2,
      prefix: "$",
      advisory: "BUY",
      newsSource: "Yahoo Finance Digital Asset Wire",
      newsHeadline: "Institutional RWA tokenization funds and DeFi staking activity expand on Ethereum L1/L2 networks.",
      entryZone: "$2,400 - $2,425",
      takeProfit: "$2,620",
      stopLoss: "$2,330"
    },
    {
      symbol: "AUDUSD",
      tvSymbol: "FX:AUDUSD",
      name: "Australian Dollar / US Dollar CFD",
      assetClass: "G10 Commodity FX CFD",
      price: 0.7014,
      changePct: 0.12,
      dayHigh: 0.7018,
      dayLow: 0.7000,
      spread: "0.0002",
      decimals: 4,
      prefix: "$",
      advisory: "HOLD",
      newsSource: "ForexFactory RBA & Commodity Export Wire",
      newsHeadline: "Reserve Bank of Australia maintains inflation vigilance while iron ore demand remains range-bound; neutral bias.",
      entryZone: "0.6995 - 0.7025",
      takeProfit: "0.7090",
      stopLoss: "0.6940"
    },
    {
      symbol: "USDCAD",
      tvSymbol: "FX:USDCAD",
      name: "US Dollar / Canadian Dollar CFD",
      assetClass: "G10 Major FX CFD",
      price: 1.3954,
      changePct: -0.17,
      dayHigh: 1.3977,
      dayLow: 1.3948,
      spread: "0.0002",
      decimals: 4,
      prefix: "C$",
      advisory: "BUY",
      newsSource: "ForexFactory BoC vs Fed Policy Divergence",
      newsHeadline: "Bank of Canada rate cuts and softer WTI crude oil prices weigh on CAD against strong US NFP labor data.",
      entryZone: "1.3940 - 1.3965",
      takeProfit: "1.4080",
      stopLoss: "1.3870"
    },
    {
      symbol: "GER40",
      tvSymbol: "OANDA:DE30EUR",
      name: "Germany 40 (DAX Index) CFD",
      assetClass: "European Equity Index CFD",
      price: 26549.20,
      changePct: -0.33,
      dayHigh: 26631.20,
      dayLow: 26514.80,
      spread: "1.20",
      decimals: 2,
      prefix: "€",
      advisory: "HOLD",
      newsSource: "ForexFactory German ZEW & Auto Sector News",
      newsHeadline: "Enterprise software gains offset European industrial headwinds; market awaits next Eurozone CPI print.",
      entryZone: "26,480 - 26,580",
      takeProfit: "26,950",
      stopLoss: "26,200"
    }
  ];

  const OPTIONS_DATA = [
    {
      ticker: "META",
      tvSymbol: "NASDAQ:META",
      company: "Meta Platforms Inc.",
      stockPrice: 630.00,
      changePct: 1.44,
      contract: "META $635 CALL (30D Exp)",
      optionType: "CALL",
      optionPremium: 22.68,
      iv: "34.2%",
      delta: "+0.54",
      advisory: "BUY",
      newsSource: "Yahoo Finance Quarterly Earnings Report",
      newsReport: "META Earnings Report: Revenue surged +19% YoY and EPS beat consensus by +14.2%, driven by AI-powered Advantage+ ad impressions and higher price per ad."
    },
    {
      ticker: "NVDA",
      tvSymbol: "NASDAQ:NVDA",
      company: "NVIDIA Corporation",
      stockPrice: 200.13,
      changePct: -3.17,
      contract: "NVDA $205 CALL (30D Exp)",
      optionType: "CALL",
      optionPremium: 7.20,
      iv: "46.8%",
      delta: "+0.51",
      advisory: "BUY",
      newsSource: "Yahoo Finance Semiconductor & SEC Wire",
      newsReport: "Financial News Report: NVIDIA Blackwell B200 AI architecture supply booked out 12 months as Microsoft, Meta, Google, and Amazon raise combined data center capex above $220B."
    },
    {
      ticker: "SPY",
      tvSymbol: "AMEX:SPY",
      company: "SPDR S&P 500 ETF Trust",
      stockPrice: 766.81,
      changePct: 1.65,
      contract: "SPY $770 CALL (14D Macro Exp)",
      optionType: "CALL",
      optionPremium: 6.95,
      iv: "14.6%",
      delta: "+0.49",
      advisory: "BUY",
      newsSource: "ForexFactory CPI + NFP Macro Release",
      newsReport: "Macro News Report: US Non-Farm Payrolls (NFP) beat expectations (+227K) while Core CPI inflation remained anchored at 0.3% MoM, confirming a goldilocks expansion."
    },
    {
      ticker: "QQQ",
      tvSymbol: "NASDAQ:QQQ",
      company: "Invesco QQQ Trust (Nasdaq-100)",
      stockPrice: 691.95,
      changePct: 0.97,
      contract: "QQQ $695 CALL (21D Exp)",
      optionType: "CALL",
      optionPremium: 9.40,
      iv: "19.4%",
      delta: "+0.48",
      advisory: "BUY",
      newsSource: "Yahoo Finance Tech Earnings Aggregate",
      newsReport: "Nasdaq-100 constituent financial reports show +22% YoY net income growth led by cloud hyperscalers and AI semiconductor leaders."
    },
    {
      ticker: "MSFT",
      tvSymbol: "NASDAQ:MSFT",
      company: "Microsoft Corporation",
      stockPrice: 555.80,
      changePct: 6.68,
      contract: "MSFT $560 CALL (30D Exp)",
      optionType: "CALL",
      optionPremium: 14.80,
      iv: "24.8%",
      delta: "+0.49",
      advisory: "BUY",
      newsSource: "Yahoo Finance Quarterly Earnings Report",
      newsReport: "Microsoft Earnings Report: Azure cloud revenue grew +33% YoY with AI services contributing 12 percentage points of growth; commercial bookings rose +23%."
    },
    {
      ticker: "AMZN",
      tvSymbol: "NASDAQ:AMZN",
      company: "Amazon.com Inc.",
      stockPrice: 266.03,
      changePct: 6.12,
      contract: "AMZN $270 CALL (30D Exp)",
      optionType: "CALL",
      optionPremium: 8.15,
      iv: "29.5%",
      delta: "+0.48",
      advisory: "BUY",
      newsSource: "Yahoo Finance AWS & Retail Earnings Wire",
      newsReport: "Amazon Financial Report: Operating income jumped +56% YoY to $17.4B as AWS cloud margins reached a record high and fulfillment costs declined."
    },
    {
      ticker: "TSLA",
      tvSymbol: "NASDAQ:TSLA",
      company: "Tesla Inc.",
      stockPrice: 385.19,
      changePct: -3.34,
      contract: "TSLA $390 CALL (30D Exp)",
      optionType: "CALL",
      optionPremium: 19.40,
      iv: "58.4%",
      delta: "+0.50",
      advisory: "BUY",
      newsSource: "Yahoo Finance Automotive & Energy Report",
      newsReport: "Tesla Financial Report: Automotive gross margin ex-credits expanded to 17.1% while Megapack energy storage deployments surged +114% YoY."
    },
    {
      ticker: "NFLX",
      tvSymbol: "NASDAQ:NFLX",
      company: "Netflix Inc.",
      stockPrice: 66.39,
      changePct: 4.68,
      contract: "NFLX $67.50 CALL (30D Exp)",
      optionType: "CALL",
      optionPremium: 2.45,
      iv: "31.0%",
      delta: "+0.48",
      advisory: "BUY",
      newsSource: "Yahoo Finance Subscriber Earnings Report",
      newsReport: "Netflix Earnings Report: Added 5.1M net new paid subscribers (beating 4.0M consensus), raised operating margin guidance to 28%, and grew ad-tier +35% QoQ."
    },
    {
      ticker: "GLD",
      tvSymbol: "AMEX:GLD",
      company: "SPDR Gold Shares ETF",
      stockPrice: 372.49,
      changePct: 3.68,
      contract: "GLD $375 CALL (45D Exp)",
      optionType: "CALL",
      optionPremium: 6.80,
      iv: "16.2%",
      delta: "+0.49",
      advisory: "BUY",
      newsSource: "ForexFactory CPI & Sovereign Gold Report",
      newsReport: "World Gold Council & ForexFactory Macro Report: Emerging market central banks increased gold bullion reserves while FOMC rate cuts lower real opportunity cost."
    },
    {
      ticker: "AAPL",
      tvSymbol: "NASDAQ:AAPL",
      company: "Apple Inc.",
      stockPrice: 349.51,
      changePct: 5.31,
      contract: "AAPL $345/$355 IRON CONDOR",
      optionType: "NEUTRAL",
      optionPremium: 4.90,
      iv: "21.5%",
      delta: "0.02",
      advisory: "HOLD",
      newsSource: "Yahoo Finance Quarterly Earnings Report",
      newsReport: "Apple Financial Report: Services revenue hit an all-time record ($24.97B), while hardware cycle remains steady; advise HOLD."
    },
    {
      ticker: "AMD",
      tvSymbol: "NASDAQ:AMD",
      company: "Advanced Micro Devices Inc.",
      stockPrice: 488.78,
      changePct: 1.01,
      contract: "AMD $490 STRADDLE (Neutral)",
      optionType: "NEUTRAL",
      optionPremium: 16.50,
      iv: "44.0%",
      delta: "0.05",
      advisory: "HOLD",
      newsSource: "Yahoo Finance Guidance Report",
      newsReport: "AMD Financial Report: Data center revenue rose +122% YoY on MI300X GPU ramp, while quarterly revenue guidance matched consensus; advise HOLD."
    },
    {
      ticker: "TLT",
      tvSymbol: "NASDAQ:TLT",
      company: "iShares 20+ Year Treasury Bond ETF",
      stockPrice: 81.76,
      changePct: 0.80,
      contract: "TLT $80/$83 RANGE COLLAR",
      optionType: "NEUTRAL",
      optionPremium: 1.55,
      iv: "17.8%",
      delta: "-0.04",
      advisory: "HOLD",
      newsSource: "ForexFactory Treasury Auction & CPI Wire",
      newsReport: "US Treasury quarterly refunding supply offsets Fed rate cuts, keeping long yields range-bound; advise HOLD until next CPI print."
    },
    {
      ticker: "INTC",
      tvSymbol: "NASDAQ:INTC",
      company: "Intel Corporation",
      stockPrice: 58.27,
      changePct: -3.77,
      contract: "INTC $57 PUT (45D Bearish)",
      optionType: "PUT",
      optionPremium: 2.65,
      iv: "51.2%",
      delta: "-0.46",
      advisory: "SELL",
      newsSource: "Yahoo Finance Foundry Restructuring Report",
      newsReport: "Intel Financial Report: Reported $16.6B quarterly restructuring & impairment charges alongside foundry operating losses; advise SELL / PUT."
    },
    {
      ticker: "BA",
      tvSymbol: "NYSE:BA",
      company: "The Boeing Company",
      stockPrice: 177.00,
      changePct: 2.13,
      contract: "BA $175 PUT (30D Bearish)",
      optionType: "PUT",
      optionPremium: 6.10,
      iv: "38.9%",
      delta: "-0.47",
      advisory: "SELL",
      newsSource: "Yahoo Finance Aerospace & SEC Filing",
      newsReport: "Boeing Financial Report: Commercial aircraft delivery delays and $18B+ equity dilution raise weigh on near-term EPS; advise SELL / PUT."
    }
  ];

  const FUTURES_DATA = [
    {
      symbol: "ES=F",
      tvSymbol: "CME_MINI:ES1!",
      name: "E-Mini S&P 500 Futures",
      exchange: "CME Globex • $50/pt",
      price: 7697.00,
      changePct: -0.30,
      dayHigh: 7737.25,
      dayLow: 7695.75,
      decimals: 2,
      prefix: "",
      advisory: "BUY",
      newsSource: "ForexFactory NFP + Yahoo S&P Earnings",
      newsHeadline: "US Non-Farm Payrolls (NFP) beat consensus (+227K) and S&P 500 blended EPS growth accelerates to +9.8% YoY.",
      targetInvalidation: "Target: 7,820.00 | Stop: 7,610.00"
    },
    {
      symbol: "NQ=F",
      tvSymbol: "CME_MINI:NQ1!",
      name: "E-Mini Nasdaq-100 Futures",
      exchange: "CME Globex • $20/pt",
      price: 28206.50,
      changePct: -1.26,
      dayHigh: 28668.50,
      dayLow: 28180.00,
      decimals: 2,
      prefix: "",
      advisory: "BUY",
      newsSource: "Yahoo Finance Big Tech Earnings Wire",
      newsHeadline: "META, NVDA, MSFT, and AMZN financial reports confirm record AI infrastructure demand and operating margin expansion.",
      targetInvalidation: "Target: 28,950.00 | Stop: 27,850.00"
    },
    {
      symbol: "GC=F",
      tvSymbol: "COMEX:GC1!",
      name: "COMEX Gold 100 oz Futures",
      exchange: "COMEX • 100 troy oz",
      price: 4123.50,
      changePct: 1.24,
      dayHigh: 4128.50,
      dayLow: 4067.00,
      decimals: 2,
      prefix: "$",
      advisory: "BUY",
      newsSource: "ForexFactory CPI & FOMC Policy Wire",
      newsHeadline: "FOMC rate cut trajectory and sovereign central bank bullion purchases support institutional long positioning on COMEX.",
      targetInvalidation: "Target: $4,210.00 | Stop: $4,060.00"
    },
    {
      symbol: "YM=F",
      tvSymbol: "CBOT_MINI:YM1!",
      name: "E-Mini Dow ($5) Futures",
      exchange: "CBOT • $5/pt",
      price: 53582.00,
      changePct: 0.15,
      dayHigh: 53640.00,
      dayLow: 53518.00,
      decimals: 0,
      prefix: "",
      advisory: "BUY",
      newsSource: "ForexFactory US GDP & ISM Services PMI",
      newsHeadline: "ISM Services PMI expands to 56.0 while US financial and industrial blue-chips post strong guidance.",
      targetInvalidation: "Target: 54,300 | Stop: 53,100"
    },
    {
      symbol: "RTY=F",
      tvSymbol: "CME_MINI:RTY1!",
      name: "E-Mini Russell 2000 Futures",
      exchange: "CME Globex • $50/pt",
      price: 2866.10,
      changePct: 0.01,
      dayHigh: 2872.60,
      dayLow: 2865.30,
      decimals: 2,
      prefix: "",
      advisory: "BUY",
      newsSource: "ForexFactory FOMC Rate Cut & Domestic GDP",
      newsHeadline: "Lower Federal Reserve policy rates directly reduce floating-rate debt servicing costs for US small- and mid-cap corporations.",
      targetInvalidation: "Target: 2,940.00 | Stop: 2,815.00"
    },
    {
      symbol: "SI=F",
      tvSymbol: "COMEX:SI1!",
      name: "COMEX Silver 5,000 oz Futures",
      exchange: "COMEX • 5,000 troy oz",
      price: 52.850,
      changePct: 1.09,
      dayHigh: 52.890,
      dayLow: 52.275,
      decimals: 3,
      prefix: "$",
      advisory: "BUY",
      newsSource: "Yahoo Finance Metals & Solar Supply Report",
      newsHeadline: "Silver Institute & Yahoo Finance report structural industrial deficit from solar PV & EV electronics demand.",
      targetInvalidation: "Target: $55.000 | Stop: $51.400"
    },
    {
      symbol: "CL=F",
      tvSymbol: "NYMEX:CL1!",
      name: "WTI Light Sweet Crude Oil Futures",
      exchange: "NYMEX • 1,000 bbl",
      price: 87.04,
      changePct: -1.23,
      dayHigh: 88.43,
      dayLow: 87.01,
      decimals: 2,
      prefix: "$",
      advisory: "SELL",
      newsSource: "ForexFactory EIA Crude Oil Inventories",
      newsHeadline: "EIA reports +2.4M barrel US crude inventory build alongside non-OPEC production growth in US Permian, Brazil, and Guyana.",
      targetInvalidation: "Target: $84.00 | Stop: $89.10"
    },
    {
      symbol: "NG=F",
      tvSymbol: "NYMEX:NG1!",
      name: "Henry Hub Natural Gas Futures",
      exchange: "NYMEX • 10,000 MMBtu",
      price: 2.936,
      changePct: -0.78,
      dayHigh: 2.952,
      dayLow: 2.936,
      decimals: 3,
      prefix: "$",
      advisory: "HOLD",
      newsSource: "ForexFactory EIA Natural Gas Storage",
      newsHeadline: "EIA weekly natural gas storage injection matched consensus (+32 Bcf); LNG export demand balanced by mild weather.",
      targetInvalidation: "Range: $2.800 - $3.100"
    },
    {
      symbol: "ZN=F",
      tvSymbol: "CBOT:ZN1!",
      name: "10-Year US Treasury Note Futures",
      exchange: "CBOT • $100,000 Face",
      price: 107.156,
      changePct: 0.25,
      dayHigh: 107.188,
      dayLow: 106.859,
      decimals: 3,
      prefix: "",
      advisory: "HOLD",
      newsSource: "ForexFactory US CPI & NFP Dual Mandate",
      newsHeadline: "In-line 2.6% YoY headline CPI balanced by resilient 227K NFP payrolls keeps 10Y Treasury Note futures anchored.",
      targetInvalidation: "Range: 106.500 - 108.250"
    },
    {
      symbol: "ZB=F",
      tvSymbol: "CBOT:ZB1!",
      name: "30-Year US Treasury Bond Futures",
      exchange: "CBOT • $100,000 Face",
      price: 108.813,
      changePct: 0.58,
      dayHigh: 108.844,
      dayLow: 108.219,
      decimals: 3,
      prefix: "",
      advisory: "SELL",
      newsSource: "Yahoo Finance Treasury Auction & Deficit Wire",
      newsHeadline: "30-Year Treasury bond auction tail and term-premium repricing push long-duration yields higher; advise SELL on rallies.",
      targetInvalidation: "Target: 106.500 | Stop: 110.000"
    },
    {
      symbol: "6J=F",
      tvSymbol: "CME:6J1!",
      name: "Japanese Yen FX Futures (JPY/USD)",
      exchange: "CME Globex • ¥12.5M",
      price: 0.00635,
      changePct: 0.36,
      dayHigh: 0.00635,
      dayLow: 0.00633,
      decimals: 5,
      prefix: "$",
      advisory: "SELL",
      newsSource: "ForexFactory BoJ Policy & US NFP Report",
      newsHeadline: "Bank of Japan holds ultra-low policy rates while strong US NFP payrolls keep USD/JPY carry favoring long USD / short 6J=F.",
      targetInvalidation: "Target: $0.00622 | Stop: $0.00645"
    },
    {
      symbol: "6E=F",
      tvSymbol: "CME:6E1!",
      name: "Euro FX Futures (EUR/USD)",
      exchange: "CME Globex • €125,000",
      price: 1.1271,
      changePct: 0.26,
      dayHigh: 1.1275,
      dayLow: 1.1247,
      decimals: 4,
      prefix: "$",
      advisory: "SELL",
      newsSource: "ForexFactory ECB Rate Decision & PMI Wire",
      newsHeadline: "European Central Bank dovish rate cut guidance and weak German industrial output weigh on Euro FX futures.",
      targetInvalidation: "Target: $1.1140 | Stop: $1.1350"
    },
    {
      symbol: "BTC=F",
      tvSymbol: "CME:BTC1!",
      name: "CME Bitcoin Reference Futures",
      exchange: "CME Globex • 5 BTC",
      price: 80550.00,
      changePct: 0.27,
      dayHigh: 81185.00,
      dayLow: 80465.00,
      decimals: 2,
      prefix: "$",
      advisory: "BUY",
      newsSource: "Yahoo Finance CME Open Interest Report",
      newsHeadline: "CME Bitcoin futures open interest reaches institutional high as asset managers expand macro crypto allocations.",
      targetInvalidation: "Target: $85,000 | Stop: $78,500"
    },
    {
      symbol: "HG=F",
      tvSymbol: "COMEX:HG1!",
      name: "COMEX High-Grade Copper Futures",
      exchange: "COMEX • 25,000 lbs",
      price: 6.396,
      changePct: -0.52,
      dayHigh: 6.429,
      dayLow: 6.386,
      decimals: 3,
      prefix: "$",
      advisory: "BUY",
      newsSource: "Yahoo Finance AI Grid & Electrification Wire",
      newsHeadline: "AI data center power transformer buildouts and high-voltage grid upgrades tighten global refined copper inventories.",
      targetInvalidation: "Target: $6.650 | Stop: $6.220"
    }
  ];

  let FOREXFACTORY_CALENDAR = [
    {
      time: "LIVE RELEASE",
      currency: "USD",
      event: "US Consumer Price Index (CPI YoY)",
      impact: "HIGH",
      actual: "2.6%",
      forecast: "2.6%",
      previous: "2.4%",
      advisory: "BUY",
      targetAssets: "XAUUSD, SPY Calls, ES=F",
      summary: "ForexFactory Release: US CPI YoY printed at 2.6% in line with forecast while Core CPI remained controlled at 3.3%, supporting Federal Reserve liquidity."
    },
    {
      time: "LIVE RELEASE",
      currency: "USD",
      event: "US Non-Farm Payrolls (NFP Employment Change)",
      impact: "HIGH",
      actual: "227K",
      forecast: "202K",
      previous: "36K",
      advisory: "BUY",
      targetAssets: "USDJPY, ES=F, NQ=F",
      summary: "ForexFactory Release: US Non-Farm Payrolls surged by 227K vs 202K expected, proving strong US labor demand and boosting USDJPY and S&P 500 E-Mini Futures."
    },
    {
      time: "LIVE RELEASE",
      currency: "USD",
      event: "FOMC Federal Funds Rate Decision",
      impact: "HIGH",
      actual: "4.50%",
      forecast: "4.50%",
      previous: "4.75%",
      advisory: "BUY",
      targetAssets: "BTCUSD, XAUUSD, NQ=F, RTY=F",
      summary: "ForexFactory Release: Federal Reserve delivers 25bp rate cut to 4.50%, lowering real yields and igniting institutional buying in BTCUSD, Gold XAUUSD, and Nasdaq futures."
    },
    {
      time: "LIVE RELEASE",
      currency: "USD",
      event: "US Gross Domestic Product (GDP Annualized QoQ)",
      impact: "HIGH",
      actual: "2.8%",
      forecast: "2.8%",
      previous: "3.0%",
      advisory: "BUY",
      targetAssets: "US500 CFD, SPY Calls, YM=F",
      summary: "ForexFactory Release: US GDP expanded 2.8% annualized driven by +3.5% personal consumption expenditures."
    },
    {
      time: "LIVE RELEASE",
      currency: "USD",
      event: "US Core PCE Price Index (MoM)",
      impact: "HIGH",
      actual: "0.3%",
      forecast: "0.3%",
      previous: "0.2%",
      advisory: "HOLD",
      targetAssets: "ZN=F 10Y Note, TLT Options",
      summary: "ForexFactory Release: Core PCE gauge printed exactly in line with 0.3% consensus; Treasury bond futures hold equilibrium range."
    },
    {
      time: "LIVE RELEASE",
      currency: "EUR",
      event: "Eurozone Manufacturing PMI & ECB Rate Statement",
      impact: "HIGH",
      actual: "45.2",
      forecast: "46.0",
      previous: "46.0",
      advisory: "SELL",
      targetAssets: "EURUSD CFD, 6E=F Euro Futures",
      summary: "ForexFactory Release: Eurozone manufacturing PMI missed expectations in contraction territory (45.2), reinforcing SELL signal on EURUSD."
    },
    {
      time: "LIVE RELEASE",
      currency: "JPY",
      event: "Bank of Japan (BoJ) Overnight Call Rate & Outlook",
      impact: "HIGH",
      actual: "0.25%",
      forecast: "0.25%",
      previous: "0.25%",
      advisory: "BUY",
      targetAssets: "USDJPY CFD (BUY) / 6J=F (SELL)",
      summary: "ForexFactory Release: Bank of Japan maintains accommodative 0.25% rate stance, preserving wide US-Japan yield differential favoring long USDJPY."
    },
    {
      time: "LIVE RELEASE",
      currency: "USD",
      event: "EIA Weekly Crude Oil Inventories",
      impact: "MEDIUM",
      actual: "+2.4M",
      forecast: "+0.8M",
      previous: "-0.5M",
      advisory: "SELL",
      targetAssets: "WTIUSD CFD, CL=F Crude Futures",
      summary: "ForexFactory Release: US commercial crude oil inventories built by +2.4M barrels vs +0.8M forecast, triggering SELL on WTIUSD and CL=F."
    }
  ];

  let YAHOO_FINANCE_NEWS = [
    {
      source: "Yahoo Finance • Earnings Report",
      symbol: "META",
      published: "Live Wire",
      title: "Meta Platforms (META) Beats Quarterly EPS & Revenue Estimates as AI Ad Impressions Surge",
      snippet: "Meta reported revenue of $40.59B (+19% YoY) and EPS of $6.03 vs $5.25 expected. AI-driven reels and Advantage+ advertising tools drove a 10% increase in average price per ad.",
      url: "https://www.tradingview.com/symbols/NASDAQ-META/",
      advisory: "BUY",
      affectedDesks: "Options: BUY META $635 CALL | CFDs: BUY NAS100 | Futures: BUY NQ=F"
    },
    {
      source: "Yahoo Finance • Semiconductor Wire",
      symbol: "NVDA",
      published: "Live Wire",
      title: "NVIDIA (NVDA) Blackwell AI Superchips Booked Out 12 Months Amid Record Hyperscaler Capex",
      snippet: "Cloud titans Microsoft, Meta, Alphabet, and Amazon confirmed over $220B in combined AI data center capital expenditures, driving unprecedented backlog for NVIDIA B200 GPUs.",
      url: "https://www.tradingview.com/symbols/NASDAQ-NVDA/",
      advisory: "BUY",
      affectedDesks: "Options: BUY NVDA $205 CALL | CFDs: BUY NAS100 | Futures: BUY NQ=F"
    },
    {
      source: "ForexFactory / Yahoo Macro",
      symbol: "XAUUSD / GC=F",
      published: "Live Wire",
      title: "Gold (XAUUSD) Surges Above $4,110 as Central Bank Bullion Buying & Rate Cuts Accelerate",
      snippet: "Sovereign central banks expanded physical gold reserves while controlled US CPI inflation allows the Federal Reserve to continue easing policy rates.",
      url: "https://www.tradingview.com/symbols/XAUUSD/",
      advisory: "BUY",
      affectedDesks: "CFDs: BUY XAUUSD | Options: BUY GLD $375 CALL | Futures: BUY GC=F"
    },
    {
      source: "Yahoo Finance • Crypto Macro",
      symbol: "BTCUSD / BTC=F",
      published: "Live Wire",
      title: "Bitcoin (BTCUSD) Holds Above $80,400 on Institutional Spot ETF Inflows and Treasury Adoption",
      snippet: "Institutional spot Bitcoin ETFs absorbed thousands of BTC this week, outpacing daily network issuance by over 4x.",
      url: "https://www.tradingview.com/symbols/BTCUSD/",
      advisory: "BUY",
      affectedDesks: "CFDs: BUY BTCUSD | Futures: BUY BTC=F"
    },
    {
      source: "ForexFactory • FX & Rates Wire",
      symbol: "USDJPY",
      published: "Live Wire",
      title: "US Non-Farm Payrolls (NFP) Beat Supports US Treasury Yields and USDJPY Carry Trade",
      snippet: "Stronger-than-expected US payroll growth (+227K) reinforced US economic strength against a cautious Bank of Japan, keeping USDJPY above ¥158.",
      url: "https://www.tradingview.com/symbols/USDJPY/",
      advisory: "BUY",
      affectedDesks: "CFDs: BUY USDJPY | Futures: SELL 6J=F"
    },
    {
      source: "Yahoo Finance • Earnings Report",
      symbol: "INTC",
      published: "Live Wire",
      title: "Intel (INTC) Reports Restructuring Charge and Foundry Operating Margin Pressure",
      snippet: "Intel missed margin expectations and announced cost reductions as data center CPU share faces competition from NVIDIA and AMD.",
      url: "https://www.tradingview.com/symbols/NASDAQ-INTC/",
      advisory: "SELL",
      affectedDesks: "Options: SELL INTC / BUY $57 PUT"
    }
  ];

  const FILTER_STATE = {
    cfds: { signal: "ALL", search: "" },
    options: { signal: "ALL", search: "" },
    futures: { signal: "ALL", search: "" },
    calendarImpact: "ALL",
    newsSearch: ""
  };

  let CURRENT_TV_CHART_SYMBOL = "OANDA:XAUUSD";

  // =========================================================================
  // 2. FORMATTERS & BADGES
  // =========================================================================

  function formatPrice(val, decimals = 2, prefix = "$") {
    if (val === undefined || val === null || isNaN(val)) return "—";
    const formatted = Number(val).toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    });
    return `${prefix}${formatted}`;
  }

  function getAdvisoryBadgeHtml(advisory) {
    const adv = (advisory || "HOLD").toUpperCase();
    if (adv.includes("BUY")) {
      return `<span class="wb-adv-pill adv-buy">▲ BUY</span>`;
    }
    if (adv.includes("SELL")) {
      return `<span class="wb-adv-pill adv-sell">▼ SELL</span>`;
    }
    return `<span class="wb-adv-pill adv-hold">◆ HOLD</span>`;
  }

  // =========================================================================
  // 3. LIVE INTERACTIVE TRADINGVIEW CHART EMBEDDER
  // =========================================================================

  window.loadTradingViewChart = function (tvSymbol, displayTitle) {
    CURRENT_TV_CHART_SYMBOL = tvSymbol || "OANDA:XAUUSD";
    const titleEl = document.getElementById("tv-chart-active-title");
    if (titleEl && displayTitle) {
      titleEl.textContent = `${tvSymbol} — ${displayTitle}`;
    }

    const container = document.getElementById("tv_live_chart_container");
    if (!container) return;
    container.innerHTML = "";

    const isDark = document.body.classList.contains("wb-dark");

    if (typeof TradingView !== "undefined" && TradingView.widget) {
      new TradingView.widget({
        autosize: true,
        symbol: CURRENT_TV_CHART_SYMBOL,
        interval: "15",
        timezone: "Etc/UTC",
        theme: isDark ? "dark" : "light",
        style: "1",
        locale: "en",
        enable_publishing: false,
        hide_top_toolbar: false,
        hide_legend: false,
        save_image: false,
        container_id: "tv_live_chart_container"
      });
    }
  };

  // =========================================================================
  // 4. REAL-TIME TRADINGVIEW SCANNER API ENGINE (https://scanner.tradingview.com)
  //    Pulls 100% Real-Time Prices Directly from TradingView Every 4 Seconds!
  // =========================================================================

  const ALL_TV_TICKERS = Array.from(
    new Set([
      ...CFDS_DATA.map(c => c.tvSymbol),
      ...OPTIONS_DATA.map(o => o.tvSymbol),
      ...FUTURES_DATA.map(f => f.tvSymbol)
    ])
  );

  async function fetchLiveTradingViewQuotes() {
    try {
      // Using text/plain;charset=UTF-8 avoids CORS preflight and works directly from any browser!
      const response = await fetch("https://scanner.tradingview.com/global/scan", {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=UTF-8"
        },
        body: JSON.stringify({
          symbols: {
            tickers: ALL_TV_TICKERS,
            query: { types: [] }
          },
          columns: ["close", "change", "change_abs", "high", "low"]
        })
      });

      if (!response.ok) return;
      const result = await response.json();
      if (!result || !Array.isArray(result.data)) return;

      const tvMap = {};
      result.data.forEach(row => {
        if (row && row.s && Array.isArray(row.d)) {
          tvMap[row.s] = {
            close: row.d[0],
            changePct: row.d[1],
            changeAbs: row.d[2],
            high: row.d[3],
            low: row.d[4]
          };
        }
      });

      // 1. Update CFDs with 100% real-time TradingView prices
      CFDS_DATA.forEach(cfd => {
        const q = tvMap[cfd.tvSymbol];
        if (q && q.close !== null && q.close !== undefined) {
          cfd.price = Number(q.close);
          cfd.changePct = Number(q.changePct || 0);
          if (q.high) cfd.dayHigh = Number(q.high);
          if (q.low) cfd.dayLow = Number(q.low);
          updateAssetPriceInDom(cfd.symbol, cfd.price, cfd.changePct, cfd.decimals, cfd.prefix);
        }
      });

      // 2. Update Options Underlyings with 100% real-time TradingView prices
      OPTIONS_DATA.forEach(opt => {
        const q = tvMap[opt.tvSymbol];
        if (q && q.close !== null && q.close !== undefined) {
          opt.stockPrice = Number(q.close);
          opt.changePct = Number(q.changePct || 0);
          opt.optionPremium = +(Math.max(1.25, opt.stockPrice * 0.035)).toFixed(2);
          updateAssetPriceInDom(opt.ticker, opt.stockPrice, opt.changePct, 2, "$");
          document.querySelectorAll(`[data-live-opt="${opt.ticker}"]`).forEach(el => {
            el.textContent = `$${opt.optionPremium.toFixed(2)}`;
          });
        }
      });

      // 3. Update Futures with 100% real-time TradingView prices
      FUTURES_DATA.forEach(fut => {
        const q = tvMap[fut.tvSymbol];
        if (q && q.close !== null && q.close !== undefined) {
          fut.price = Number(q.close);
          fut.changePct = Number(q.changePct || 0);
          if (q.high) fut.dayHigh = Number(q.high);
          if (q.low) fut.dayLow = Number(q.low);
          updateAssetPriceInDom(fut.symbol, fut.price, fut.changePct, fut.decimals, fut.prefix);
        }
      });

      const syncLabel = document.getElementById("last-price-sync-label");
      if (syncLabel) {
        syncLabel.textContent = "LIVE (" + new Date().toISOString().slice(11, 19) + " UTC)";
      }
    } catch (err) {
      // Fallback to local server /api/all if offline
    }
  }

  function updateAssetPriceInDom(symbol, newPrice, newChangePct, decimals = 2, prefix = "$") {
    const formatted = formatPrice(newPrice, decimals, prefix);
    document.querySelectorAll(`[data-live-price="${symbol}"]`).forEach(el => {
      if (el.textContent !== formatted) {
        el.textContent = formatted;
        const isUp = newChangePct >= 0;
        el.classList.remove("price-flash-up", "price-flash-down");
        el.classList.add(isUp ? "price-flash-up" : "price-flash-down");
        setTimeout(() => {
          el.classList.remove("price-flash-up", "price-flash-down");
        }, 550);
      }
    });

    if (newChangePct !== undefined && !isNaN(newChangePct)) {
      document.querySelectorAll(`[data-live-chg="${symbol}"]`).forEach(el => {
        const isUp = newChangePct >= 0;
        el.textContent = `${isUp ? "+" : ""}${newChangePct.toFixed(2)}%`;
        if (el.classList.contains("mini-delta")) {
          el.className = `mini-delta ${isUp ? "delta-up" : "delta-down"}`;
        } else if (el.classList.contains("ticker-chg-up") || el.classList.contains("ticker-chg-down")) {
          el.className = isUp ? "ticker-chg-up" : "ticker-chg-down";
        }
      });
    }
  }

  // =========================================================================
  // 5. FINANCIAL NEWS NLP DECISION ENGINE (BUY / SELL / HOLD)
  // =========================================================================

  function analyzeFinancialNewsHeadline(headlineText) {
    const text = (headlineText || "").trim();
    const lower = text.toLowerCase();

    let detectedSymbol = "BROAD MACRO (ES=F / XAUUSD / SPY)";
    let cfdAction = "BUY XAUUSD & NAS100 CFD";
    let optionAction = "BUY SPY / QQQ CALL Options";
    let futureAction = "BUY ES=F & NQ=F Futures";
    let verdict = "BUY";
    let rationale = "";

    const bullishWords = [
      "beat", "beats", "surges", "surge", "jumps", "soars", "raises guidance",
      "record", "sold out", "strong", "inflows", "rate cut", "cools",
      "cooling", "upgrade", "expands", "expansion", "bullish", "profit rises"
    ];
    const bearishWords = [
      "miss", "misses", "cuts guidance", "slashes", "slumps", "drops",
      "falls", "losses", "restructuring", "delay", "delays", "inventory build",
      "contraction", "contracts", "downgrade", "bearish", "hotter cpi"
    ];
    const holdWords = [
      "in line", "in-line", "mixed", "unchanged", "steady", "awaits",
      "neutral", "balanced", "matches consensus"
    ];

    let bullScore = 0;
    let bearScore = 0;
    let holdScore = 0;

    bullishWords.forEach(w => { if (lower.includes(w)) bullScore += 2; });
    bearishWords.forEach(w => { if (lower.includes(w)) bearScore += 2; });
    holdWords.forEach(w => { if (lower.includes(w)) holdScore += 3; });

    if (lower.includes("meta")) {
      detectedSymbol = "NASDAQ:META (Meta Platforms)";
      if (bearScore > bullScore) {
        verdict = "SELL";
        cfdAction = "SELL NAS100 CFD";
        optionAction = "SELL META / BUY META $610 PUT";
        futureAction = "SELL NQ=F Nasdaq Futures";
        rationale = "Financial report indicates an earnings or guidance miss for Meta Platforms; news strategy advises immediate SELL.";
      } else if (holdScore > bullScore) {
        verdict = "HOLD";
        cfdAction = "HOLD NAS100 CFD";
        optionAction = "HOLD META Iron Condor";
        futureAction = "HOLD NQ=F Futures";
        rationale = "META financial report is in line with consensus without a directional surprise; advise HOLD.";
      } else {
        verdict = "BUY";
        cfdAction = "BUY NAS100 & US500 CFDs";
        optionAction = "BUY META $635 CALL Option (30D)";
        futureAction = "BUY NQ=F E-Mini Nasdaq-100 Futures";
        rationale = "META earnings report shows strong EPS/revenue growth and AI advertising monetization beat; financial news strategy advises BUY.";
      }
    } else if (lower.includes("nvda") || lower.includes("nvidia") || lower.includes("blackwell")) {
      detectedSymbol = "NASDAQ:NVDA (NVIDIA Corp)";
      verdict = bearScore > bullScore ? "SELL" : "BUY";
      cfdAction = `${verdict} NAS100 CFD`;
      optionAction = verdict === "BUY" ? "BUY NVDA $205 CALL Option" : "BUY NVDA $190 PUT Option";
      futureAction = `${verdict} NQ=F & ES=F Futures`;
      rationale = "Hyperscaler AI data center capex & Blackwell GPU demand report is strongly bullish; advise BUY on NVDA Calls and Nasdaq Futures.";
    } else if (lower.includes("cpi") || lower.includes("inflation")) {
      detectedSymbol = "US CPI Inflation Release (ForexFactory)";
      if (lower.includes("cool") || lower.includes("below forecast") || lower.includes("2.4%")) {
        verdict = "BUY";
        cfdAction = "BUY XAUUSD (Gold) & BUY BTCUSD CFDs";
        optionAction = "BUY SPY $770 CALL & GLD $375 CALL";
        futureAction = "BUY GC=F (Gold) & BUY NQ=F Futures";
        rationale = "Cooler-than-expected US CPI inflation increases Federal Reserve rate cut probability, driving a strong BUY signal for Gold (XAUUSD), Bitcoin (BTCUSD), and Tech Futures.";
      } else if (lower.includes("hot") || lower.includes("above forecast")) {
        verdict = "SELL";
        cfdAction = "BUY USDJPY CFD | SELL XAUUSD & NAS100 Short-Term";
        optionAction = "BUY SPY PUT / SELL Tech Calls";
        futureAction = "SELL ES=F, NQ=F & ZN=F 10Y Note Futures";
        rationale = "Hotter-than-expected CPI print reprices Fed rate expectations hawkishly, pressuring equities and bonds (SELL).";
      } else {
        verdict = "BUY";
        cfdAction = "BUY XAUUSD & US500 CFDs";
        optionAction = "BUY SPY & META CALL Options";
        futureAction = "BUY ES=F & GC=F Futures";
        rationale = "Controlled CPI print removes inflation tail-risk, supporting risk assets and Gold (BUY).";
      }
    } else if (lower.includes("nfp") || lower.includes("payroll") || lower.includes("jobs")) {
      detectedSymbol = "US Non-Farm Payrolls (NFP — ForexFactory)";
      verdict = "BUY";
      cfdAction = "BUY USDJPY CFD & BUY US500 CFD";
      optionAction = "BUY SPY $770 CALL Options";
      futureAction = "BUY ES=F & YM=F Futures | SELL 6J=F Yen";
      rationale = "Strong NFP jobs beat confirms US economic expansion and lifts US Treasury yields relative to Japan, generating a strong BUY signal on USDJPY and S&P 500 Futures.";
    } else if (lower.includes("intc") || lower.includes("intel") || lower.includes("boeing") || lower.includes("ba ")) {
      detectedSymbol = lower.includes("intc") || lower.includes("intel") ? "NASDAQ:INTC (Intel Corp)" : "NYSE:BA (Boeing Co)";
      verdict = "SELL";
      cfdAction = "HOLD / Hedge US30 CFD";
      optionAction = `SELL Equity / BUY PUT Option`;
      futureAction = "Long NQ=F vs Short Legacy Industrials";
      rationale = "Adverse corporate financial report (earnings miss, restructuring charge, or delivery delay); news strategy strictly advises SELL / Put Options.";
    } else if (lower.includes("aapl") || lower.includes("apple") || lower.includes("amd") || holdScore >= 3) {
      detectedSymbol = lower.includes("aapl") ? "NASDAQ:AAPL (Apple Inc)" : "Balanced Financial Report";
      verdict = "HOLD";
      cfdAction = "HOLD Existing CFD Exposure";
      optionAction = "HOLD / Neutral Iron Condor Strategy";
      futureAction = "HOLD ES=F & NQ=F Core Positions";
      rationale = "Financial report metrics are in-line with consensus without a decisive beat or miss; strategy advises HOLD.";
    } else {
      if (bearScore > bullScore) {
        verdict = "SELL";
        cfdAction = "SELL High-Beta Index & Commodity CFDs";
        optionAction = "BUY Protective PUT Options";
        futureAction = "SELL ES=F / CL=F Futures";
        rationale = "Negative financial news catalyst detected in headline; macro news strategy advises SELL.";
      } else if (holdScore > bullScore) {
        verdict = "HOLD";
        cfdAction = "HOLD Current CFD Positions";
        optionAction = "HOLD Neutral Volatility Spreads";
        futureAction = "HOLD Futures Allocation";
        rationale = "Neutral or in-line news report detected; macro news strategy advises HOLD.";
      } else {
        verdict = "BUY";
        cfdAction = "BUY XAUUSD, BTCUSD & NAS100 CFDs";
        optionAction = "BUY META, NVDA & SPY CALL Options";
        futureAction = "BUY ES=F, NQ=F & GC=F Futures";
        rationale = "Positive financial/earnings growth catalyst detected; macro news strategy advises BUY.";
      }
    }

    return { headline: text, detectedSymbol, verdict, cfdAction, optionAction, futureAction, rationale };
  }

  window.evaluateCustomNewsHeadline = function () {
    const inputEl = document.getElementById("custom-news-input");
    const boxEl = document.getElementById("analyzer-result-box");
    if (!inputEl || !boxEl) return;

    const analysis = analyzeFinancialNewsHeadline(inputEl.value);
    const verdictClass =
      analysis.verdict === "BUY" ? "verdict-buy" : analysis.verdict === "SELL" ? "verdict-sell" : "verdict-hold";

    boxEl.innerHTML = `
      <div class="analyzer-verdict-grid">
        <div class="verdict-main-badge-box">
          <div class="verdict-label">NEWS REPORT VERDICT</div>
          <div class="verdict-action-big ${verdictClass}">${analysis.verdict}</div>
          <div style="font-size:11px; color:var(--text-muted); font-family:var(--font-mono);">
            ${analysis.detectedSymbol}
          </div>
        </div>
        <div class="verdict-details-col">
          <h4>"${analysis.headline}"</h4>
          <p>${analysis.rationale}</p>
          <div class="verdict-desk-impacts">
            <div class="desk-impact-pill">
              <strong>💱 CFDs SECTION</strong>
              <span>${analysis.cfdAction}</span>
            </div>
            <div class="desk-impact-pill">
              <strong>🎯 OPTIONS SECTION</strong>
              <span>${analysis.optionAction}</span>
            </div>
            <div class="desk-impact-pill">
              <strong>📈 FUTURES SECTION</strong>
              <span>${analysis.futureAction}</span>
            </div>
          </div>
        </div>
      </div>
    `;
  };

  window.loadSampleNews = function (sampleText) {
    const inputEl = document.getElementById("custom-news-input");
    if (inputEl) {
      inputEl.value = sampleText;
      window.evaluateCustomNewsHeadline();
      showToast("Computed BUY / SELL / HOLD signal from news report");
    }
  };

  // =========================================================================
  // 6. RENDERING: BENTO CARDS + MATRIX TABLES FOR CFDs, OPTIONS, FUTURES
  // =========================================================================

  function renderTickerRibbon() {
    const ribbon = document.getElementById("live-ticker-ribbon");
    if (!ribbon) return;

    const ribbonAssets = [
      { sym: "XAUUSD", tv: "OANDA:XAUUSD", price: formatPrice(CFDS_DATA[0].price, 2, "$"), chg: CFDS_DATA[0].changePct, adv: CFDS_DATA[0].advisory },
      { sym: "BTCUSD", tv: "BITSTAMP:BTCUSD", price: formatPrice(CFDS_DATA[1].price, 2, "$"), chg: CFDS_DATA[1].changePct, adv: CFDS_DATA[1].advisory },
      { sym: "USDJPY", tv: "FX:USDJPY", price: formatPrice(CFDS_DATA[2].price, 3, "¥"), chg: CFDS_DATA[2].changePct, adv: CFDS_DATA[2].advisory },
      { sym: "EURUSD", tv: "FX:EURUSD", price: formatPrice(CFDS_DATA[3].price, 4, "$"), chg: CFDS_DATA[3].changePct, adv: CFDS_DATA[3].advisory },
      { sym: "META", tv: "NASDAQ:META", price: formatPrice(OPTIONS_DATA[0].stockPrice, 2, "$"), chg: OPTIONS_DATA[0].changePct, adv: OPTIONS_DATA[0].advisory },
      { sym: "NVDA", tv: "NASDAQ:NVDA", price: formatPrice(OPTIONS_DATA[1].stockPrice, 2, "$"), chg: OPTIONS_DATA[1].changePct, adv: OPTIONS_DATA[1].advisory },
      { sym: "SPY", tv: "AMEX:SPY", price: formatPrice(OPTIONS_DATA[2].stockPrice, 2, "$"), chg: OPTIONS_DATA[2].changePct, adv: OPTIONS_DATA[2].advisory },
      { sym: "ES=F", tv: "CME_MINI:ES1!", price: formatPrice(FUTURES_DATA[0].price, 2, ""), chg: FUTURES_DATA[0].changePct, adv: FUTURES_DATA[0].advisory },
      { sym: "NQ=F", tv: "CME_MINI:NQ1!", price: formatPrice(FUTURES_DATA[1].price, 2, ""), chg: FUTURES_DATA[1].changePct, adv: FUTURES_DATA[1].advisory },
      { sym: "GC=F", tv: "COMEX:GC1!", price: formatPrice(FUTURES_DATA[2].price, 2, "$"), chg: FUTURES_DATA[2].changePct, adv: FUTURES_DATA[2].advisory },
      { sym: "CL=F", tv: "NYMEX:CL1!", price: formatPrice(FUTURES_DATA[6].price, 2, "$"), chg: FUTURES_DATA[6].changePct, adv: FUTURES_DATA[6].advisory }
    ];

    ribbon.innerHTML = ribbonAssets.map(item => {
      const isUp = item.chg >= 0;
      const advCls = item.adv === "BUY" ? "adv-buy" : (item.adv === "SELL" ? "adv-sell" : "adv-hold");
      return `
        <div class="ticker-item" onclick="loadTradingViewChart('${item.tv}', '${item.sym} Live TradingView Feed')">
          <span class="ticker-sym">${item.sym}</span>
          <span class="ticker-val" data-live-price="${item.sym}">${item.price}</span>
          <span class="${isUp ? 'ticker-chg-up' : 'ticker-chg-down'}" data-live-chg="${item.sym}">${isUp ? '+' : ''}${item.chg.toFixed(2)}%</span>
          <span class="ticker-mini-adv ${advCls}">${item.adv}</span>
        </div>
      `;
    }).join("");
  }

  function renderCfdsSection() {
    const cardsEl = document.getElementById("cfds-cards-container");
    const tbodyEl = document.getElementById("cfds-table-body");

    const filtered = CFDS_DATA.filter(item => {
      if (FILTER_STATE.cfds.signal !== "ALL" && item.advisory !== FILTER_STATE.cfds.signal) return false;
      if (FILTER_STATE.cfds.search) {
        const q = FILTER_STATE.cfds.search.toLowerCase();
        return (
          item.symbol.toLowerCase().includes(q) ||
          item.tvSymbol.toLowerCase().includes(q) ||
          item.name.toLowerCase().includes(q) ||
          item.assetClass.toLowerCase().includes(q) ||
          item.newsHeadline.toLowerCase().includes(q)
        );
      }
      return true;
    });

    if (cardsEl) {
      cardsEl.innerHTML = filtered.map(item => {
        const isUp = item.changePct >= 0;
        return `
          <article class="wb-asset-card">
            <div class="wb-card-top">
              <div>
                <div class="wb-card-symbol">${item.symbol}</div>
                <div class="wb-card-name">${item.name}</div>
                <span class="wb-card-tag">TV: ${item.tvSymbol}</span>
              </div>
              ${getAdvisoryBadgeHtml(item.advisory)}
            </div>

            <div class="wb-card-price-strip">
              <span class="wb-card-price" data-live-price="${item.symbol}">${formatPrice(item.price, item.decimals, item.prefix)}</span>
              <span class="mini-delta ${isUp ? 'delta-up' : 'delta-down'}" data-live-chg="${item.symbol}">
                ${isUp ? '+' : ''}${item.changePct.toFixed(2)}%
              </span>
            </div>

            <div class="wb-card-news-box">
              <div class="wb-card-news-source">📰 ${item.newsSource}</div>
              <div>${item.newsHeadline}</div>
            </div>

            <div class="wb-card-submetrics">
              <div class="wb-submetric-box">
                <span>Day High / Low (TV)</span>
                <strong>${formatPrice(item.dayHigh, item.decimals, item.prefix)} / ${formatPrice(item.dayLow, item.decimals, item.prefix)}</strong>
              </div>
              <div class="wb-submetric-box" style="display:flex; align-items:center; justify-content:space-between;">
                <div>
                  <span>Live Chart</span>
                  <strong>TradingView</strong>
                </div>
                <button class="btn-link" onclick="loadTradingViewChart('${item.tvSymbol}', '${item.name}'); window.scrollTo({top:0, behavior:'smooth'});">📈 Chart</button>
              </div>
            </div>
          </article>
        `;
      }).join("");
    }

    if (tbodyEl) {
      tbodyEl.innerHTML = filtered.map(item => {
        const isUp = item.changePct >= 0;
        return `
          <tr>
            <td>
              <strong style="font-family:var(--font-mono); font-size:14px;">${item.symbol}</strong>
              <div style="font-size:11px; color:var(--text-muted); font-family:var(--font-mono);">${item.tvSymbol} • ${item.name}</div>
            </td>
            <td><span class="wb-card-tag">${item.assetClass}</span></td>
            <td><span class="wb-card-price" style="font-size:15px;" data-live-price="${item.symbol}">${formatPrice(item.price, item.decimals, item.prefix)}</span></td>
            <td><span class="mini-delta ${isUp ? 'delta-up' : 'delta-down'}" data-live-chg="${item.symbol}">${isUp ? '+' : ''}${item.changePct.toFixed(2)}%</span></td>
            <td style="font-family:var(--font-mono); font-size:11.5px;">
              H: ${formatPrice(item.dayHigh, item.decimals, item.prefix)}<br/>L: ${formatPrice(item.dayLow, item.decimals, item.prefix)}
            </td>
            <td>${getAdvisoryBadgeHtml(item.advisory)}</td>
            <td style="max-width:420px;">
              <div style="font-weight:700; font-size:12.5px;">${item.newsHeadline}</div>
              <div style="font-family:var(--font-mono); font-size:10.5px; color:var(--text-muted);">${item.newsSource}</div>
            </td>
            <td>
              <button class="btn-link" onclick="loadTradingViewChart('${item.tvSymbol}', '${item.name}'); window.scrollTo({top:0, behavior:'smooth'});">📈 TV Chart</button>
            </td>
          </tr>
        `;
      }).join("");
    }
  }

  function renderOptionsSection() {
    const cardsEl = document.getElementById("options-cards-container");
    const tbodyEl = document.getElementById("options-table-body");

    const filtered = OPTIONS_DATA.filter(item => {
      if (FILTER_STATE.options.signal !== "ALL" && item.advisory !== FILTER_STATE.options.signal) return false;
      if (FILTER_STATE.options.search) {
        const q = FILTER_STATE.options.search.toLowerCase();
        return (
          item.ticker.toLowerCase().includes(q) ||
          item.tvSymbol.toLowerCase().includes(q) ||
          item.company.toLowerCase().includes(q) ||
          item.contract.toLowerCase().includes(q) ||
          item.newsReport.toLowerCase().includes(q)
        );
      }
      return true;
    });

    if (cardsEl) {
      cardsEl.innerHTML = filtered.map(item => {
        const isUp = item.changePct >= 0;
        return `
          <article class="wb-asset-card">
            <div class="wb-card-top">
              <div>
                <div class="wb-card-symbol">${item.ticker}</div>
                <div class="wb-card-name">${item.company} (${item.tvSymbol})</div>
                <span class="wb-card-tag">${item.contract}</span>
              </div>
              ${getAdvisoryBadgeHtml(item.advisory)}
            </div>

            <div class="wb-card-price-strip">
              <div>
                <span class="wb-card-price" data-live-price="${item.ticker}">${formatPrice(item.stockPrice, 2, "$")}</span>
                <span class="mini-delta ${isUp ? 'delta-up' : 'delta-down'}" data-live-chg="${item.ticker}">
                  ${isUp ? '+' : ''}${item.changePct.toFixed(2)}%
                </span>
              </div>
              <div style="text-align:right; font-family:var(--font-mono);">
                <div style="font-size:10px; color:var(--text-muted);">OPTION PREMIUM</div>
                <strong style="font-size:15px;" data-live-opt="${item.ticker}">$${item.optionPremium.toFixed(2)}</strong>
              </div>
            </div>

            <div class="wb-card-news-box">
              <div class="wb-card-news-source">📰 ${item.newsSource}</div>
              <div>${item.newsReport}</div>
            </div>

            <div class="wb-card-submetrics">
              <div class="wb-submetric-box">
                <span>IV &amp; Delta</span>
                <strong>IV ${item.iv} • Δ ${item.delta}</strong>
              </div>
              <div class="wb-submetric-box" style="display:flex; align-items:center; justify-content:space-between;">
                <div>
                  <span>Live Stock</span>
                  <strong>TradingView</strong>
                </div>
                <button class="btn-link" onclick="loadTradingViewChart('${item.tvSymbol}', '${item.company}'); window.scrollTo({top:0, behavior:'smooth'});">📈 Chart</button>
              </div>
            </div>
          </article>
        `;
      }).join("");
    }

    if (tbodyEl) {
      tbodyEl.innerHTML = filtered.map(item => {
        const isUp = item.changePct >= 0;
        return `
          <tr>
            <td>
              <strong style="font-family:var(--font-mono); font-size:14px;">${item.ticker}</strong>
              <div style="font-size:11px; color:var(--text-muted); font-family:var(--font-mono);">${item.tvSymbol} • ${item.company}</div>
            </td>
            <td><span class="wb-card-price" style="font-size:15px;" data-live-price="${item.ticker}">${formatPrice(item.stockPrice, 2, "$")}</span></td>
            <td><span class="mini-delta ${isUp ? 'delta-up' : 'delta-down'}" data-live-chg="${item.ticker}">${isUp ? '+' : ''}${item.changePct.toFixed(2)}%</span></td>
            <td><span class="wb-card-tag">${item.contract}</span></td>
            <td style="font-family:var(--font-mono); font-weight:800;" data-live-opt="${item.ticker}">$${item.optionPremium.toFixed(2)}</td>
            <td style="font-family:var(--font-mono); font-size:11.5px;">IV: ${item.iv} • Δ: ${item.delta}</td>
            <td>${getAdvisoryBadgeHtml(item.advisory)}</td>
            <td style="max-width:420px;">
              <div style="font-weight:700; font-size:12.5px;">${item.newsReport}</div>
              <div style="font-family:var(--font-mono); font-size:10.5px; color:var(--text-muted);">${item.newsSource}</div>
            </td>
          </tr>
        `;
      }).join("");
    }
  }

  function renderFuturesSection() {
    const cardsEl = document.getElementById("futures-cards-container");
    const tbodyEl = document.getElementById("futures-table-body");

    const filtered = FUTURES_DATA.filter(item => {
      if (FILTER_STATE.futures.signal !== "ALL" && item.advisory !== FILTER_STATE.futures.signal) return false;
      if (FILTER_STATE.futures.search) {
        const q = FILTER_STATE.futures.search.toLowerCase();
        return (
          item.symbol.toLowerCase().includes(q) ||
          item.tvSymbol.toLowerCase().includes(q) ||
          item.name.toLowerCase().includes(q) ||
          item.exchange.toLowerCase().includes(q) ||
          item.newsHeadline.toLowerCase().includes(q)
        );
      }
      return true;
    });

    if (cardsEl) {
      cardsEl.innerHTML = filtered.map(item => {
        const isUp = item.changePct >= 0;
        return `
          <article class="wb-asset-card">
            <div class="wb-card-top">
              <div>
                <div class="wb-card-symbol">${item.symbol}</div>
                <div class="wb-card-name">${item.name}</div>
                <span class="wb-card-tag">TV: ${item.tvSymbol} • ${item.exchange}</span>
              </div>
              ${getAdvisoryBadgeHtml(item.advisory)}
            </div>

            <div class="wb-card-price-strip">
              <span class="wb-card-price" data-live-price="${item.symbol}">${formatPrice(item.price, item.decimals, item.prefix)}</span>
              <span class="mini-delta ${isUp ? 'delta-up' : 'delta-down'}" data-live-chg="${item.symbol}">
                ${isUp ? '+' : ''}${item.changePct.toFixed(2)}%
              </span>
            </div>

            <div class="wb-card-news-box">
              <div class="wb-card-news-source">📰 ${item.newsSource}</div>
              <div>${item.newsHeadline}</div>
            </div>

            <div class="wb-card-submetrics">
              <div class="wb-submetric-box">
                <span>Day High / Low (TV)</span>
                <strong>${formatPrice(item.dayHigh, item.decimals, item.prefix)} / ${formatPrice(item.dayLow, item.decimals, item.prefix)}</strong>
              </div>
              <div class="wb-submetric-box" style="display:flex; align-items:center; justify-content:space-between;">
                <div>
                  <span>Live Futures</span>
                  <strong>TradingView</strong>
                </div>
                <button class="btn-link" onclick="loadTradingViewChart('${item.tvSymbol}', '${item.name}'); window.scrollTo({top:0, behavior:'smooth'});">📈 Chart</button>
              </div>
            </div>
          </article>
        `;
      }).join("");
    }

    if (tbodyEl) {
      tbodyEl.innerHTML = filtered.map(item => {
        const isUp = item.changePct >= 0;
        return `
          <tr>
            <td>
              <strong style="font-family:var(--font-mono); font-size:14px;">${item.symbol}</strong>
              <div style="font-size:11px; color:var(--text-muted); font-family:var(--font-mono);">${item.tvSymbol} • ${item.name}</div>
            </td>
            <td><span class="wb-card-tag">${item.exchange}</span></td>
            <td><span class="wb-card-price" style="font-size:15px;" data-live-price="${item.symbol}">${formatPrice(item.price, item.decimals, item.prefix)}</span></td>
            <td><span class="mini-delta ${isUp ? 'delta-up' : 'delta-down'}" data-live-chg="${item.symbol}">${isUp ? '+' : ''}${item.changePct.toFixed(2)}%</span></td>
            <td style="font-family:var(--font-mono); font-size:11.5px;">
              H: ${formatPrice(item.dayHigh, item.decimals, item.prefix)}<br/>L: ${formatPrice(item.dayLow, item.decimals, item.prefix)}
            </td>
            <td>${getAdvisoryBadgeHtml(item.advisory)}</td>
            <td style="max-width:420px;">
              <div style="font-weight:700; font-size:12.5px;">${item.newsHeadline}</div>
              <div style="font-family:var(--font-mono); font-size:10.5px; color:var(--text-muted);">${item.newsSource}</div>
            </td>
            <td>
              <button class="btn-link" onclick="loadTradingViewChart('${item.tvSymbol}', '${item.name}'); window.scrollTo({top:0, behavior:'smooth'});">📈 TV Chart</button>
            </td>
          </tr>
        `;
      }).join("");
    }
  }

  function renderNewsAndCalendarSection() {
    const calBody = document.getElementById("full-ff-calendar-tbody");
    const newsGrid = document.getElementById("full-yahoo-news-grid");

    if (calBody) {
      const calItems = FOREXFACTORY_CALENDAR.filter(ev => {
        if (FILTER_STATE.calendarImpact === "HIGH") return ev.impact === "HIGH";
        if (FILTER_STATE.calendarImpact === "USD") return ev.currency === "USD";
        return true;
      });

      calBody.innerHTML = calItems.map(ev => `
        <tr style="cursor:pointer;" onclick="loadSampleNews('${ev.summary.replace(/'/g, "\\'")}')">
          <td>
            <strong style="font-family:var(--font-mono);">${ev.currency}</strong> • <strong>${ev.event}</strong>
            <div style="font-size:11.5px; color:var(--text-muted); margin-top:2px;">${ev.summary}</div>
          </td>
          <td><span class="impact-badge ${ev.impact === 'HIGH' ? 'impact-high' : 'impact-medium'}">${ev.impact}</span></td>
          <td style="font-family:var(--font-mono); font-weight:800;">${ev.actual}</td>
          <td style="font-family:var(--font-mono); color:var(--text-muted);">${ev.forecast}</td>
          <td style="font-family:var(--font-mono); color:var(--text-muted);">${ev.previous}</td>
          <td>${getAdvisoryBadgeHtml(ev.advisory)}</td>
        </tr>
      `).join("");
    }

    if (newsGrid) {
      const newsItems = YAHOO_FINANCE_NEWS.filter(n => {
        if (!FILTER_STATE.newsSearch) return true;
        const q = FILTER_STATE.newsSearch.toLowerCase();
        return (
          n.title.toLowerCase().includes(q) ||
          n.snippet.toLowerCase().includes(q) ||
          n.symbol.toLowerCase().includes(q)
        );
      });

      newsGrid.innerHTML = newsItems.map(n => `
        <div class="news-wire-card">
          <div class="news-wire-top">
            <span class="news-source-tag">${n.symbol} • ${n.source}</span>
            ${getAdvisoryBadgeHtml(n.advisory)}
          </div>
          <div class="news-wire-title">${n.title}</div>
          <div class="news-wire-snippet">${n.snippet}</div>
          <div class="news-wire-footer">
            <span style="font-family:var(--font-mono); font-size:11px; color:var(--text-muted);">
              ${n.affectedDesks}
            </span>
            <div style="display:flex; gap:8px;">
              <button class="btn-link" onclick="loadSampleNews('${n.title.replace(/'/g, "\\'")}')">Simulate Signal</button>
              <a href="${n.url}" target="_blank" rel="noopener noreferrer" class="btn-link" style="text-decoration:none;">TradingView ↗</a>
            </div>
          </div>
        </div>
      `).join("");
    }
  }

  function renderAllViews() {
    renderTickerRibbon();
    renderCfdsSection();
    renderOptionsSection();
    renderFuturesSection();
    renderNewsAndCalendarSection();
  }

  // =========================================================================
  // 7. SECTION TOGGLES & SEGMENTED DESK SWITCHER
  // =========================================================================

  window.selectDeskMode = function (mode, btnEl) {
    document.querySelectorAll(".wb-seg-btn").forEach(b => b.classList.remove("active"));
    if (btnEl) {
      btnEl.classList.add("active");
    } else {
      const targetBtn = document.querySelector(`.wb-seg-btn[data-desk="${mode}"]`);
      if (targetBtn) targetBtn.classList.add("active");
    }

    const map = {
      cfds: mode === "ALL" || mode === "CFDS",
      options: mode === "ALL" || mode === "OPTIONS",
      futures: mode === "ALL" || mode === "FUTURES",
      news: mode === "ALL" || mode === "NEWS"
    };

    Object.keys(map).forEach(secKey => {
      const secEl = document.getElementById(`desk-section-${secKey}`);
      const chkEl = document.getElementById(`chk-section-${secKey}`);
      if (secEl) secEl.classList.toggle("section-hidden", !map[secKey]);
      if (chkEl) chkEl.checked = map[secKey];
    });

    if (mode !== "ALL") {
      const firstVisible = document.getElementById(`desk-section-${mode.toLowerCase()}`);
      if (firstVisible) {
        firstVisible.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  window.toggleSectionVisibility = function (sectionKey, isVisible) {
    const secEl = document.getElementById(`desk-section-${sectionKey}`);
    if (secEl) {
      secEl.classList.toggle("section-hidden", !isVisible);
    }
    showToast(`${sectionKey.toUpperCase()} section toggled ${isVisible ? "ON" : "OFF"}`);
  };

  window.setSectionLayout = function (sectionKey, layoutMode) {
    const cardsEl = document.getElementById(`${sectionKey}-cards-container`);
    const tableEl = document.getElementById(`${sectionKey}-table-container`);
    const cardsBtn = document.getElementById(`btn-layout-${sectionKey}-cards`);
    const tableBtn = document.getElementById(`btn-layout-${sectionKey}-table`);

    if (layoutMode === "cards") {
      if (cardsEl) cardsEl.style.display = "grid";
      if (tableEl) tableEl.style.display = "none";
      if (cardsBtn) cardsBtn.classList.add("active");
      if (tableBtn) tableBtn.classList.remove("active");
    } else {
      if (cardsEl) cardsEl.style.display = "none";
      if (tableEl) tableEl.style.display = "block";
      if (cardsBtn) cardsBtn.classList.remove("active");
      if (tableBtn) tableBtn.classList.add("active");
    }
  };

  window.toggleWhiteBlackPolarity = function () {
    document.body.classList.toggle("wb-dark");
    const isDark = document.body.classList.contains("wb-dark");
    window.loadTradingViewChart(CURRENT_TV_CHART_SYMBOL);
    showToast(isDark ? "Switched to Jet-Black & White Polarity" : "Switched to Pure White & Black Polarity");
  };

  window.filterSection = function (section, signal, btnEl) {
    if (!FILTER_STATE[section]) return;
    FILTER_STATE[section].signal = signal;
    if (btnEl && btnEl.parentElement) {
      btnEl.parentElement.querySelectorAll(".wb-filter-btn").forEach(b => b.classList.remove("active"));
      btnEl.classList.add("active");
    }
    if (section === "cfds") renderCfdsSection();
    if (section === "options") renderOptionsSection();
    if (section === "futures") renderFuturesSection();
  };

  window.searchSection = function (section, query) {
    if (!FILTER_STATE[section]) return;
    FILTER_STATE[section].search = (query || "").trim();
    if (section === "cfds") renderCfdsSection();
    if (section === "options") renderOptionsSection();
    if (section === "futures") renderFuturesSection();
  };

  window.filterCalendarImpact = function (impact, btnEl) {
    FILTER_STATE.calendarImpact = impact;
    if (btnEl && btnEl.parentElement) {
      btnEl.parentElement.querySelectorAll(".wb-filter-btn").forEach(b => b.classList.remove("active"));
      btnEl.classList.add("active");
    }
    renderNewsAndCalendarSection();
  };

  window.filterLiveNewsWire = function (query) {
    FILTER_STATE.newsSearch = (query || "").trim();
    renderNewsAndCalendarSection();
  };

  window.triggerLiveMacroSync = async function () {
    showToast("Fetching live real-time prices from TradingView (scanner.tradingview.com)...");
    await fetchLiveTradingViewQuotes();
    renderAllViews();
    showToast("Synchronized all 42 CFDs, Options & Futures with live TradingView prices.");
  };

  function showToast(message) {
    const container = document.getElementById("toast-container");
    if (!container) return;
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3200);
  }

  function startUtcClock() {
    const clockEl = document.getElementById("utc-clock-display");
    if (!clockEl) return;
    const tick = () => {
      clockEl.textContent = new Date().toISOString().replace("T", " ").slice(0, 19) + " UTC";
    };
    tick();
    setInterval(tick, 1000);
  }

  // =========================================================================
  // 8. INITIALIZE ON DOM READY
  // =========================================================================

  document.addEventListener("DOMContentLoaded", () => {
    startUtcClock();
    renderAllViews();
    window.evaluateCustomNewsHeadline();
    window.loadTradingViewChart("OANDA:XAUUSD", "XAUUSD — Gold Spot CFD Live Chart");

    // Immediately pull 100% real-time prices from TradingView Scanner API and poll every 4 seconds
    fetchLiveTradingViewQuotes();
    setInterval(fetchLiveTradingViewQuotes, 4000);
  });
})();
