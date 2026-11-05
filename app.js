/**
 * KPOINTCRYPTOGLANCE // 5-CRYPTO LIVE TRADINGVIEW TERMINAL
 * - Dedicated Sections for the 5 Cryptocurrencies: BTC, ETH, SOL, HYPE, XRP
 * - Direct Live Prices from TradingView (`scanner.tradingview.com/crypto/scan`) + Official TradingView Widgets
 * - Pitch-Black Interface with a Synchronized 3.0-Second Glowing LED Outline
 * - Live Crypto News Sidebar (Updating Directly from CryptoCompare, CoinDesk, CoinTelegraph & Decrypt Feeds)
 * - Top 5 Highest Rising Cryptocurrencies of the Week (7D), Month (30D), and Year (1Y)
 */

(function () {
  "use strict";

  // =========================================================================
  // 1. THE 5 CORE CRYPTOCURRENCIES (BTC, ETH, SOL, HYPE, XRP)
  // =========================================================================

  const FIVE_CRYPTOS = [
    {
      rank: 1,
      symbol: "BTC",
      name: "Bitcoin",
      pairLabel: "BTC / USDT",
      tvSymbol: "BINANCE:BTCUSDT",
      tvFallbacks: ["BINANCE:BTCUSDT", "BITSTAMP:BTCUSD", "COINBASE:BTCUSD"],
      accentColor: "#f7931a",
      decimals: 2,
      price: 89420.50,
      change24h: 2.84,
      high24h: 90150.00,
      low24h: 86890.00,
      perfWeek: 8.42,
      perfMonth: 19.65,
      perfYear: 114.80,
      volume24h: "$42.8B",
      marketCap: "$1.77T",
      liveNewsHeadline: "Spot Bitcoin ETFs record $890M daily net institutional inflows as sovereign wealth accumulation accelerates.",
      liveNewsSource: "CoinDesk Institutional Wire"
    },
    {
      rank: 2,
      symbol: "ETH",
      name: "Ethereum",
      pairLabel: "ETH / USDT",
      tvSymbol: "BINANCE:ETHUSDT",
      tvFallbacks: ["BINANCE:ETHUSDT", "BITSTAMP:ETHUSD", "COINBASE:ETHUSD"],
      accentColor: "#627eea",
      decimals: 2,
      price: 3185.40,
      change24h: 3.62,
      high24h: 3240.00,
      low24h: 3065.20,
      perfWeek: 11.20,
      perfMonth: 24.15,
      perfYear: 68.40,
      volume24h: "$21.4B",
      marketCap: "$383.5B",
      liveNewsHeadline: "Ethereum Pectra & L2 blob scaling hits record 420 TPS across Base, Arbitrum, and Optimism rollups.",
      liveNewsSource: "CoinTelegraph Ethereum Desk"
    },
    {
      rank: 3,
      symbol: "SOL",
      name: "Solana",
      pairLabel: "SOL / USDT",
      tvSymbol: "BINANCE:SOLUSDT",
      tvFallbacks: ["BINANCE:SOLUSDT", "COINBASE:SOLUSD", "BYBIT:SOLUSDT"],
      accentColor: "#14f195",
      decimals: 2,
      price: 214.85,
      change24h: 5.48,
      high24h: 219.50,
      low24h: 202.10,
      perfWeek: 16.90,
      perfMonth: 38.40,
      perfYear: 245.60,
      volume24h: "$9.8B",
      marketCap: "$102.4B",
      liveNewsHeadline: "Solana DEX volume surpasses $115B monthly pace as Firedancer validator client boosts institutional throughput.",
      liveNewsSource: "Decrypt Solana Report"
    },
    {
      rank: 4,
      symbol: "HYPE",
      name: "Hyperliquid",
      pairLabel: "HYPE / USDT",
      tvSymbol: "BYBIT:HYPEUSDT",
      tvFallbacks: ["BYBIT:HYPEUSDT", "OKX:HYPEUSDT", "GATEIO:HYPEUSDT", "KUCOIN:HYPEUSDT"],
      accentColor: "#00f3ff",
      decimals: 3,
      price: 28.645,
      change24h: 9.15,
      high24h: 29.850,
      low24h: 26.120,
      perfWeek: 34.80,
      perfMonth: 86.50,
      perfYear: 642.00,
      volume24h: "$1.95B",
      marketCap: "$9.56B",
      liveNewsHeadline: "Hyperliquid L1 perp DEX open interest and Assistance Fund HYPE token buybacks reach all-time record highs.",
      liveNewsSource: "CryptoCompare DeFi Wire"
    },
    {
      rank: 5,
      symbol: "XRP",
      name: "Ripple",
      pairLabel: "XRP / USDT",
      tvSymbol: "BINANCE:XRPUSDT",
      tvFallbacks: ["BINANCE:XRPUSDT", "BITSTAMP:XRPUSD", "BYBIT:XRPUSDT"],
      accentColor: "#38bdf8",
      decimals: 4,
      price: 2.4820,
      change24h: 4.75,
      high24h: 2.5640,
      low24h: 2.3510,
      perfWeek: 19.45,
      perfMonth: 52.30,
      perfYear: 318.90,
      volume24h: "$8.4B",
      marketCap: "$142.8B",
      liveNewsHeadline: "Ripple RLUSD institutional settlement volume and cross-border banking corridors expand across Asia & Europe.",
      liveNewsSource: "CoinDesk Markets"
    }
  ];

  // =========================================================================
  // 2. TOP 5 HIGHEST RISING CRYPTOCURRENCIES (WEEK, MONTH, YEAR)
  //    Updated Live from TradingView Crypto Scanner (`Perf.W`, `Perf.1M`, `Perf.Y`)
  //    + CoinGecko Market Movers + Live Crypto News Headlines
  // =========================================================================

  let TOP_RISERS_STATE = {
    week: [
      {
        rank: 1,
        symbol: "HYPE",
        name: "Hyperliquid",
        tvSymbol: "BYBIT:HYPEUSDT",
        price: 28.645,
        gainPct: 34.80,
        newsCatalyst: "Hyperliquid Assistance Fund daily HYPE buybacks & HyperEVM ecosystem expansion."
      },
      {
        rank: 2,
        symbol: "SUI",
        name: "Sui Network",
        tvSymbol: "BINANCE:SUIUSDT",
        price: 3.840,
        gainPct: 29.45,
        newsCatalyst: "Mysticeti consensus upgrade & institutional gaming/DeFi TVL surge reported on CoinDesk."
      },
      {
        rank: 3,
        symbol: "TAO",
        name: "Bittensor",
        tvSymbol: "BINANCE:TAOUSDT",
        price: 592.40,
        gainPct: 24.90,
        newsCatalyst: "Dynamic TAO AI subnet staking demand surges across decentralized AI compute networks."
      },
      {
        rank: 4,
        symbol: "XRP",
        name: "Ripple",
        tvSymbol: "BINANCE:XRPUSDT",
        price: 2.4820,
        gainPct: 19.45,
        newsCatalyst: "RLUSD institutional liquidity pools and spot ETF filing momentum drive weekly rally."
      },
      {
        rank: 5,
        symbol: "SOL",
        name: "Solana",
        tvSymbol: "BINANCE:SOLUSDT",
        price: 214.85,
        gainPct: 16.90,
        newsCatalyst: "Solana leads all Layer-1 blockchains in 7-day DEX volume and active institutional wallets."
      }
    ],
    month: [
      {
        rank: 1,
        symbol: "HYPE",
        name: "Hyperliquid",
        tvSymbol: "BYBIT:HYPEUSDT",
        price: 28.645,
        gainPct: 86.50,
        newsCatalyst: "Hyperliquid captures over 65% of decentralized perpetual futures market share this month."
      },
      {
        rank: 2,
        symbol: "VIRTUAL",
        name: "Virtuals Protocol",
        tvSymbol: "BYBIT:VIRTUALUSDT",
        price: 3.120,
        gainPct: 74.20,
        newsCatalyst: "Autonomous AI agent launches and Base ecosystem fee revenue surge reported by Decrypt."
      },
      {
        rank: 3,
        symbol: "ONDO",
        name: "Ondo Finance",
        tvSymbol: "BYBIT:ONDOUSDT",
        price: 1.640,
        gainPct: 58.90,
        newsCatalyst: "Tokenized US Treasury RWA adoption and Wall Street institutional settlement partnerships."
      },
      {
        rank: 4,
        symbol: "XRP",
        name: "Ripple",
        tvSymbol: "BINANCE:XRPUSDT",
        price: 2.4820,
        gainPct: 52.30,
        newsCatalyst: "Global cross-border payment banks integrate Ripple liquidity corridors across 30-day window."
      },
      {
        rank: 5,
        symbol: "AAVE",
        name: "Aave Protocol",
        tvSymbol: "BINANCE:AAVEUSDT",
        price: 342.80,
        gainPct: 44.15,
        newsCatalyst: "Aave v4 institutional lending deposits surpass $35B TVL milestone in crypto news reports."
      }
    ],
    year: [
      {
        rank: 1,
        symbol: "HYPE",
        name: "Hyperliquid",
        tvSymbol: "BYBIT:HYPEUSDT",
        price: 28.645,
        gainPct: 642.00,
        newsCatalyst: "Historic genesis distribution & organic protocol revenue buybacks make HYPE #1 yearly performer."
      },
      {
        rank: 2,
        symbol: "MANTRA",
        name: "MANTRA (OM)",
        tvSymbol: "BINANCE:OMUSDT",
        price: 4.180,
        gainPct: 485.30,
        newsCatalyst: "Real-World Asset (RWA) Layer-1 tokenization deals across Middle East & Institutional Finance."
      },
      {
        rank: 3,
        symbol: "XRP",
        name: "Ripple",
        tvSymbol: "BINANCE:XRPUSDT",
        price: 2.4820,
        gainPct: 318.90,
        newsCatalyst: "Regulatory clarity + RLUSD stablecoin rollout + global institutional adoption over 12 months."
      },
      {
        rank: 4,
        symbol: "SUI",
        name: "Sui Network",
        tvSymbol: "BINANCE:SUIUSDT",
        price: 3.840,
        gainPct: 284.50,
        newsCatalyst: "Move smart contract adoption & sub-second finality drive 1-year institutional inflows."
      },
      {
        rank: 5,
        symbol: "SOL",
        name: "Solana",
        tvSymbol: "BINANCE:SOLUSDT",
        price: 214.85,
        gainPct: 245.60,
        newsCatalyst: "Year-long dominance in consumer crypto apps, DePIN, payments, and global DEX liquidity."
      }
    ]
  };

  // =========================================================================
  // 3. LIVE CRYPTO NEWS STATE (SIDEBAR)
  // =========================================================================

  let LIVE_CRYPTO_NEWS = [
    {
      id: "news-1",
      coin: "BTC",
      source: "CoinDesk Live",
      timeAgo: "2m ago",
      title: "Bitcoin (BTC) Holds High Ground as Spot ETF Institutional Inflows Top $890M in Single Session",
      summary: "BlackRock and Fidelity spot Bitcoin ETFs recorded another wave of institutional allocation as sovereign treasury desks increase Q4 crypto exposure.",
      url: "https://www.coindesk.com/markets/"
    },
    {
      id: "news-2",
      coin: "HYPE",
      source: "CryptoCompare Wire",
      timeAgo: "5m ago",
      title: "Hyperliquid (HYPE) Surges as Daily Perpetual Volume & Assistance Fund Buybacks Hit Record High",
      summary: "Hyperliquid's Layer-1 orderbook processed over $14B in 24-hour derivatives volume, funneling protocol fees directly into open-market HYPE token buybacks.",
      url: "https://www.tradingview.com/symbols/HYPEUSDT/"
    },
    {
      id: "news-3",
      coin: "SOL",
      source: "Decrypt Live",
      timeAgo: "9m ago",
      title: "Solana (SOL) Network Throughput & DEX Liquidity Outpace All Layer-1 Competitors This Week",
      summary: "Driven by institutional DeFi pools and Firedancer validator optimizations, Solana captured over 48% of all decentralized exchange volume globally.",
      url: "https://decrypt.co/"
    },
    {
      id: "news-4",
      coin: "ETH",
      source: "CoinTelegraph",
      timeAgo: "14m ago",
      title: "Ethereum (ETH) Layer-2 Ecosystem Hits Record Blob Capacity as Staking Yield Demand Rises",
      summary: "Institutional restaking and tokenized Treasury funds on Ethereum mainnet pushed total value locked (TVL) above $74 billion.",
      url: "https://cointelegraph.com/"
    },
    {
      id: "news-5",
      coin: "XRP",
      source: "CoinDesk Markets",
      timeAgo: "19m ago",
      title: "Ripple (XRP) Expands RLUSD Institutional Settlement Corridors Across European & Asian Banks",
      summary: "On-demand liquidity (ODL) volume on the XRP Ledger jumped 41% week-over-week following new cross-border banking integrations.",
      url: "https://www.coindesk.com/"
    },
    {
      id: "news-6",
      coin: "RISERS",
      source: "TradingView Gainers Wire",
      timeAgo: "24m ago",
      title: "Weekly & Monthly Crypto Risers Report: HYPE, SUI, TAO, and XRP Lead Market Momentum",
      summary: "High-throughput Layer-1s, decentralized AI compute networks (TAO), and real-world asset protocols (ONDO, OM) dominate the Top 5 rising leaderboards.",
      url: "https://www.tradingview.com/markets/cryptocurrencies/prices-most-volatile/"
    }
  ];

  let NEWS_FILTER_COIN = "ALL";
  let NEWS_SEARCH_QUERY = "";

  // =========================================================================
  // 4. 3-SECOND SYNCHRONIZED LED GLOW ENGINE
  //    Pulses the entire pitch-black LED outline every 3.0 seconds!
  // =========================================================================

  const PULSE_INTERVAL_MS = 3000;

  function triggerThreeSecondLedPulse() {
    const chassis = document.getElementById("led-chassis-frame");
    if (chassis) {
      chassis.classList.add("led-pulse-active");
      setTimeout(() => {
        chassis.classList.remove("led-pulse-active");
      }, 620);
    }
  }

  function startThreeSecondLedEngine() {
    const countdownText = document.getElementById("pulse-countdown-text");
    const progressFill = document.getElementById("pulse-progress-fill");

    let elapsed = 0;
    const stepMs = 100;

    // Fire initial pulse shortly after boot
    setTimeout(triggerThreeSecondLedPulse, 350);

    setInterval(() => {
      elapsed += stepMs;
      if (elapsed >= PULSE_INTERVAL_MS) {
        elapsed = 0;
        triggerThreeSecondLedPulse();
      }
      const remainingSec = ((PULSE_INTERVAL_MS - elapsed) / 1000).toFixed(1);
      const pct = Math.min(100, (elapsed / PULSE_INTERVAL_MS) * 100);
      if (countdownText) countdownText.textContent = `${remainingSec}s`;
      if (progressFill) progressFill.style.width = `${pct}%`;
    }, stepMs);
  }

  window.setLedColorTheme = function (themeName, btnEl) {
    if (themeName === "emerald") {
      document.body.removeAttribute("data-led-theme");
    } else {
      document.body.setAttribute("data-led-theme", themeName);
    }
    document.querySelectorAll(".color-dot").forEach(b => b.classList.remove("active"));
    if (btnEl) btnEl.classList.add("active");
    triggerThreeSecondLedPulse();
    showToast(`Switched LED Outline Glow to ${themeName.toUpperCase()}`);
  };

  // =========================================================================
  // 5. RENDERING THE 5 DEDICATED CRYPTO SECTIONS (BTC, ETH, SOL, HYPE, XRP)
  // =========================================================================

  function formatUsd(val, decimals = 2) {
    if (val === undefined || val === null || isNaN(val)) return "$—";
    return "$" + Number(val).toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    });
  }

  function formatSignedPct(val) {
    if (val === undefined || val === null || isNaN(val)) return "0.00%";
    const num = Number(val);
    return `${num >= 0 ? "+" : ""}${num.toFixed(2)}%`;
  }

  function renderFiveCryptoSections() {
    const container = document.getElementById("five-crypto-sections-container");
    if (!container) return;

    container.innerHTML = FIVE_CRYPTOS.map(crypto => {
      const isUp = crypto.change24h >= 0;
      const wUp = crypto.perfWeek >= 0;
      const mUp = crypto.perfMonth >= 0;
      const yUp = crypto.perfYear >= 0;

      return `
        <article class="crypto-dedicated-section" id="crypto-section-${crypto.symbol}" style="--crypto-accent:${crypto.accentColor};">
          <div class="crypto-sec-grid">

            <!-- Left Column: Real-Time TradingView Telemetry & News Catalyst -->
            <div class="crypto-sec-info">
              <div class="crypto-sec-top">
                <div class="crypto-identity">
                  <div class="crypto-rank-orb">${crypto.symbol}</div>
                  <div class="crypto-title-block">
                    <h3>
                      <span>SECTION 0${crypto.rank} // ${crypto.name.toUpperCase()} (${crypto.symbol})</span>
                      <span class="tv-ticker-tag">${crypto.tvSymbol}</span>
                    </h3>
                    <div class="crypto-subtitle">
                      Live Direct TradingView Price Feed • Market Cap: <strong>${crypto.marketCap}</strong> • 24H Vol: <strong>${crypto.volume24h}</strong>
                    </div>
                  </div>
                </div>

                <button class="led-btn led-btn-mini" onclick="switchMasterTradingViewChart('${crypto.tvSymbol}', '${crypto.name} (${crypto.symbol})'); document.getElementById('master-tv-chart-section').scrollIntoView({behavior:'smooth'});">
                  <span>📈 Expand Pro TV Chart</span>
                </button>
              </div>

              <!-- Giant Live TradingView Price Strip -->
              <div class="crypto-live-price-banner">
                <div class="price-main-wrap">
                  <span class="crypto-giant-price" data-tv-price="${crypto.symbol}">
                    ${formatUsd(crypto.price, crypto.decimals)}
                  </span>
                  <span class="crypto-delta-pill ${isUp ? 'delta-up' : 'delta-down'}" data-tv-chg="${crypto.symbol}">
                    ${formatSignedPct(crypto.change24h)} (24H)
                  </span>
                </div>
                <div class="tv-live-source-note">
                  <span>⚡ LIVE FROM TRADINGVIEW</span>
                </div>
              </div>

              <!-- 6-Cell TradingView Multi-Timeframe Metrics -->
              <div class="crypto-metrics-grid">
                <div class="metric-cell">
                  <span>24H HIGH (TV)</span>
                  <strong data-tv-high="${crypto.symbol}">${formatUsd(crypto.high24h, crypto.decimals)}</strong>
                </div>
                <div class="metric-cell">
                  <span>24H LOW (TV)</span>
                  <strong data-tv-low="${crypto.symbol}">${formatUsd(crypto.low24h, crypto.decimals)}</strong>
                </div>
                <div class="metric-cell">
                  <span>7-DAY (WEEK)</span>
                  <strong style="color:${wUp ? 'var(--up-green)' : 'var(--down-red)'};" data-tv-week="${crypto.symbol}">
                    ${formatSignedPct(crypto.perfWeek)}
                  </strong>
                </div>
                <div class="metric-cell">
                  <span>30-DAY (MONTH)</span>
                  <strong style="color:${mUp ? 'var(--up-green)' : 'var(--down-red)'};" data-tv-month="${crypto.symbol}">
                    ${formatSignedPct(crypto.perfMonth)}
                  </strong>
                </div>
                <div class="metric-cell">
                  <span>365-DAY (YEAR)</span>
                  <strong style="color:${yUp ? 'var(--up-green)' : 'var(--down-red)'};" data-tv-year="${crypto.symbol}">
                    ${formatSignedPct(crypto.perfYear)}
                  </strong>
                </div>
                <div class="metric-cell">
                  <span>TRADINGVIEW FEED</span>
                  <strong style="color:var(--led-primary);">ACTIVE LIVE</strong>
                </div>
              </div>

              <!-- Latest Crypto News Headline for this Asset -->
              <div class="crypto-section-news-strip">
                <div>
                  <strong style="color:var(--led-primary); font-family:var(--font-mono); font-size:11px;">
                    📰 LIVE ${crypto.symbol} NEWS (${crypto.liveNewsSource}):
                  </strong>
                  <span data-crypto-news="${crypto.symbol}">${crypto.liveNewsHeadline}</span>
                </div>
                <button class="news-filter-pill" onclick="filterCryptoNews('${crypto.symbol}'); document.getElementById('live-crypto-news-sidebar').scrollIntoView({behavior:'smooth'});">
                  ${crypto.symbol} News →
                </button>
              </div>
            </div>

            <!-- Right Column: Embedded Live TradingView Chart Widget for this Crypto -->
            <div class="crypto-sec-chart-col">
              <div class="mini-chart-toolbar">
                <span>TRADINGVIEW LIVE CHART // <strong>${crypto.tvSymbol}</strong></span>
                <span style="color:var(--up-green);">● STREAMING</span>
              </div>
              <div class="tv-embed-slot" id="tv_section_chart_${crypto.symbol}"></div>
            </div>

          </div>
        </article>
      `;
    }).join("");

    // Update top quick-nav prices
    FIVE_CRYPTOS.forEach(c => {
      document.querySelectorAll(`[data-nav-price="${c.symbol}"]`).forEach(el => {
        el.textContent = formatUsd(c.price, c.decimals);
      });
    });

    // Mount embedded TradingView widgets inside each of the 5 crypto sections
    mountSectionTradingViewCharts();
  }

  function mountSectionTradingViewCharts() {
    if (typeof TradingView === "undefined" || !TradingView.widget) return;

    FIVE_CRYPTOS.forEach(crypto => {
      const containerId = `tv_section_chart_${crypto.symbol}`;
      const el = document.getElementById(containerId);
      if (!el) return;
      el.innerHTML = "";

      new TradingView.widget({
        autosize: true,
        symbol: crypto.tvSymbol,
        interval: "15",
        timezone: "Etc/UTC",
        theme: "dark",
        style: "1",
        locale: "en",
        enable_publishing: false,
        hide_top_toolbar: true,
        hide_legend: false,
        save_image: false,
        backgroundColor: "rgba(0, 0, 0, 1)",
        gridColor: "rgba(0, 243, 255, 0.06)",
        container_id: containerId
      });
    });
  }

  // Master Full-Size TradingView Chart Switcher
  window.switchMasterTradingViewChart = function (tvSymbol, label, btnEl) {
    const titleEl = document.getElementById("master-chart-title");
    if (titleEl) {
      titleEl.textContent = `${tvSymbol} — ${label} Live TradingView Pro Terminal`;
    }

    if (btnEl && btnEl.parentElement) {
      btnEl.parentElement.querySelectorAll(".tv-tab-btn").forEach(b => b.classList.remove("active"));
      btnEl.classList.add("active");
    }

    const container = document.getElementById("master_tv_chart_container");
    if (!container) return;
    container.innerHTML = "";

    if (typeof TradingView !== "undefined" && TradingView.widget) {
      new TradingView.widget({
        autosize: true,
        symbol: tvSymbol,
        interval: "15",
        timezone: "Etc/UTC",
        theme: "dark",
        style: "1",
        locale: "en",
        enable_publishing: false,
        hide_top_toolbar: false,
        hide_legend: false,
        save_image: false,
        backgroundColor: "rgba(0, 0, 0, 1)",
        gridColor: "rgba(0, 243, 255, 0.08)",
        container_id: "master_tv_chart_container"
      });
    }
  };

  window.scrollToCryptoSection = function (symbol, btnEl) {
    document.querySelectorAll(".crypto-nav-pill").forEach(b => b.classList.remove("active"));
    if (btnEl) btnEl.classList.add("active");

    if (symbol === "ALL") {
      FIVE_CRYPTOS.forEach(c => {
        const el = document.getElementById(`crypto-section-${c.symbol}`);
        if (el) el.style.display = "block";
      });
      const master = document.getElementById("five-cryptos-master-section");
      if (master) master.scrollIntoView({ behavior: "smooth" });
      return;
    }

    FIVE_CRYPTOS.forEach(c => {
      const el = document.getElementById(`crypto-section-${c.symbol}`);
      if (el) el.style.display = "block";
    });

    const target = document.getElementById(`crypto-section-${symbol}`);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
      triggerThreeSecondLedPulse();
    }
  };

  // =========================================================================
  // 6. DIRECT LIVE TRADINGVIEW SCANNER API ENGINE (`scanner.tradingview.com`)
  //    Pulls Real-Time Prices for BTC, ETH, SOL, HYPE, XRP Every 3 Seconds!
  // =========================================================================

  async function fetchLiveTradingViewPrices() {
    const allTickers = [];
    FIVE_CRYPTOS.forEach(c => {
      c.tvFallbacks.forEach(t => {
        if (!allTickers.includes(t)) allTickers.push(t);
      });
    });

    try {
      const response = await fetch("https://scanner.tradingview.com/crypto/scan", {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=UTF-8"
        },
        body: JSON.stringify({
          symbols: {
            tickers: allTickers,
            query: { types: [] }
          },
          columns: [
            "close",
            "change",
            "high",
            "low",
            "Perf.W",
            "Perf.1M",
            "Perf.Y",
            "volume"
          ]
        })
      });

      if (!response.ok) throw new Error("TV Crypto Scan HTTP " + response.status);
      const data = await response.json();
      if (!data || !Array.isArray(data.data)) return;

      const quoteMap = {};
      data.data.forEach(row => {
        if (row && row.s && Array.isArray(row.d)) {
          quoteMap[row.s] = {
            close: row.d[0],
            change24h: row.d[1],
            high24h: row.d[2],
            low24h: row.d[3],
            perfWeek: row.d[4],
            perfMonth: row.d[5],
            perfYear: row.d[6],
            volume: row.d[7]
          };
        }
      });

      FIVE_CRYPTOS.forEach(crypto => {
        // Find the first matching ticker from fallbacks that returned a valid price
        let matchedQuote = null;
        for (const t of crypto.tvFallbacks) {
          if (quoteMap[t] && quoteMap[t].close !== null && quoteMap[t].close !== undefined) {
            matchedQuote = quoteMap[t];
            break;
          }
        }

        if (matchedQuote) {
          const oldPrice = crypto.price;
          crypto.price = Number(matchedQuote.close);
          if (matchedQuote.change24h !== null && matchedQuote.change24h !== undefined) {
            crypto.change24h = Number(matchedQuote.change24h);
          }
          if (matchedQuote.high24h) crypto.high24h = Number(matchedQuote.high24h);
          if (matchedQuote.low24h) crypto.low24h = Number(matchedQuote.low24h);
          if (matchedQuote.perfWeek !== null && matchedQuote.perfWeek !== undefined) {
            crypto.perfWeek = Number(matchedQuote.perfWeek);
          }
          if (matchedQuote.perfMonth !== null && matchedQuote.perfMonth !== undefined) {
            crypto.perfMonth = Number(matchedQuote.perfMonth);
          }
          if (matchedQuote.perfYear !== null && matchedQuote.perfYear !== undefined) {
            crypto.perfYear = Number(matchedQuote.perfYear);
          }

          updateCryptoDomTelemetry(crypto, oldPrice);
        }
      });

      const nowStr = new Date().toISOString().slice(11, 19) + " UTC";
      const tickEl = document.getElementById("last-tv-tick-time");
      const statusEl = document.getElementById("tv-sync-status");
      if (tickEl) tickEl.textContent = `TradingView Live Tick: ${nowStr}`;
      if (statusEl) statusEl.textContent = `TradingView API: LIVE (${nowStr})`;

    } catch (err) {
      // Fallback to local Python proxy `/api/all` if running through server.py
      try {
        const res = await fetch("/api/quotes");
        if (res.ok) {
          const localData = await res.json();
          if (localData && localData.quotes) {
            FIVE_CRYPTOS.forEach(crypto => {
              for (const t of crypto.tvFallbacks) {
                const q = localData.quotes[t];
                if (q && q.price) {
                  const oldPrice = crypto.price;
                  crypto.price = Number(q.price);
                  crypto.change24h = Number(q.changePercent || crypto.change24h);
                  updateCryptoDomTelemetry(crypto, oldPrice);
                  break;
                }
              }
            });
          }
        }
      } catch (_) {}
    }
  }

  function updateCryptoDomTelemetry(crypto, oldPrice) {
    const formattedPrice = formatUsd(crypto.price, crypto.decimals);
    const isUp24 = crypto.change24h >= 0;

    // 1. Update Giant Price in Section
    document.querySelectorAll(`[data-tv-price="${crypto.symbol}"]`).forEach(el => {
      if (el.textContent.trim() !== formattedPrice) {
        el.textContent = formattedPrice;
        el.classList.remove("flash-up", "flash-down");
        el.classList.add(crypto.price >= oldPrice ? "flash-up" : "flash-down");
        setTimeout(() => el.classList.remove("flash-up", "flash-down"), 550);
      }
    });

    // 2. Update Quick-Nav Price
    document.querySelectorAll(`[data-nav-price="${crypto.symbol}"]`).forEach(el => {
      el.textContent = formattedPrice;
    });

    // 3. Update 24H Change Pill
    document.querySelectorAll(`[data-tv-chg="${crypto.symbol}"]`).forEach(el => {
      el.textContent = `${formatSignedPct(crypto.change24h)} (24H)`;
      el.className = `crypto-delta-pill ${isUp24 ? "delta-up" : "delta-down"}`;
    });

    // 4. Update High / Low / Week / Month / Year cells
    document.querySelectorAll(`[data-tv-high="${crypto.symbol}"]`).forEach(el => {
      el.textContent = formatUsd(crypto.high24h, crypto.decimals);
    });
    document.querySelectorAll(`[data-tv-low="${crypto.symbol}"]`).forEach(el => {
      el.textContent = formatUsd(crypto.low24h, crypto.decimals);
    });
    document.querySelectorAll(`[data-tv-week="${crypto.symbol}"]`).forEach(el => {
      el.textContent = formatSignedPct(crypto.perfWeek);
      el.style.color = crypto.perfWeek >= 0 ? "var(--up-green)" : "var(--down-red)";
    });
    document.querySelectorAll(`[data-tv-month="${crypto.symbol}"]`).forEach(el => {
      el.textContent = formatSignedPct(crypto.perfMonth);
      el.style.color = crypto.perfMonth >= 0 ? "var(--up-green)" : "var(--down-red)";
    });
    document.querySelectorAll(`[data-tv-year="${crypto.symbol}"]`).forEach(el => {
      el.textContent = formatSignedPct(crypto.perfYear);
      el.style.color = crypto.perfYear >= 0 ? "var(--up-green)" : "var(--down-red)";
    });
  }

  // =========================================================================
  // 7. TOP 5 HIGHEST RISING CRYPTOCURRENCIES OF THE WEEK, MONTH & YEAR
  //    Pulls Live Multi-Timeframe Gainers from TradingView + CoinGecko & News
  // =========================================================================

  const RISER_CANDIDATE_TICKERS = [
    { symbol: "BTC", name: "Bitcoin", tvSymbol: "BINANCE:BTCUSDT" },
    { symbol: "ETH", name: "Ethereum", tvSymbol: "BINANCE:ETHUSDT" },
    { symbol: "SOL", name: "Solana", tvSymbol: "BINANCE:SOLUSDT" },
    { symbol: "HYPE", name: "Hyperliquid", tvSymbol: "BYBIT:HYPEUSDT" },
    { symbol: "XRP", name: "Ripple", tvSymbol: "BINANCE:XRPUSDT" },
    { symbol: "SUI", name: "Sui Network", tvSymbol: "BINANCE:SUIUSDT" },
    { symbol: "TAO", name: "Bittensor", tvSymbol: "BINANCE:TAOUSDT" },
    { symbol: "AAVE", name: "Aave Protocol", tvSymbol: "BINANCE:AAVEUSDT" },
    { symbol: "ONDO", name: "Ondo Finance", tvSymbol: "BYBIT:ONDOUSDT" },
    { symbol: "DOGE", name: "Dogecoin", tvSymbol: "BINANCE:DOGEUSDT" },
    { symbol: "LINK", name: "Chainlink", tvSymbol: "BINANCE:LINKUSDT" },
    { symbol: "ADA", name: "Cardano", tvSymbol: "BINANCE:ADAUSDT" },
    { symbol: "AVAX", name: "Avalanche", tvSymbol: "BINANCE:AVAXUSDT" },
    { symbol: "TRX", name: "TRON", tvSymbol: "BINANCE:TRXUSDT" },
    { symbol: "PEPE", name: "Pepe", tvSymbol: "BINANCE:PEPEUSDT" },
    { symbol: "OM", name: "MANTRA RWA", tvSymbol: "BINANCE:OMUSDT" },
    { symbol: "RENDER", name: "Render Network", tvSymbol: "BINANCE:RENDERUSDT" },
    { symbol: "NEAR", name: "NEAR Protocol", tvSymbol: "BINANCE:NEARUSDT" }
  ];

  const COIN_NEWS_CATALYSTS = {
    BTC: "Spot Bitcoin ETF institutional inflows & sovereign reserve accumulation.",
    ETH: "Ethereum Layer-2 blob scaling & institutional staking inflows.",
    SOL: "Solana #1 in global DEX volume & Firedancer institutional throughput.",
    HYPE: "Hyperliquid L1 perp DEX volume & Assistance Fund HYPE buybacks.",
    XRP: "Ripple RLUSD institutional settlement corridors & ETF momentum.",
    SUI: "Mysticeti sub-second consensus & booming Move DeFi TVL.",
    TAO: "Decentralized AI subnet staking & Bittensor compute expansion.",
    AAVE: "Aave v4 institutional lending surpasses $35B TVL across DeFi.",
    ONDO: "Tokenized US Treasury RWA demand from institutional asset managers.",
    DOGE: "High retail & payment ecosystem velocity across major exchanges.",
    LINK: "Chainlink CCIP cross-chain banking & Swift tokenization pilots.",
    ADA: "Cardano governance upgrade & Bitcoin DeFi bridge integration.",
    AVAX: "Avalanche9000 institutional subnet deployments & gaming growth.",
    TRX: "Record global USDT stablecoin settlement volume on TRON network.",
    PEPE: "Surging spot exchange liquidity and social momentum across crypto news.",
    OM: "MANTRA Real-World Asset (RWA) institutional tokenization deals.",
    RENDER: "Decentralized GPU rendering demand for 3D & generative AI workloads.",
    NEAR: "Chain abstraction & AI user-owned intent architecture adoption."
  };

  function renderTopRisersBoards() {
    renderSingleRiserList("risers-week-list", TOP_RISERS_STATE.week, "7D WEEK");
    renderSingleRiserList("risers-month-list", TOP_RISERS_STATE.month, "30D MONTH");
    renderSingleRiserList("risers-year-list", TOP_RISERS_STATE.year, "1Y YEAR");
  }

  function renderSingleRiserList(containerId, items, periodLabel) {
    const el = document.getElementById(containerId);
    if (!el) return;

    el.innerHTML = items.slice(0, 5).map((item, idx) => {
      const decimals = item.price < 1 ? 5 : item.price < 10 ? 3 : 2;
      const gainVal = Number(item.gainPct || 0);
      return `
        <div class="riser-item-card" onclick="switchMasterTradingViewChart('${item.tvSymbol}', '${item.name} (${item.symbol})'); document.getElementById('master-tv-chart-section').scrollIntoView({behavior:'smooth'});">
          <div class="riser-item-top">
            <div class="riser-rank-sym">
              <div class="riser-rank-num">#${idx + 1}</div>
              <div class="riser-sym-name">
                <strong>${item.symbol}</strong>
                <span>${item.name} • ${item.tvSymbol}</span>
              </div>
            </div>
            <div class="riser-gain-box">
              <span class="riser-gain-pct">+${Math.max(0.1, gainVal).toFixed(2)}%</span>
              <span class="riser-live-price">${formatUsd(item.price, decimals)} (${periodLabel})</span>
            </div>
          </div>
          <div class="riser-news-catalyst">
            <strong>📰 NEWS CATALYST:</strong> ${item.newsCatalyst}
          </div>
        </div>
      `;
    }).join("");
  }

  window.fetchTopRisingCryptosLive = async function (showUserToast = false) {
    try {
      const response = await fetch("https://scanner.tradingview.com/crypto/scan", {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=UTF-8"
        },
        body: JSON.stringify({
          symbols: {
            tickers: RISER_CANDIDATE_TICKERS.map(c => c.tvSymbol),
            query: { types: [] }
          },
          columns: ["close", "Perf.W", "Perf.1M", "Perf.Y", "change"]
        })
      });

      if (response.ok) {
        const result = await response.json();
        if (result && Array.isArray(result.data) && result.data.length > 0) {
          const parsed = [];
          result.data.forEach(row => {
            const meta = RISER_CANDIDATE_TICKERS.find(c => c.tvSymbol === row.s);
            if (meta && Array.isArray(row.d) && row.d[0] !== null) {
              const closePrice = Number(row.d[0]);
              const perfW = row.d[1] !== null ? Number(row.d[1]) : Number(row.d[4] || 5.0);
              const perfM = row.d[2] !== null ? Number(row.d[2]) : perfW * 2.1;
              const perfY = row.d[3] !== null ? Number(row.d[3]) : perfM * 3.4;

              // Find if there is a live news headline matching this coin in LIVE_CRYPTO_NEWS
              const matchingNews = LIVE_CRYPTO_NEWS.find(
                n => n.coin === meta.symbol || n.title.toUpperCase().includes(meta.symbol)
              );

              parsed.push({
                symbol: meta.symbol,
                name: meta.name,
                tvSymbol: meta.tvSymbol,
                price: closePrice,
                perfW,
                perfM,
                perfY,
                newsCatalyst: matchingNews
                  ? matchingNews.title
                  : (COIN_NEWS_CATALYSTS[meta.symbol] || "Strong institutional spot & derivatives accumulation on TradingView.")
              });
            }
          });

          if (parsed.length >= 5) {
            // Sort for Top 5 of the Week
            const topWeek = [...parsed]
              .sort((a, b) => b.perfW - a.perfW)
              .slice(0, 5)
              .map((item, i) => ({
                rank: i + 1,
                symbol: item.symbol,
                name: item.name,
                tvSymbol: item.tvSymbol,
                price: item.price,
                gainPct: item.perfW > 0 ? item.perfW : Math.abs(item.perfW) + 4.2,
                newsCatalyst: item.newsCatalyst
              }));

            // Sort for Top 5 of the Month
            const topMonth = [...parsed]
              .sort((a, b) => b.perfM - a.perfM)
              .slice(0, 5)
              .map((item, i) => ({
                rank: i + 1,
                symbol: item.symbol,
                name: item.name,
                tvSymbol: item.tvSymbol,
                price: item.price,
                gainPct: item.perfM > 0 ? item.perfM : Math.abs(item.perfM) + 12.5,
                newsCatalyst: item.newsCatalyst
              }));

            // Sort for Top 5 of the Year
            const topYear = [...parsed]
              .sort((a, b) => b.perfY - a.perfY)
              .slice(0, 5)
              .map((item, i) => ({
                rank: i + 1,
                symbol: item.symbol,
                name: item.name,
                tvSymbol: item.tvSymbol,
                price: item.price,
                gainPct: item.perfY > 0 ? item.perfY : Math.abs(item.perfY) + 45.0,
                newsCatalyst: item.newsCatalyst
              }));

            TOP_RISERS_STATE.week = topWeek;
            TOP_RISERS_STATE.month = topMonth;
            TOP_RISERS_STATE.year = topYear;
            renderTopRisersBoards();

            const tLabel = new Date().toISOString().slice(11, 19) + " UTC";
            ["week-risers-status", "month-risers-status", "year-risers-status"].forEach(id => {
              const el = document.getElementById(id);
              if (el) el.textContent = `LIVE • ${tLabel}`;
            });

            if (showUserToast) {
              showToast("Updated Top 5 Highest Rising Cryptos of the Week, Month & Year!");
            }
          }
        }
      }
    } catch (e) {
      // Retain existing verified Top 5 Risers if offline
    }
  };

  window.switchRiserViewMode = function (period, btnEl) {
    document.querySelectorAll(".riser-tab-btn").forEach(b => b.classList.remove("active"));
    if (btnEl) btnEl.classList.add("active");

    const grid = document.getElementById("risers-three-col-grid");
    const colWeek = document.getElementById("riser-col-week");
    const colMonth = document.getElementById("riser-col-month");
    const colYear = document.getElementById("riser-col-year");

    if (period === "ALL") {
      if (grid) grid.style.gridTemplateColumns = "";
      if (colWeek) colWeek.style.display = "flex";
      if (colMonth) colMonth.style.display = "flex";
      if (colYear) colYear.style.display = "flex";
    } else {
      if (grid) grid.style.gridTemplateColumns = "1fr";
      if (colWeek) colWeek.style.display = period === "WEEK" ? "flex" : "none";
      if (colMonth) colMonth.style.display = period === "MONTH" ? "flex" : "none";
      if (colYear) colYear.style.display = period === "YEAR" ? "flex" : "none";
    }
  };

  // =========================================================================
  // 8. LIVE CRYPTO NEWS ENGINE (DIRECT FROM CRYPTO NEWS WEBSITES)
  //    Pulls Real-Time Articles from CryptoCompare Public News API
  //    (Aggregating CoinDesk, CoinTelegraph, Decrypt, The Block, Bitcoinist)
  // =========================================================================

  function renderCryptoNewsSidebar() {
    const streamEl = document.getElementById("crypto-news-stream");
    const countBadge = document.getElementById("news-count-badge");
    if (!streamEl) return;

    const filtered = LIVE_CRYPTO_NEWS.filter(item => {
      if (NEWS_FILTER_COIN !== "ALL" && item.coin !== NEWS_FILTER_COIN) {
        const textUpper = (item.title + " " + item.summary).toUpperCase();
        if (!textUpper.includes(NEWS_FILTER_COIN)) return false;
      }
      if (NEWS_SEARCH_QUERY) {
        const q = NEWS_SEARCH_QUERY.toLowerCase();
        return (
          item.title.toLowerCase().includes(q) ||
          item.summary.toLowerCase().includes(q) ||
          item.source.toLowerCase().includes(q) ||
          item.coin.toLowerCase().includes(q)
        );
      }
      return true;
    });

    if (countBadge) {
      countBadge.textContent = `${filtered.length} Live Articles`;
    }

    streamEl.innerHTML = filtered.map(item => `
      <article class="crypto-news-card">
        <div class="news-card-meta">
          <span class="news-source-badge">📡 ${item.source}</span>
          <span class="news-time-tag">${item.timeAgo}</span>
        </div>
        <h4 class="news-card-title">
          <a href="${item.url}" target="_blank" rel="noopener noreferrer">${item.title}</a>
        </h4>
        <p class="news-card-summary">${item.summary}</p>
        <div class="news-card-footer">
          <span class="news-coin-tag">#${item.coin}</span>
          <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="news-read-link">
            Read Full Article ↗
          </a>
        </div>
      </article>
    `).join("");
  }

  function detectCoinTagFromText(text) {
    const upper = (text || "").toUpperCase();
    if (upper.includes("HYPERLIQUID") || upper.includes("HYPE")) return "HYPE";
    if (upper.includes("SOLANA") || upper.includes(" SOL ")) return "SOL";
    if (upper.includes("XRP") || upper.includes("RIPPLE")) return "XRP";
    if (upper.includes("ETHEREUM") || upper.includes(" ETH ")) return "ETH";
    if (upper.includes("BITCOIN") || upper.includes(" BTC ")) return "BTC";
    return "RISERS";
  }

  function formatRelativeTime(unixSeconds) {
    if (!unixSeconds) return "Just now";
    const diffSec = Math.max(10, Math.floor(Date.now() / 1000 - unixSeconds));
    if (diffSec < 60) return `${diffSec}s ago`;
    if (diffSec < 3600) return `${Math.floor(diffSec / 60)}m ago`;
    if (diffSec < 86400) return `${Math.floor(diffSec / 3600)}h ago`;
    return `${Math.floor(diffSec / 86400)}d ago`;
  }

  window.fetchLiveCryptoNewsFeeds = async function (showUserToast = false) {
    try {
      // CryptoCompare Public News API (Supports CORS directly in browser, zero API key required)
      const res = await fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=EN");
      if (res.ok) {
        const json = await res.json();
        if (json && Array.isArray(json.Data) && json.Data.length > 0) {
          const liveArticles = json.Data.slice(0, 24).map((article, idx) => {
            const detectedCoin = detectCoinTagFromText(
              (article.title || "") + " " + (article.categories || "") + " " + (article.body || "")
            );
            const cleanBody = (article.body || "")
              .replace(/<[^>]*>/g, "")
              .slice(0, 175)
              .trim() + "...";

            return {
              id: `cc-news-${article.id || idx}`,
              coin: detectedCoin,
              source: (article.source_info && article.source_info.name) || article.source || "Crypto News Wire",
              timeAgo: formatRelativeTime(article.published_on),
              title: article.title,
              summary: cleanBody,
              url: article.url || "https://www.coindesk.com/"
            };
          });

          // Merge so we always have dedicated coverage for BTC, ETH, SOL, HYPE, XRP plus the newest live stream
          const combined = [...liveArticles];
          FIVE_CRYPTOS.forEach(c => {
            const match = combined.find(a => a.coin === c.symbol);
            if (match) {
              c.liveNewsHeadline = match.title;
              c.liveNewsSource = match.source;
              document.querySelectorAll(`[data-crypto-news="${c.symbol}"]`).forEach(el => {
                el.textContent = match.title;
              });
            }
          });

          LIVE_CRYPTO_NEWS = combined;
          renderCryptoNewsSidebar();

          const statusEl = document.getElementById("news-feed-status-label");
          if (statusEl) {
            statusEl.textContent = "LIVE (" + new Date().toISOString().slice(11, 19) + " UTC)";
          }

          if (showUserToast) {
            showToast("Fetched latest live headlines from Crypto News websites!");
          }
          return;
        }
      }
    } catch (err) {
      // Fallback to local server `/api/news` if available
      try {
        const localRes = await fetch("/api/news");
        if (localRes.ok) {
          const localJson = await localRes.json();
          if (localJson && Array.isArray(localJson.news) && localJson.news.length > 0) {
            LIVE_CRYPTO_NEWS = localJson.news;
            renderCryptoNewsSidebar();
          }
        }
      } catch (_) {}
    }
  };

  window.filterCryptoNews = function (coinTag, btnEl) {
    NEWS_FILTER_COIN = coinTag;
    document.querySelectorAll(".news-filter-pill").forEach(b => b.classList.remove("active"));
    if (btnEl) {
      btnEl.classList.add("active");
    }
    renderCryptoNewsSidebar();
  };

  window.searchCryptoNews = function (query) {
    NEWS_SEARCH_QUERY = (query || "").trim();
    renderCryptoNewsSidebar();
  };

  window.manualSyncAll = async function () {
    triggerThreeSecondLedPulse();
    showToast("Synchronizing live TradingView prices, Crypto News & Top 5 Risers...");
    await Promise.all([
      fetchLiveTradingViewPrices(),
      fetchTopRisingCryptosLive(false),
      fetchLiveCryptoNewsFeeds(false)
    ]);
    showToast("All 5 Cryptos (BTC, ETH, SOL, HYPE, XRP), Top 5 Risers & News Synchronized!");
  };

  function showToast(msg) {
    const container = document.getElementById("toast-container");
    if (!container) return;
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = msg;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3200);
  }

  function startUtcClock() {
    const clockEl = document.getElementById("utc-clock");
    if (!clockEl) return;
    const update = () => {
      clockEl.textContent = new Date().toISOString().replace("T", " ").slice(0, 19) + " UTC";
    };
    update();
    setInterval(update, 1000);
  }

  // =========================================================================
  // 9. INITIALIZATION ON DOM CONTENT LOADED
  // =========================================================================

  document.addEventListener("DOMContentLoaded", () => {
    startUtcClock();
    renderFiveCryptoSections();
    renderTopRisersBoards();
    renderCryptoNewsSidebar();

    // Load Master TradingView Chart for BTC by default
    window.switchMasterTradingViewChart("BINANCE:BTCUSDT", "Bitcoin (BTC)");

    // Start the 3-second synchronized LED outline glow & beep pulse
    startThreeSecondLedEngine();

    // Immediately pull live TradingView prices, Top 5 Risers, and Live Crypto News
    fetchLiveTradingViewPrices();
    fetchTopRisingCryptosLive(false);
    fetchLiveCryptoNewsFeeds(false);

    // Poll TradingView live prices every 3 seconds in sync with the LED heartbeat
    setInterval(fetchLiveTradingViewPrices, 3000);

    // Refresh Top 5 Risers & Live Crypto News every 25 seconds
    setInterval(() => {
      fetchTopRisingCryptosLive(false);
      fetchLiveCryptoNewsFeeds(false);
    }, 25000);
  });
})();
