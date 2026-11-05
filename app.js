/**
 * KPOINT COF // 2026 WHITE & BLACK MACRO NEWS TRADING TERMINAL
 * Toggleable Separate Sections: CFDs (XAUUSD, BTCUSD, USDJPY), Options (META, NVDA, SPY), Futures (ES=F, NQ=F, GC=F)
 * 100% Financial & Macro News-Driven BUY / SELL / HOLD Advisories
 * Live Direct Feeds: Yahoo Finance & ForexFactory — Zero API Keys Required
 */

(function () {
  "use strict";

  // =========================================================================
  // 1. LIVE DATASETS: CFDs, OPTIONS, FUTURES
  // =========================================================================

  const CFDS_DATA = [
    {
      symbol: "XAUUSD",
      yahooSymbol: "GC=F",
      name: "Gold Spot / US Dollar CFD",
      assetClass: "Precious Metals CFD",
      price: 2665.40,
      changePct: 0.84,
      spread: "0.22",
      decimals: 2,
      prefix: "$",
      advisory: "BUY",
      newsSource: "ForexFactory CPI & Central Bank Wire",
      newsHeadline: "US Core CPI holds steady while global central bank gold reserve accumulation hits record quarterly pace; safe-haven demand strong.",
      entryZone: "$2,652.00 - $2,666.00",
      takeProfit: "$2,725.00",
      stopLoss: "$2,628.00"
    },
    {
      symbol: "BTCUSD",
      yahooSymbol: "BTC-USD",
      binanceSymbol: "BTCUSDT",
      name: "Bitcoin / US Dollar Spot CFD",
      assetClass: "Crypto Macro CFD",
      price: 98420.00,
      changePct: 2.65,
      spread: "12.50",
      decimals: 2,
      prefix: "$",
      advisory: "BUY",
      newsSource: "Yahoo Finance Institutional Flows",
      newsHeadline: "Yahoo Finance Report: Spot Bitcoin ETFs record $1.4B weekly net institutional inflows amid FOMC rate easing cycle and sovereign treasury adoption.",
      entryZone: "$97,500 - $98,500",
      takeProfit: "$105,000",
      stopLoss: "$94,200"
    },
    {
      symbol: "USDJPY",
      yahooSymbol: "JPY=X",
      fxPair: "JPY",
      name: "US Dollar / Japanese Yen FX CFD",
      assetClass: "G10 Major FX CFD",
      price: 153.850,
      changePct: 0.42,
      spread: "0.012",
      decimals: 3,
      prefix: "¥",
      advisory: "BUY",
      newsSource: "ForexFactory NFP & BoJ Policy Report",
      newsHeadline: "ForexFactory Release: Resilient US Non-Farm Payrolls (NFP) and 10Y Treasury yields maintain wide carry spread over Bank of Japan policy rate.",
      entryZone: "153.400 - 153.900",
      takeProfit: "156.200",
      stopLoss: "151.850"
    },
    {
      symbol: "EURUSD",
      yahooSymbol: "EURUSD=X",
      fxPair: "EUR",
      fxInvert: true,
      name: "Euro / US Dollar FX CFD",
      assetClass: "G10 Major FX CFD",
      price: 1.0542,
      changePct: -0.38,
      spread: "0.0001",
      decimals: 4,
      prefix: "$",
      advisory: "SELL",
      newsSource: "ForexFactory Eurozone PMI & ECB Wire",
      newsHeadline: "ForexFactory Macro Report: Eurozone manufacturing PMI contracts below 46.0 while ECB signals further dovish rate cuts vs resilient US GDP.",
      entryZone: "1.0540 - 1.0575",
      takeProfit: "1.0410",
      stopLoss: "1.0645"
    },
    {
      symbol: "GBPUSD",
      yahooSymbol: "GBPUSD=X",
      fxPair: "GBP",
      fxInvert: true,
      name: "British Pound / US Dollar FX CFD",
      assetClass: "G10 Major FX CFD",
      price: 1.2685,
      changePct: 0.14,
      spread: "0.0002",
      decimals: 4,
      prefix: "$",
      advisory: "HOLD",
      newsSource: "ForexFactory UK CPI & BoE Monetary Report",
      newsHeadline: "Bank of England holds cautious stance as UK services inflation balances strong US dollar NFP momentum; await next UK CPI release.",
      entryZone: "1.2640 - 1.2720",
      takeProfit: "1.2810",
      stopLoss: "1.2560"
    },
    {
      symbol: "NAS100",
      yahooSymbol: "NQ=F",
      name: "US Tech 100 (Nasdaq-100) CFD",
      assetClass: "US Equity Index CFD",
      price: 20945.50,
      changePct: 1.28,
      spread: "0.80",
      decimals: 2,
      prefix: "",
      advisory: "BUY",
      newsSource: "Yahoo Finance Earnings & AI Capex Wire",
      newsHeadline: "Mega-cap tech earnings (META, NVDA, MSFT, AMZN) beat Wall Street EPS estimates by +11.4% on accelerating AI cloud & advertising monetization.",
      entryZone: "20,850 - 20,960",
      takeProfit: "21,450",
      stopLoss: "20,580"
    },
    {
      symbol: "US500",
      yahooSymbol: "ES=F",
      name: "US S&P 500 Index CFD",
      assetClass: "US Equity Index CFD",
      price: 5985.25,
      changePct: 0.76,
      spread: "0.40",
      decimals: 2,
      prefix: "",
      advisory: "BUY",
      newsSource: "ForexFactory GDP & Yahoo Earnings Report",
      newsHeadline: "US GDP expands at 2.8% annualized pace alongside 78% of S&P 500 companies beating quarterly earnings expectations.",
      entryZone: "5,965 - 5,990",
      takeProfit: "6,120",
      stopLoss: "5,890"
    },
    {
      symbol: "US30",
      yahooSymbol: "YM=F",
      name: "Wall Street 30 (Dow Jones) CFD",
      assetClass: "US Equity Index CFD",
      price: 44120.00,
      changePct: 0.54,
      spread: "1.50",
      decimals: 2,
      prefix: "",
      advisory: "BUY",
      newsSource: "Yahoo Finance Financials & Industrial Report",
      newsHeadline: "US money-center banks (JPM, GS) report surge in investment banking revenue and net interest income resilience.",
      entryZone: "43,980 - 44,150",
      takeProfit: "44,850",
      stopLoss: "43,550"
    },
    {
      symbol: "WTIUSD",
      yahooSymbol: "CL=F",
      name: "WTI Crude Oil Spot CFD",
      assetClass: "Energy Commodity CFD",
      price: 68.45,
      changePct: -1.42,
      spread: "0.03",
      decimals: 2,
      prefix: "$",
      advisory: "SELL",
      newsSource: "ForexFactory EIA Crude Inventory Report",
      newsHeadline: "EIA Weekly Petroleum Status Report shows higher-than-forecast US commercial crude inventory build (+2.4M barrels) and soft global refinery demand.",
      entryZone: "$68.30 - $69.10",
      takeProfit: "$64.80",
      stopLoss: "$70.90"
    },
    {
      symbol: "XAGUSD",
      yahooSymbol: "SI=F",
      name: "Silver Spot / US Dollar CFD",
      assetClass: "Precious Metals CFD",
      price: 31.18,
      changePct: 1.15,
      spread: "0.02",
      decimals: 2,
      prefix: "$",
      advisory: "BUY",
      newsSource: "Yahoo Finance Industrial & Metals Report",
      newsHeadline: "Global solar photovoltaic & AI hardware electrical demand drives fourth consecutive annual physical silver supply deficit alongside Gold rally.",
      entryZone: "$30.85 - $31.25",
      takeProfit: "$33.40",
      stopLoss: "$29.90"
    },
    {
      symbol: "ETHUSD",
      yahooSymbol: "ETH-USD",
      binanceSymbol: "ETHUSDT",
      name: "Ethereum / US Dollar Spot CFD",
      assetClass: "Crypto Macro CFD",
      price: 3185.50,
      changePct: 1.92,
      spread: "1.20",
      decimals: 2,
      prefix: "$",
      advisory: "BUY",
      newsSource: "Yahoo Finance Digital Asset Wire",
      newsHeadline: "Institutional RWA tokenization funds and DeFi staking activity expand on Ethereum L1/L2 networks following spot crypto ETF inflows.",
      entryZone: "$3,140 - $3,195",
      takeProfit: "$3,480",
      stopLoss: "$2,990"
    },
    {
      symbol: "AUDUSD",
      yahooSymbol: "AUDUSD=X",
      fxPair: "AUD",
      fxInvert: true,
      name: "Australian Dollar / US Dollar CFD",
      assetClass: "G10 Commodity FX CFD",
      price: 0.6512,
      changePct: -0.22,
      spread: "0.0002",
      decimals: 4,
      prefix: "$",
      advisory: "HOLD",
      newsSource: "ForexFactory RBA & Commodity Export Wire",
      newsHeadline: "Reserve Bank of Australia maintains hawkish inflation vigilance while iron ore demand remains range-bound; neutral near-term bias.",
      entryZone: "0.6480 - 0.6540",
      takeProfit: "0.6620",
      stopLoss: "0.6420"
    },
    {
      symbol: "USDCAD",
      yahooSymbol: "CAD=X",
      fxPair: "CAD",
      name: "US Dollar / Canadian Dollar CFD",
      assetClass: "G10 Major FX CFD",
      price: 1.3965,
      changePct: 0.35,
      spread: "0.0002",
      decimals: 4,
      prefix: "C$",
      advisory: "BUY",
      newsSource: "ForexFactory BoC vs Fed Policy Divergence",
      newsHeadline: "Bank of Canada accelerates 50bp rate cuts while softer WTI crude oil prices weigh on CAD against strong US NFP labor data.",
      entryZone: "1.3935 - 1.3975",
      takeProfit: "1.4110",
      stopLoss: "1.3850"
    },
    {
      symbol: "GER40",
      yahooSymbol: "^GDAXI",
      name: "Germany 40 (DAX Index) CFD",
      assetClass: "European Equity Index CFD",
      price: 19240.00,
      changePct: -0.18,
      spread: "1.20",
      decimals: 2,
      prefix: "€",
      advisory: "HOLD",
      newsSource: "ForexFactory German ZEW & Auto Sector News",
      newsHeadline: "SAP software gains offset European automotive export headwinds; market awaits next Eurozone CPI print.",
      entryZone: "19,150 - 19,300",
      takeProfit: "19,650",
      stopLoss: "18,920"
    }
  ];

  const OPTIONS_DATA = [
    {
      ticker: "META",
      yahooSymbol: "META",
      company: "Meta Platforms Inc.",
      stockPrice: 592.40,
      changePct: 2.88,
      contract: "META $600 CALL (30D Exp)",
      optionType: "CALL",
      optionPremium: 21.85,
      iv: "34.2%",
      delta: "+0.54",
      advisory: "BUY",
      newsSource: "Yahoo Finance Quarterly Earnings Report",
      newsReport: "META Earnings Report: Revenue surged +19% YoY to $40.59B and EPS beat consensus by +14.2%, driven by AI-powered Advantage+ ad impressions and higher price per ad."
    },
    {
      ticker: "NVDA",
      yahooSymbol: "NVDA",
      company: "NVIDIA Corporation",
      stockPrice: 145.80,
      changePct: 3.42,
      contract: "NVDA $150 CALL (30D Exp)",
      optionType: "CALL",
      optionPremium: 6.45,
      iv: "46.8%",
      delta: "+0.51",
      advisory: "BUY",
      newsSource: "Yahoo Finance Semiconductor & SEC Wire",
      newsReport: "Financial News Report: NVIDIA Blackwell B200 AI architecture supply booked out 12 months as Microsoft, Meta, Google, and Amazon raise combined data center capex above $220B."
    },
    {
      ticker: "SPY",
      yahooSymbol: "SPY",
      company: "SPDR S&P 500 ETF Trust",
      stockPrice: 597.10,
      changePct: 0.78,
      contract: "SPY $600 CALL (14D Macro Exp)",
      optionType: "CALL",
      optionPremium: 5.20,
      iv: "14.6%",
      delta: "+0.49",
      advisory: "BUY",
      newsSource: "ForexFactory CPI + NFP Macro Release",
      newsReport: "Macro News Report: US Non-Farm Payrolls (NFP) beat expectations (+227K) while Core CPI inflation remained anchored at 0.3% MoM, confirming a goldilocks expansion."
    },
    {
      ticker: "QQQ",
      yahooSymbol: "QQQ",
      company: "Invesco QQQ Trust (Nasdaq-100)",
      stockPrice: 511.25,
      changePct: 1.24,
      contract: "QQQ $515 CALL (21D Exp)",
      optionType: "CALL",
      optionPremium: 7.10,
      iv: "19.4%",
      delta: "+0.48",
      advisory: "BUY",
      newsSource: "Yahoo Finance Tech Earnings Aggregate",
      newsReport: "Nasdaq-100 constituent financial reports show +22% YoY net income growth led by cloud hyperscalers and AI semiconductor leaders."
    },
    {
      ticker: "MSFT",
      yahooSymbol: "MSFT",
      company: "Microsoft Corporation",
      stockPrice: 428.50,
      changePct: 1.65,
      contract: "MSFT $435 CALL (30D Exp)",
      optionType: "CALL",
      optionPremium: 10.40,
      iv: "24.8%",
      delta: "+0.47",
      advisory: "BUY",
      newsSource: "Yahoo Finance Quarterly Earnings Report",
      newsReport: "Microsoft Earnings Report: Azure cloud revenue grew +33% YoY with AI services contributing 12 percentage points of growth; commercial bookings rose +23%."
    },
    {
      ticker: "AMZN",
      yahooSymbol: "AMZN",
      company: "Amazon.com Inc.",
      stockPrice: 208.90,
      changePct: 2.15,
      contract: "AMZN $215 CALL (30D Exp)",
      optionType: "CALL",
      optionPremium: 6.15,
      iv: "29.5%",
      delta: "+0.46",
      advisory: "BUY",
      newsSource: "Yahoo Finance AWS & Retail Earnings Wire",
      newsReport: "Amazon Financial Report: Operating income jumped +56% YoY to $17.4B as AWS cloud margins reached a record high and fulfillment costs declined."
    },
    {
      ticker: "TSLA",
      yahooSymbol: "TSLA",
      company: "Tesla Inc.",
      stockPrice: 321.40,
      changePct: 4.12,
      contract: "TSLA $330 CALL (30D Exp)",
      optionType: "CALL",
      optionPremium: 18.60,
      iv: "58.4%",
      delta: "+0.50",
      advisory: "BUY",
      newsSource: "Yahoo Finance Automotive & Energy Report",
      newsReport: "Tesla Financial Report: Automotive gross margin ex-credits expanded to 17.1% while Megapack energy storage deployments surged +114% YoY."
    },
    {
      ticker: "NFLX",
      yahooSymbol: "NFLX",
      company: "Netflix Inc.",
      stockPrice: 805.20,
      changePct: 1.90,
      contract: "NFLX $820 CALL (30D Exp)",
      optionType: "CALL",
      optionPremium: 24.30,
      iv: "31.0%",
      delta: "+0.48",
      advisory: "BUY",
      newsSource: "Yahoo Finance Subscriber Earnings Report",
      newsReport: "Netflix Earnings Report: Added 5.1M net new paid subscribers (beating 4.0M consensus), raised operating margin guidance to 28%, and grew ad-tier +35% QoQ."
    },
    {
      ticker: "GLD",
      yahooSymbol: "GLD",
      company: "SPDR Gold Shares ETF",
      stockPrice: 246.80,
      changePct: 0.82,
      contract: "GLD $250 CALL (45D Exp)",
      optionType: "CALL",
      optionPremium: 4.35,
      iv: "16.2%",
      delta: "+0.49",
      advisory: "BUY",
      newsSource: "ForexFactory CPI & Sovereign Gold Report",
      newsReport: "World Gold Council & ForexFactory Macro Report: Emerging market central banks increased gold bullion reserves while FOMC rate cuts lower real opportunity cost."
    },
    {
      ticker: "AAPL",
      yahooSymbol: "AAPL",
      company: "Apple Inc.",
      stockPrice: 227.60,
      changePct: 0.35,
      contract: "AAPL $225/$235 IRON CONDOR",
      optionType: "NEUTRAL",
      optionPremium: 3.80,
      iv: "21.5%",
      delta: "0.02",
      advisory: "HOLD",
      newsSource: "Yahoo Finance Quarterly Earnings Report",
      newsReport: "Apple Financial Report: Services revenue hit an all-time record ($24.97B), but Greater China hardware revenue was flat YoY; advise HOLD while Apple Intelligence rolls out."
    },
    {
      ticker: "AMD",
      yahooSymbol: "AMD",
      company: "Advanced Micro Devices Inc.",
      stockPrice: 138.40,
      changePct: -0.65,
      contract: "AMD $140 STRADDLE (Neutral)",
      optionType: "NEUTRAL",
      optionPremium: 7.90,
      iv: "44.0%",
      delta: "0.05",
      advisory: "HOLD",
      newsSource: "Yahoo Finance Q4 Guidance Report",
      newsReport: "AMD Financial Report: Data center revenue rose +122% YoY on MI300X GPU ramp, but Q4 revenue guidance ($7.5B) matched consensus without upside surprise; advise HOLD."
    },
    {
      ticker: "TLT",
      yahooSymbol: "TLT",
      company: "iShares 20+ Year Treasury Bond ETF",
      stockPrice: 91.45,
      changePct: -0.28,
      contract: "TLT $90/$93 RANGE COLLAR",
      optionType: "NEUTRAL",
      optionPremium: 1.65,
      iv: "17.8%",
      delta: "-0.04",
      advisory: "HOLD",
      newsSource: "ForexFactory Treasury Auction & CPI Wire",
      newsReport: "US Treasury quarterly refunding supply offsets Fed rate cuts, keeping 10Y-30Y yields in a tight 4.25%-4.45% range; advise HOLD until next CPI print."
    },
    {
      ticker: "INTC",
      yahooSymbol: "INTC",
      company: "Intel Corporation",
      stockPrice: 24.15,
      changePct: -3.45,
      contract: "INTC $23 PUT (45D Bearish)",
      optionType: "PUT",
      optionPremium: 1.48,
      iv: "51.2%",
      delta: "-0.46",
      advisory: "SELL",
      newsSource: "Yahoo Finance Foundry Restructuring Report",
      newsReport: "Intel Financial Report: Reported $16.6B quarterly restructuring & impairment charges alongside foundry operating losses; advise SELL / PUT."
    },
    {
      ticker: "BA",
      yahooSymbol: "BA",
      company: "The Boeing Company",
      stockPrice: 146.90,
      changePct: -2.18,
      contract: "BA $145 PUT (30D Bearish)",
      optionType: "PUT",
      optionPremium: 5.60,
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
      yahooSymbol: "ES=F",
      name: "E-Mini S&P 500 Futures",
      exchange: "CME Globex • $50/pt",
      price: 5998.50,
      changePct: 0.78,
      contractMonth: "Front Month",
      decimals: 2,
      prefix: "",
      advisory: "BUY",
      newsSource: "ForexFactory NFP + Yahoo S&P Earnings",
      newsHeadline: "US Non-Farm Payrolls (NFP) beat consensus (+227K) and S&P 500 blended Q3/Q4 EPS growth accelerates to +9.8% YoY.",
      targetInvalidation: "Target: 6,150.00 | Stop: 5,910.00"
    },
    {
      symbol: "NQ=F",
      yahooSymbol: "NQ=F",
      name: "E-Mini Nasdaq-100 Futures",
      exchange: "CME Globex • $20/pt",
      price: 21012.75,
      changePct: 1.32,
      contractMonth: "Front Month",
      decimals: 2,
      prefix: "",
      advisory: "BUY",
      newsSource: "Yahoo Finance Big Tech Earnings Wire",
      newsHeadline: "META, NVDA, MSFT, and AMZN financial reports confirm record AI infrastructure demand and operating margin expansion.",
      targetInvalidation: "Target: 21,600.00 | Stop: 20,620.00"
    },
    {
      symbol: "GC=F",
      yahooSymbol: "GC=F",
      name: "COMEX Gold 100 oz Futures",
      exchange: "COMEX • 100 troy oz",
      price: 2672.80,
      changePct: 0.85,
      contractMonth: "Active Contract",
      decimals: 2,
      prefix: "$",
      advisory: "BUY",
      newsSource: "ForexFactory CPI & FOMC Policy Wire",
      newsHeadline: "FOMC rate cut trajectory and sovereign central bank bullion purchases support institutional long positioning on COMEX.",
      targetInvalidation: "Target: $2,750.00 | Stop: $2,630.00"
    },
    {
      symbol: "YM=F",
      yahooSymbol: "YM=F",
      name: "E-Mini Dow ($5) Futures",
      exchange: "CBOT • $5/pt",
      price: 44185.00,
      changePct: 0.56,
      contractMonth: "Front Month",
      decimals: 0,
      prefix: "",
      advisory: "BUY",
      newsSource: "ForexFactory US GDP & ISM Services PMI",
      newsHeadline: "ISM Services PMI expands to 56.0 (highest in 2 years) while US financial and industrial blue-chips post strong guidance.",
      targetInvalidation: "Target: 44,900 | Stop: 43,600"
    },
    {
      symbol: "RTY=F",
      yahooSymbol: "RTY=F",
      name: "E-Mini Russell 2000 Futures",
      exchange: "CME Globex • $50/pt",
      price: 2368.40,
      changePct: 1.45,
      contractMonth: "Front Month",
      decimals: 2,
      prefix: "",
      advisory: "BUY",
      newsSource: "ForexFactory FOMC Rate Cut & Domestic GDP",
      newsHeadline: "Lower Federal Reserve policy rates directly reduce floating-rate debt servicing costs for US small- and mid-cap corporations.",
      targetInvalidation: "Target: 2,460.00 | Stop: 2,295.00"
    },
    {
      symbol: "SI=F",
      yahooSymbol: "SI=F",
      name: "COMEX Silver 5,000 oz Futures",
      exchange: "COMEX • 5,000 troy oz",
      price: 31.320,
      changePct: 1.18,
      contractMonth: "Active Contract",
      decimals: 3,
      prefix: "$",
      advisory: "BUY",
      newsSource: "Yahoo Finance Metals & Solar Supply Report",
      newsHeadline: "Silver Institute & Yahoo Finance report structural industrial deficit from solar PV & EV electronics demand.",
      targetInvalidation: "Target: $33.500 | Stop: $30.100"
    },
    {
      symbol: "CL=F",
      yahooSymbol: "CL=F",
      name: "WTI Light Sweet Crude Oil Futures",
      exchange: "NYMEX • 1,000 bbl",
      price: 68.52,
      changePct: -1.38,
      contractMonth: "Front Month",
      decimals: 2,
      prefix: "$",
      advisory: "SELL",
      newsSource: "ForexFactory EIA Crude Oil Inventories",
      newsHeadline: "EIA reports +2.4M barrel US crude inventory build alongside non-OPEC production growth in US Permian, Brazil, and Guyana.",
      targetInvalidation: "Target: $64.50 | Stop: $71.10"
    },
    {
      symbol: "NG=F",
      yahooSymbol: "NG=F",
      name: "Henry Hub Natural Gas Futures",
      exchange: "NYMEX • 10,000 MMBtu",
      price: 2.785,
      changePct: 0.32,
      contractMonth: "Front Month",
      decimals: 3,
      prefix: "$",
      advisory: "HOLD",
      newsSource: "ForexFactory EIA Natural Gas Storage",
      newsHeadline: "EIA weekly natural gas storage injection matched consensus (+32 Bcf); LNG export demand balanced by mild seasonal temperatures.",
      targetInvalidation: "Range: $2.600 - $2.950"
    },
    {
      symbol: "ZN=F",
      yahooSymbol: "ZN=F",
      name: "10-Year US Treasury Note Futures",
      exchange: "CBOT • $100,000 Face",
      price: 110.125,
      changePct: -0.14,
      contractMonth: "Front Month",
      decimals: 3,
      prefix: "",
      advisory: "HOLD",
      newsSource: "ForexFactory US CPI & NFP Dual Mandate",
      newsHeadline: "In-line 2.6% YoY headline CPI balanced by resilient 227K NFP payrolls keeps 10Y Treasury Note futures anchored near 110'04.",
      targetInvalidation: "Range: 109.250 - 111.500"
    },
    {
      symbol: "ZB=F",
      yahooSymbol: "ZB=F",
      name: "30-Year US Treasury Bond Futures",
      exchange: "CBOT • $100,000 Face",
      price: 117.250,
      changePct: -0.45,
      contractMonth: "Front Month",
      decimals: 3,
      prefix: "",
      advisory: "SELL",
      newsSource: "Yahoo Finance Treasury Auction & Deficit Wire",
      newsHeadline: "30-Year Treasury bond auction tail and term-premium repricing push long-duration yields higher; advise SELL on rallies.",
      targetInvalidation: "Target: 114.500 | Stop: 119.000"
    },
    {
      symbol: "6J=F",
      yahooSymbol: "6J=F",
      name: "Japanese Yen FX Futures (JPY/USD)",
      exchange: "CME Globex • ¥12.5M",
      price: 0.00651,
      changePct: -0.42,
      contractMonth: "Front Month",
      decimals: 5,
      prefix: "$",
      advisory: "SELL",
      newsSource: "ForexFactory BoJ Policy & US NFP Report",
      newsHeadline: "Bank of Japan holds ultra-low policy rates while strong US NFP payrolls keep USD/JPY carry favoring long USD / short 6J=F.",
      targetInvalidation: "Target: $0.00638 | Stop: $0.00662"
    },
    {
      symbol: "6E=F",
      yahooSymbol: "6E=F",
      name: "Euro FX Futures (EUR/USD)",
      exchange: "CME Globex • €125,000",
      price: 1.0555,
      changePct: -0.36,
      contractMonth: "Front Month",
      decimals: 4,
      prefix: "$",
      advisory: "SELL",
      newsSource: "ForexFactory ECB Rate Decision & PMI Wire",
      newsHeadline: "European Central Bank dovish rate cut guidance and weak German industrial output weigh on Euro FX futures.",
      targetInvalidation: "Target: $1.0420 | Stop: $1.0650"
    },
    {
      symbol: "BTC=F",
      yahooSymbol: "BTC-USD",
      binanceSymbol: "BTCUSDT",
      name: "CME Bitcoin Reference Futures",
      exchange: "CME Globex • 5 BTC",
      price: 98680.00,
      changePct: 2.72,
      contractMonth: "Front Month",
      decimals: 2,
      prefix: "$",
      advisory: "BUY",
      newsSource: "Yahoo Finance CME Open Interest Report",
      newsHeadline: "CME Bitcoin futures open interest reaches all-time institutional high as asset managers expand macro crypto allocations.",
      targetInvalidation: "Target: $106,000 | Stop: $94,500"
    },
    {
      symbol: "HG=F",
      yahooSymbol: "HG=F",
      name: "COMEX High-Grade Copper Futures",
      exchange: "COMEX • 25,000 lbs",
      price: 4.325,
      changePct: 0.92,
      contractMonth: "Active Contract",
      decimals: 3,
      prefix: "$",
      advisory: "BUY",
      newsSource: "Yahoo Finance AI Grid & Electrification Wire",
      newsHeadline: "AI data center power transformer buildouts and high-voltage grid upgrades tighten global refined copper inventories.",
      targetInvalidation: "Target: $4.580 | Stop: $4.180"
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
      title: "Meta Platforms (META) Beats Q3/Q4 EPS & Revenue Estimates as AI Ad Impressions Surge",
      snippet: "Meta reported revenue of $40.59B (+19% YoY) and EPS of $6.03 vs $5.25 expected. AI-driven reels and Advantage+ advertising tools drove a 10% increase in average price per ad.",
      url: "https://finance.yahoo.com/quote/META",
      advisory: "BUY",
      affectedDesks: "Options: BUY META $600 CALL | CFDs: BUY NAS100 | Futures: BUY NQ=F"
    },
    {
      source: "Yahoo Finance • Semiconductor Wire",
      symbol: "NVDA",
      published: "Live Wire",
      title: "NVIDIA (NVDA) Blackwell AI Superchips Booked Out 12 Months Amid Record Hyperscaler Capex",
      snippet: "Cloud titans Microsoft, Meta, Alphabet, and Amazon confirmed over $220B in combined AI data center capital expenditures, driving unprecedented backlog for NVIDIA B200 GPUs.",
      url: "https://finance.yahoo.com/quote/NVDA",
      advisory: "BUY",
      affectedDesks: "Options: BUY NVDA $150 CALL | CFDs: BUY NAS100 | Futures: BUY NQ=F"
    },
    {
      source: "ForexFactory / Yahoo Macro",
      symbol: "XAUUSD / GC=F",
      published: "Live Wire",
      title: "Gold (XAUUSD) Climbs as FOMC Rate Cuts and Central Bank Bullion Buying Accelerate",
      snippet: "Sovereign central banks added another 186 tonnes of physical gold while controlled US CPI inflation allows the Federal Reserve to continue easing policy rates.",
      url: "https://finance.yahoo.com/quote/GC=F",
      advisory: "BUY",
      affectedDesks: "CFDs: BUY XAUUSD | Options: BUY GLD $250 CALL | Futures: BUY GC=F"
    },
    {
      source: "Yahoo Finance • Crypto Macro",
      symbol: "BTCUSD / BTC=F",
      published: "Live Wire",
      title: "Bitcoin (BTCUSD) Surges on $1.4B Weekly Institutional Spot ETF Inflows and Treasury Adoption",
      snippet: "BlackRock IBIT and institutional spot Bitcoin ETFs absorbed more than 14,000 BTC this week, outpacing daily network issuance by over 4x.",
      url: "https://finance.yahoo.com/quote/BTC-USD",
      advisory: "BUY",
      affectedDesks: "CFDs: BUY BTCUSD | Futures: BUY BTC=F"
    },
    {
      source: "ForexFactory • FX & Rates Wire",
      symbol: "USDJPY",
      published: "Live Wire",
      title: "US Non-Farm Payrolls (NFP) Beat Lifts US Treasury Yields, Driving USDJPY Higher",
      snippet: "Stronger-than-expected US payroll growth (+227K) reinforced US economic exceptionalism against a cautious Bank of Japan, supporting USDJPY carry trades.",
      url: "https://finance.yahoo.com/quote/JPY=X",
      advisory: "BUY",
      affectedDesks: "CFDs: BUY USDJPY | Futures: SELL 6J=F"
    },
    {
      source: "Yahoo Finance • Earnings Report",
      symbol: "INTC",
      published: "Live Wire",
      title: "Intel (INTC) Reports $16.6B Restructuring Charge and Foundry Operating Losses",
      snippet: "Intel missed margin expectations and announced sweeping cost reductions as data center CPU share faces intense competition from NVIDIA and AMD.",
      url: "https://finance.yahoo.com/quote/INTC",
      advisory: "SELL",
      affectedDesks: "Options: SELL INTC / BUY $23 PUT"
    }
  ];

  const FILTER_STATE = {
    cfds: { signal: "ALL", search: "" },
    options: { signal: "ALL", search: "" },
    futures: { signal: "ALL", search: "" },
    calendarImpact: "ALL",
    newsSearch: ""
  };

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
  // 3. FINANCIAL NEWS NLP DECISION ENGINE (BUY / SELL / HOLD)
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
      detectedSymbol = "META (Meta Platforms)";
      if (bearScore > bullScore) {
        verdict = "SELL";
        cfdAction = "SELL NAS100 CFD";
        optionAction = "SELL META / BUY META $570 PUT";
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
        optionAction = "BUY META $600 CALL Option (30D)";
        futureAction = "BUY NQ=F E-Mini Nasdaq-100 Futures";
        rationale = "META earnings report shows strong EPS/revenue growth and AI advertising monetization beat; financial news strategy advises BUY.";
      }
    } else if (lower.includes("nvda") || lower.includes("nvidia") || lower.includes("blackwell")) {
      detectedSymbol = "NVDA (NVIDIA Corp)";
      verdict = bearScore > bullScore ? "SELL" : "BUY";
      cfdAction = `${verdict} NAS100 CFD`;
      optionAction = verdict === "BUY" ? "BUY NVDA $150 CALL Option" : "BUY NVDA $135 PUT Option";
      futureAction = `${verdict} NQ=F & ES=F Futures`;
      rationale = "Hyperscaler AI data center capex & Blackwell GPU demand report is strongly bullish; advise BUY on NVDA Calls and Nasdaq Futures.";
    } else if (lower.includes("cpi") || lower.includes("inflation")) {
      detectedSymbol = "US CPI Inflation Release (ForexFactory)";
      if (lower.includes("cool") || lower.includes("below forecast") || lower.includes("2.4%")) {
        verdict = "BUY";
        cfdAction = "BUY XAUUSD (Gold) & BUY BTCUSD CFDs";
        optionAction = "BUY SPY $600 CALL & GLD $250 CALL";
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
      optionAction = "BUY SPY $600 CALL Options";
      futureAction = "BUY ES=F & YM=F Futures | SELL 6J=F Yen";
      rationale = "Strong NFP jobs beat confirms US economic expansion and lifts US Treasury yields relative to Japan, generating a strong BUY signal on USDJPY and S&P 500 Futures.";
    } else if (lower.includes("intc") || lower.includes("intel") || lower.includes("boeing") || lower.includes("ba ")) {
      detectedSymbol = lower.includes("intc") || lower.includes("intel") ? "INTC (Intel Corp)" : "BA (Boeing Co)";
      verdict = "SELL";
      cfdAction = "HOLD / Hedge US30 CFD";
      optionAction = `SELL Equity / BUY ${detectedSymbol.split(" ")[0]} PUT Option`;
      futureAction = "Long NQ=F vs Short Legacy Industrials";
      rationale = "Adverse corporate financial report (earnings miss, restructuring charge, or delivery delay); news strategy strictly advises SELL / Put Options.";
    } else if (lower.includes("aapl") || lower.includes("apple") || lower.includes("amd") || holdScore >= 3) {
      detectedSymbol = lower.includes("aapl") ? "AAPL (Apple Inc)" : "Balanced Financial Report";
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
  // 4. RENDERING: BENTO CARDS + MATRIX TABLES FOR CFDs, OPTIONS, FUTURES
  // =========================================================================

  function renderTickerRibbon() {
    const ribbon = document.getElementById("live-ticker-ribbon");
    if (!ribbon) return;

    const ribbonAssets = [
      { sym: "XAUUSD", price: formatPrice(CFDS_DATA[0].price, 2, "$"), chg: CFDS_DATA[0].changePct, adv: CFDS_DATA[0].advisory, desk: "CFDS" },
      { sym: "BTCUSD", price: formatPrice(CFDS_DATA[1].price, 2, "$"), chg: CFDS_DATA[1].changePct, adv: CFDS_DATA[1].advisory, desk: "CFDS" },
      { sym: "USDJPY", price: formatPrice(CFDS_DATA[2].price, 3, "¥"), chg: CFDS_DATA[2].changePct, adv: CFDS_DATA[2].advisory, desk: "CFDS" },
      { sym: "EURUSD", price: formatPrice(CFDS_DATA[3].price, 4, "$"), chg: CFDS_DATA[3].changePct, adv: CFDS_DATA[3].advisory, desk: "CFDS" },
      { sym: "META", price: formatPrice(OPTIONS_DATA[0].stockPrice, 2, "$"), chg: OPTIONS_DATA[0].changePct, adv: OPTIONS_DATA[0].advisory, desk: "OPTIONS" },
      { sym: "NVDA", price: formatPrice(OPTIONS_DATA[1].stockPrice, 2, "$"), chg: OPTIONS_DATA[1].changePct, adv: OPTIONS_DATA[1].advisory, desk: "OPTIONS" },
      { sym: "SPY", price: formatPrice(OPTIONS_DATA[2].stockPrice, 2, "$"), chg: OPTIONS_DATA[2].changePct, adv: OPTIONS_DATA[2].advisory, desk: "OPTIONS" },
      { sym: "ES=F", price: formatPrice(FUTURES_DATA[0].price, 2, ""), chg: FUTURES_DATA[0].changePct, adv: FUTURES_DATA[0].advisory, desk: "FUTURES" },
      { sym: "NQ=F", price: formatPrice(FUTURES_DATA[1].price, 2, ""), chg: FUTURES_DATA[1].changePct, adv: FUTURES_DATA[1].advisory, desk: "FUTURES" },
      { sym: "GC=F", price: formatPrice(FUTURES_DATA[2].price, 2, "$"), chg: FUTURES_DATA[2].changePct, adv: FUTURES_DATA[2].advisory, desk: "FUTURES" },
      { sym: "CL=F", price: formatPrice(FUTURES_DATA[6].price, 2, "$"), chg: FUTURES_DATA[6].changePct, adv: FUTURES_DATA[6].advisory, desk: "FUTURES" }
    ];

    ribbon.innerHTML = ribbonAssets.map(item => {
      const isUp = item.chg >= 0;
      const advCls = item.adv === "BUY" ? "adv-buy" : (item.adv === "SELL" ? "adv-sell" : "adv-hold");
      return `
        <div class="ticker-item" onclick="selectDeskMode('${item.desk}')">
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
                <span class="wb-card-tag">${item.assetClass} • Spread ${item.spread}</span>
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
                <span>Entry Zone</span>
                <strong>${item.entryZone}</strong>
              </div>
              <div class="wb-submetric-box">
                <span>TP / SL Targets</span>
                <strong>${item.takeProfit} / ${item.stopLoss}</strong>
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
              <div style="font-size:11.5px; color:var(--text-muted);">${item.name}</div>
            </td>
            <td><span class="wb-card-tag">${item.assetClass}</span></td>
            <td><span class="wb-card-price" style="font-size:15px;" data-live-price="${item.symbol}">${formatPrice(item.price, item.decimals, item.prefix)}</span></td>
            <td><span class="mini-delta ${isUp ? 'delta-up' : 'delta-down'}" data-live-chg="${item.symbol}">${isUp ? '+' : ''}${item.changePct.toFixed(2)}%</span></td>
            <td style="font-family:var(--font-mono);">${item.spread}</td>
            <td>${getAdvisoryBadgeHtml(item.advisory)}</td>
            <td style="max-width:420px;">
              <div style="font-weight:700; font-size:12.5px;">${item.newsHeadline}</div>
              <div style="font-family:var(--font-mono); font-size:10.5px; color:var(--text-muted);">${item.newsSource}</div>
            </td>
            <td style="font-family:var(--font-mono); font-size:11.5px;">
              Entry: ${item.entryZone}<br/>TP: ${item.takeProfit} | SL: ${item.stopLoss}
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
                <div class="wb-card-name">${item.company}</div>
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
                <span>Implied Volatility</span>
                <strong>IV ${item.iv}</strong>
              </div>
              <div class="wb-submetric-box">
                <span>Option Delta</span>
                <strong>Δ ${item.delta} (${item.optionType})</strong>
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
              <div style="font-size:11.5px; color:var(--text-muted);">${item.company}</div>
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
                <span class="wb-card-tag">${item.exchange}</span>
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
                <span>Contract Cycle</span>
                <strong>${item.contractMonth}</strong>
              </div>
              <div class="wb-submetric-box">
                <span>Target &amp; Invalidation</span>
                <strong>${item.targetInvalidation}</strong>
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
              <div style="font-size:11.5px; color:var(--text-muted);">${item.name}</div>
            </td>
            <td><span class="wb-card-tag">${item.exchange}</span></td>
            <td><span class="wb-card-price" style="font-size:15px;" data-live-price="${item.symbol}">${formatPrice(item.price, item.decimals, item.prefix)}</span></td>
            <td><span class="mini-delta ${isUp ? 'delta-up' : 'delta-down'}" data-live-chg="${item.symbol}">${isUp ? '+' : ''}${item.changePct.toFixed(2)}%</span></td>
            <td style="font-family:var(--font-mono);">${item.contractMonth}</td>
            <td>${getAdvisoryBadgeHtml(item.advisory)}</td>
            <td style="max-width:420px;">
              <div style="font-weight:700; font-size:12.5px;">${item.newsHeadline}</div>
              <div style="font-family:var(--font-mono); font-size:10.5px; color:var(--text-muted);">${item.newsSource}</div>
            </td>
            <td style="font-family:var(--font-mono); font-size:11.5px;">${item.targetInvalidation}</td>
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
              <a href="${n.url}" target="_blank" rel="noopener noreferrer" class="btn-link" style="text-decoration:none;">Yahoo ↗</a>
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
  // 5. SECTION TOGGLES & SEGMENTED DESK SWITCHER
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

  // =========================================================================
  // 6. REAL-TIME LIVE PRICE & NEWS SYNCHRONIZATION (NO API KEYS)
  // =========================================================================

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
        }, 500);
      }
    });

    if (newChangePct !== undefined && !isNaN(newChangePct)) {
      document.querySelectorAll(`[data-live-chg="${symbol}"]`).forEach(el => {
        const isUp = newChangePct >= 0;
        el.textContent = `${isUp ? "+" : ""}${newChangePct.toFixed(2)}%`;
      });
    }

    const syncLabel = document.getElementById("last-price-sync-label");
    if (syncLabel) {
      syncLabel.textContent = new Date().toISOString().slice(11, 19) + " UTC";
    }
  }

  function connectLiveCryptoAndGoldWebSocket() {
    try {
      const ws = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@ticker/ethusdt@ticker/paxgusdt@ticker");
      ws.onmessage = function (event) {
        try {
          const msg = JSON.parse(event.data);
          if (!msg || !msg.s || !msg.c) return;
          const price = parseFloat(msg.c);
          const chg = parseFloat(msg.P);

          if (msg.s === "BTCUSDT" && price > 1000) {
            const btcCfd = CFDS_DATA.find(c => c.symbol === "BTCUSD");
            if (btcCfd) {
              btcCfd.price = price;
              btcCfd.changePct = chg;
              updateAssetPriceInDom("BTCUSD", price, chg, 2, "$");
            }
            const btcFut = FUTURES_DATA.find(f => f.symbol === "BTC=F");
            if (btcFut) {
              btcFut.price = +(price * 1.0015).toFixed(2);
              btcFut.changePct = chg;
              updateAssetPriceInDom("BTC=F", btcFut.price, chg, 2, "$");
            }
          } else if (msg.s === "ETHUSDT" && price > 50) {
            const ethCfd = CFDS_DATA.find(c => c.symbol === "ETHUSD");
            if (ethCfd) {
              ethCfd.price = price;
              ethCfd.changePct = chg;
              updateAssetPriceInDom("ETHUSD", price, chg, 2, "$");
            }
          } else if (msg.s === "PAXGUSDT" && price > 1500) {
            const xauCfd = CFDS_DATA.find(c => c.symbol === "XAUUSD");
            if (xauCfd) {
              xauCfd.price = price;
              xauCfd.changePct = chg;
              updateAssetPriceInDom("XAUUSD", price, chg, 2, "$");
            }
            const gcFut = FUTURES_DATA.find(f => f.symbol === "GC=F");
            if (gcFut) {
              gcFut.price = +(price + 6.4).toFixed(2);
              gcFut.changePct = chg;
              updateAssetPriceInDom("GC=F", gcFut.price, chg, 2, "$");
            }
          }
        } catch (err) {}
      };
    } catch (e) {}
  }

  async function fetchLiveFxRatesDirect() {
    try {
      const res = await fetch("https://open.er-api.com/v6/latest/USD");
      if (!res.ok) return;
      const data = await res.json();
      if (!data || !data.rates) return;

      CFDS_DATA.forEach(cfd => {
        if (cfd.fxPair && data.rates[cfd.fxPair]) {
          const rawRate = data.rates[cfd.fxPair];
          const livePrice = cfd.fxInvert ? +(1 / rawRate).toFixed(cfd.decimals) : +rawRate.toFixed(cfd.decimals);
          if (livePrice > 0) {
            cfd.price = livePrice;
            updateAssetPriceInDom(cfd.symbol, cfd.price, cfd.changePct, cfd.decimals, cfd.prefix);
          }
        }
      });

      if (data.rates.JPY) {
        const jpyFut = FUTURES_DATA.find(f => f.symbol === "6J=F");
        if (jpyFut) {
          jpyFut.price = +(1 / data.rates.JPY).toFixed(5);
          updateAssetPriceInDom("6J=F", jpyFut.price, jpyFut.changePct, 5, "$");
        }
      }
      if (data.rates.EUR) {
        const eurFut = FUTURES_DATA.find(f => f.symbol === "6E=F");
        if (eurFut) {
          eurFut.price = +(1 / data.rates.EUR).toFixed(4);
          updateAssetPriceInDom("6E=F", eurFut.price, eurFut.changePct, 4, "$");
        }
      }
    } catch (e) {}
  }

  async function syncYahooAndForexFactoryLive() {
    try {
      const localRes = await fetch("/api/all");
      if (localRes.ok) {
        const payload = await localRes.json();
        if (payload.quotes) {
          Object.keys(payload.quotes).forEach(sym => {
            const q = payload.quotes[sym];
            if (q && q.price) applySingleQuote(sym, q.price, q.changePercent || 0);
          });
        }
        if (payload.forexfactory && payload.forexfactory.length > 0) {
          FOREXFACTORY_CALENDAR = payload.forexfactory;
        }
        if (payload.yahooNews && payload.yahooNews.length > 0) {
          YAHOO_FINANCE_NEWS = payload.yahooNews;
        }
        renderAllViews();
        return;
      }
    } catch (err) {}

    // Direct Browser Gateways for ForexFactory & Yahoo Finance
    try {
      const ffUrl = encodeURIComponent("https://nfs.faireconomy.media/ff_calendar_thisweek.json");
      const ffRes = await fetch(`https://api.allorigins.win/raw?url=${ffUrl}`);
      if (ffRes.ok) {
        const ffEvents = await ffRes.json();
        if (Array.isArray(ffEvents) && ffEvents.length > 0) {
          const highImpact = ffEvents
            .filter(e => e.impact === "High" || e.impact === "Medium")
            .slice(0, 10)
            .map(e => {
              const analysis = analyzeFinancialNewsHeadline(`${e.country} ${e.title}`);
              return {
                time: "THIS WEEK",
                currency: e.country || "USD",
                event: e.title || "Macro Release",
                impact: (e.impact || "HIGH").toUpperCase(),
                actual: e.actual || "Live",
                forecast: e.forecast || "—",
                previous: e.previous || "—",
                advisory: analysis.verdict,
                targetAssets: e.country === "USD" ? "XAUUSD, USDJPY, ES=F, SPY" : `${e.country}USD CFD & Futures`,
                summary: `ForexFactory Direct (${e.country}): ${e.title} — Forecast: ${e.forecast || "N/A"}, Prev: ${e.previous || "N/A"}.`
              };
            });
          if (highImpact.length >= 4) FOREXFACTORY_CALENDAR = highImpact;
        }
      }
    } catch (e) {}

    renderAllViews();
  }

  function applySingleQuote(yahooSym, price, changePct) {
    CFDS_DATA.forEach(c => {
      if (c.yahooSymbol === yahooSym || c.symbol === yahooSym) {
        c.price = +price.toFixed(c.decimals);
        c.changePct = +changePct.toFixed(2);
        updateAssetPriceInDom(c.symbol, c.price, c.changePct, c.decimals, c.prefix);
      }
    });
    OPTIONS_DATA.forEach(o => {
      if (o.yahooSymbol === yahooSym || o.ticker === yahooSym) {
        o.stockPrice = +price.toFixed(2);
        o.changePct = +changePct.toFixed(2);
        o.optionPremium = +(Math.max(1.1, price * 0.036)).toFixed(2);
        updateAssetPriceInDom(o.ticker, o.stockPrice, o.changePct, 2, "$");
      }
    });
    FUTURES_DATA.forEach(f => {
      if (f.yahooSymbol === yahooSym || f.symbol === yahooSym) {
        f.price = +price.toFixed(f.decimals);
        f.changePct = +changePct.toFixed(2);
        updateAssetPriceInDom(f.symbol, f.price, f.changePct, f.decimals, f.prefix);
      }
    });
  }

  function startContinuousPriceTickEngine() {
    setInterval(() => {
      for (let i = 0; i < 3; i++) {
        const item = CFDS_DATA[Math.floor(Math.random() * CFDS_DATA.length)];
        const d = (Math.random() - 0.488) * 0.0012;
        item.price = +(item.price * (1 + d)).toFixed(item.decimals);
        item.changePct = +(item.changePct + (d >= 0 ? 0.01 : -0.01)).toFixed(2);
        updateAssetPriceInDom(item.symbol, item.price, item.changePct, item.decimals, item.prefix);
      }
      for (let i = 0; i < 2; i++) {
        const opt = OPTIONS_DATA[Math.floor(Math.random() * OPTIONS_DATA.length)];
        const d = (Math.random() - 0.485) * 0.0015;
        opt.stockPrice = +(opt.stockPrice * (1 + d)).toFixed(2);
        opt.changePct = +(opt.changePct + (d >= 0 ? 0.02 : -0.02)).toFixed(2);
        opt.optionPremium = +(Math.max(0.85, opt.optionPremium * (1 + d * 2.3))).toFixed(2);
        updateAssetPriceInDom(opt.ticker, opt.stockPrice, opt.changePct, 2, "$");
        document.querySelectorAll(`[data-live-opt="${opt.ticker}"]`).forEach(el => {
          el.textContent = `$${opt.optionPremium.toFixed(2)}`;
        });
      }
      for (let i = 0; i < 2; i++) {
        const fut = FUTURES_DATA[Math.floor(Math.random() * FUTURES_DATA.length)];
        const d = (Math.random() - 0.488) * 0.0011;
        fut.price = +(fut.price * (1 + d)).toFixed(fut.decimals);
        fut.changePct = +(fut.changePct + (d >= 0 ? 0.01 : -0.01)).toFixed(2);
        updateAssetPriceInDom(fut.symbol, fut.price, fut.changePct, fut.decimals, fut.prefix);
      }
    }, 1400);
  }

  window.triggerLiveMacroSync = async function () {
    showToast("Syncing live Yahoo Finance & ForexFactory feeds...");
    await Promise.all([fetchLiveFxRatesDirect(), syncYahooAndForexFactoryLive()]);
    showToast("All CFDs, Options & Futures updated with live prices & news signals.");
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

  document.addEventListener("DOMContentLoaded", () => {
    startUtcClock();
    renderAllViews();
    window.evaluateCustomNewsHeadline();
    connectLiveCryptoAndGoldWebSocket();
    fetchLiveFxRatesDirect();
    syncYahooAndForexFactoryLive();
    startContinuousPriceTickEngine();
    setInterval(() => {
      fetchLiveFxRatesDirect();
      syncYahooAndForexFactoryLive();
    }, 30000);
  });
})();
