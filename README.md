# NEXUS LED // 5-Crypto Live TradingView Terminal (`BTC` • `ETH` • `SOL` • `HYPE` • `XRP`)

> **Pitch-Black Cyber LED Interface // 3.0-Second Synchronized LED Glow & Audio Beep // Direct Live TradingView Prices for BTC, ETH, SOL, HYPE & XRP // Live Crypto News Wire // Top 5 Highest Rising Cryptos (Week, Month & Year)**

---

## ⚡ Core Architecture & Features

### 1. Dedicated Sections for the 5 Core Cryptocurrencies (`BTC`, `ETH`, `SOL`, `HYPE`, `XRP`)
- **Section 01 — Bitcoin (`BTC`)**: Live price & multi-timeframe metrics directly from `BINANCE:BTCUSDT` / `BITSTAMP:BTCUSD` on TradingView + embedded interactive TradingView chart.
- **Section 02 — Ethereum (`ETH`)**: Live price & multi-timeframe metrics directly from `BINANCE:ETHUSDT` on TradingView + embedded interactive TradingView chart.
- **Section 03 — Solana (`SOL`)**: Live price & multi-timeframe metrics directly from `BINANCE:SOLUSDT` on TradingView + embedded interactive TradingView chart.
- **Section 04 — Hyperliquid (`HYPE`)**: Live price & multi-timeframe metrics directly from `BYBIT:HYPEUSDT` / `OKX:HYPEUSDT` on TradingView + embedded interactive TradingView chart.
- **Section 05 — Ripple (`XRP`)**: Live price & multi-timeframe metrics directly from `BINANCE:XRPUSDT` on TradingView + embedded interactive TradingView chart.

### 2. Pitch-Black Interface with 3-Second Glowing & Beeping LED Outline
- Built on a pitch-black (`#000000`) chassis wrapped in a full perimeter **LED Outline Frame** with 4 corner LED nodes and 48 top/bottom LED diodes.
- **Every 3.0 seconds**, the LED perimeter and all section borders burst with a synchronized neon glow (`led-pulse-active`) accompanied by a crisp **Web Audio API synthesizer beep** (with a one-click Mute/Unmute toggle and 4 selectable LED colors: *Cyber Cyan*, *Matrix Emerald*, *Neon Magenta*, and *Solar Amber*).

### 3. Live Crypto News Sidebar
- Located on the right side of the terminal (`#live-crypto-news-sidebar`), pulling real-time crypto headlines directly from public crypto news feeds (**CryptoCompare News API**, **CoinDesk**, **CoinTelegraph**, **Decrypt**).
- Includes instant one-click filter pills for `ALL`, `BTC`, `ETH`, `SOL`, `HYPE`, `XRP`, and `RISERS`, plus a live keyword search bar.

### 4. Top 5 Highest Rising Cryptocurrencies of the Week, Month & Year
- Dedicated 3-column leaderboard (`#top-risers-section`) displaying:
  - **🔥 Top 5 Rising — This Week (7D)** (`Perf.W`)
  - **⚡ Top 5 Rising — This Month (30D)** (`Perf.1M`)
  - **👑 Top 5 Rising — This Year (365D / 1Y)** (`Perf.Y`)
- Dynamically sorted from live TradingView Crypto Scanner performance metrics and paired with the latest crypto news catalyst driving each coin's rally.

---

## 🚀 How to Run

1. **Direct Browser Mode**: Open [`index.html`](file:///c:/Users/kb90G/OneDrive/quanto2/index.html) directly in any modern browser.
2. **Local Python Server Mode**:
   ```powershell
   python server.py
   ```
   Then visit `http://localhost:8080`.
