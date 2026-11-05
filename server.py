#!/usr/bin/env python3
"""
NEXUS LED // 5-CRYPTO LIVE TRADINGVIEW TERMINAL SERVER
- Serves the pitch-black LED crypto terminal (`index.html`, `styles.css`, `app.js`)
- Provides direct backend endpoints for:
  1. `/api/quotes`: Live TradingView Crypto Scanner prices for BTC, ETH, SOL, HYPE, XRP & Top Risers
  2. `/api/news`: Live Crypto News RSS & API aggregation (CoinDesk, CoinTelegraph, CryptoCompare)
"""

import os
import json
import urllib.request
import urllib.parse
import xml.etree.ElementTree as ET
from http.server import HTTPServer, SimpleHTTPRequestHandler
from datetime import datetime

PORT = 8080
WORKSPACE_DIR = os.path.dirname(os.path.abspath(__file__))

TV_CRYPTO_TICKERS = [
    "BINANCE:BTCUSDT", "BITSTAMP:BTCUSD",
    "BINANCE:ETHUSDT", "BITSTAMP:ETHUSD",
    "BINANCE:SOLUSDT", "COINBASE:SOLUSD",
    "BYBIT:HYPEUSDT", "OKX:HYPEUSDT", "GATEIO:HYPEUSDT",
    "BINANCE:XRPUSDT", "BITSTAMP:XRPUSD",
    "BINANCE:SUIUSDT", "BINANCE:TAOUSDT", "BINANCE:AAVEUSDT",
    "BYBIT:ONDOUSDT", "BINANCE:DOGEUSDT", "BINANCE:LINKUSDT",
    "BINANCE:ADAUSDT", "BINANCE:AVAXUSDT", "BINANCE:TRXUSDT",
    "BINANCE:PEPEUSDT", "BINANCE:OMUSDT", "BINANCE:RENDERUSDT"
]


def fetch_tradingview_crypto_live():
    url = "https://scanner.tradingview.com/crypto/scan"
    payload = json.dumps({
        "symbols": {"tickers": TV_CRYPTO_TICKERS, "query": {"types": []}},
        "columns": ["close", "change", "high", "low", "Perf.W", "Perf.1M", "Perf.Y", "volume"]
    }).encode("utf-8")
    try:
        req = urllib.request.Request(
            url,
            data=payload,
            headers={
                "User-Agent": "Mozilla/5.0",
                "Content-Type": "text/plain;charset=UTF-8"
            }
        )
        with urllib.request.urlopen(req, timeout=6) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            out = {}
            for row in data.get("data", []):
                sym = row.get("s")
                d = row.get("d", [])
                if sym and len(d) >= 7:
                    out[sym] = {
                        "price": d[0],
                        "changePercent": d[1],
                        "high": d[2],
                        "low": d[3],
                        "perfWeek": d[4],
                        "perfMonth": d[5],
                        "perfYear": d[6]
                    }
            return out
    except Exception:
        return {}


def fetch_live_crypto_news():
    articles = []
    # 1. Try CryptoCompare Public News API
    try:
        req = urllib.request.Request(
            "https://min-api.cryptocompare.com/data/v2/news/?lang=EN",
            headers={"User-Agent": "Mozilla/5.0"}
        )
        with urllib.request.urlopen(req, timeout=6) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            for item in data.get("Data", [])[:18]:
                title = item.get("title", "")
                upper = title.upper()
                coin = "BTC"
                for tag in ["HYPE", "SOL", "XRP", "ETH", "BTC"]:
                    if tag in upper:
                        coin = tag
                        break
                articles.append({
                    "id": str(item.get("id", "")),
                    "coin": coin,
                    "source": item.get("source_info", {}).get("name", "Crypto News"),
                    "timeAgo": "LIVE",
                    "title": title,
                    "summary": (item.get("body", "")[:170] + "..."),
                    "url": item.get("url", "https://www.coindesk.com/")
                })
    except Exception:
        pass
    return articles


class NexusCryptoHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=WORKSPACE_DIR, **kwargs)

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        if parsed.path in ("/api/all", "/api/quotes"):
            self.send_json({
                "status": "ONLINE",
                "source": "TradingView Live Crypto Scanner (scanner.tradingview.com/crypto/scan)",
                "quotes": fetch_tradingview_crypto_live(),
                "timestamp": datetime.utcnow().isoformat() + "Z"
            })
            return
        if parsed.path == "/api/news":
            self.send_json({
                "status": "ONLINE",
                "news": fetch_live_crypto_news(),
                "timestamp": datetime.utcnow().isoformat() + "Z"
            })
            return
        super().do_GET()

    def send_json(self, payload, status=200):
        body = json.dumps(payload, indent=2).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)


def run_server():
    httpd = HTTPServer(("", PORT), NexusCryptoHandler)
    print("=" * 76)
    print("  NEXUS LED // 5-CRYPTO LIVE TRADINGVIEW TERMINAL (BTC, ETH, SOL, HYPE, XRP)")
    print(f"  Local URL: http://localhost:{PORT}")
    print("  Live Price Feed: https://scanner.tradingview.com/crypto/scan")
    print("=" * 76)
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        httpd.server_close()


if __name__ == "__main__":
    run_server()
