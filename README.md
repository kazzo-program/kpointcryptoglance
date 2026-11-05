# KPOINT COF // White & Grey Macro News Trading Terminal (CFDs, Options & Futures)

> **Crisp White & Grey Institutional Interface // 100% Financial News-Driven `BUY / SELL / HOLD` Advisories // Live Direct Feeds from Yahoo Finance & ForexFactory (Zero API Keys Required)**

---

## ⚡ Core Architecture & Features

### 1. Crisp White & Grey Institutional Interface
- Clean architectural **White & Cool Grey** aesthetic (`#ffffff`, `#f1f4f8`, `#e9eef4`, `#cbd5e1`, `#0f172a`) with high-contrast semantic **BUY** (`#047857`), **SELL** (`#b91c1c`), and **HOLD** (`#b45309`) advisory badges.
- Includes a one-click **Slate / White Contrast Toggle** in the top header.

### 2. Macro Trading News Strategy (Zero API Keys Required)
- Pulls live macroeconomic data (**US CPI**, **Core CPI**, **Non-Farm Payrolls NFP**, **FOMC Rate Decisions**, **GDP**, **Core PCE**, **PMI**, **EIA Crude Inventories**) and corporate earnings reports (**META**, **NVDA**, **MSFT**, **AMZN**, **TSLA**, **AAPL**, **INTC**, **BA**) directly from **ForexFactory** (`nfs.faireconomy.media/ff_calendar_thisweek.json`) and **Yahoo Finance** (`query1.finance.yahoo.com/v8/finance/chart` & RSS headlines) with **no API keys required**.
- Every recommendation (`BUY`, `SELL`, or `HOLD`) is generated **solely from financial news reports** (for example: *META quarterly earnings beat & AI ad revenue surge -> BUY META Call Options & NAS100 CFD*; *Strong NFP jobs report -> BUY USDJPY & ES=F*; *Intel restructuring & margin miss report -> SELL / Buy PUT*).
- Includes an interactive **Instant News Report → BUY / SELL / HOLD Advisory Simulator** where you can test any custom headline or click any live report from Yahoo Finance or ForexFactory.

### 3. Separate Dedicated Desks for CFDs, Options & Futures
- **💱 CFDs Desk (14 Instruments)**: `XAUUSD` (Gold Spot CFD), `BTCUSD` (Bitcoin Spot CFD), `USDJPY` (FX CFD), `EURUSD`, `GBPUSD`, `NAS100`, `US500`, `US30`, `WTIUSD`, `XAGUSD`, `ETHUSD`, `AUDUSD`, `USDCAD`, `GER40`.
- **🎯 Options Desk (14 Contracts)**: `META`, `NVDA`, `SPY`, `QQQ`, `MSFT`, `AMZN`, `TSLA`, `NFLX`, `GLD`, `AAPL`, `AMD`, `TLT`, `INTC`, `BA` — complete with Recommended Strike/Expiry, Call/Put type, Live Option Premium, Implied Volatility (IV%), Delta, and the exact Earnings/Macro News report driving the `BUY`, `SELL`, or `HOLD` call.
- **📈 Futures Desk (14 Exchange Contracts)**: `ES=F` (E-Mini S&P 500), `NQ=F` (E-Mini Nasdaq-100), `GC=F` (COMEX Gold), `YM=F` (E-Mini Dow), `RTY=F` (E-Mini Russell 2000), `SI=F` (Silver), `CL=F` (WTI Crude Oil), `NG=F` (Natural Gas), `ZN=F` (10Y Treasury Note), `ZB=F` (30Y Treasury Bond), `6J=F` (Japanese Yen), `6E=F` (Euro FX), `BTC=F` (CME Bitcoin), `HG=F` (Copper).

### 4. Continuous Live Updating Prices (Never Out of Date)
- **Direct Exchange WebSocket (`wss://stream.binance.com:9443`)**: Real-time tick streaming for `BTCUSD`, `ETHUSD`, `BTC=F`, and `XAUUSD`/`GC=F` (via `PAXGUSDT` 1:1 physical London Gold spot anchor).
- **Direct Interbank FX API (`open.er-api.com`)**: Live spot exchange rates for `USDJPY`, `EURUSD`, `GBPUSD`, `AUDUSD`, `USDCAD`, `6J=F`, and `6E=F`.
- **Direct Yahoo Finance v8 & Multi-Gateway Sync + Sub-Second Orderbook Tick Engine**: Keeps bid/ask spreads, option premiums, and futures prices updating continuously in real time with green/red flash animations.

---

## 🚀 How to Run

1. **Standalone Browser Mode**: Open [`index.html`](file:///c:/Users/kb90G/OneDrive/quanto2/index.html) directly in any browser or via GitHub Pages.
2. **Local Python Proxy Server**:
   ```powershell
   python server.py
   ```
   Then open `http://localhost:8080`.
