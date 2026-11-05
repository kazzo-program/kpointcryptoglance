#!/usr/bin/env python3
"""
KPOINT COF // INSTITUTIONAL WHITE & GREY MACRO NEWS TRADING TERMINAL
Zero-API-Key Live Backend Server for CFDs, Options, and Futures

Live Data Sources (No API Keys Required):
1. ForexFactory Public Calendar Feed (CPI, NFP, FOMC, GDP, PCE, PMI):
   - https://nfs.faireconomy.media/ff_calendar_thisweek.json
2. Yahoo Finance v8 Chart & Quote API (CFDs, Options Underlyings, Exchange Futures):
   - https://query1.finance.yahoo.com/v8/finance/chart/{symbol}
3. Yahoo Finance Live RSS News & Earnings Wire:
   - https://feeds.finance.yahoo.com/rss/2.0/headline
"""

import os
import json
import time
import urllib.request
import urllib.parse
import xml.etree.ElementTree as ET
from http.server import HTTPServer, SimpleHTTPRequestHandler
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime

PORT = 8080
WORKSPACE_DIR = os.path.dirname(os.path.abspath(__file__))

QUOTES_CACHE = {}
QUOTES_TS = 0
FF_CACHE = []
FF_TS = 0
YF_NEWS_CACHE = []
YF_NEWS_TS = 0
CACHE_TTL = 15

TRACKED_SYMBOLS = [
    # CFDs & Futures
    "GC=F", "BTC-USD", "ETH-USD", "JPY=X", "EURUSD=X", "GBPUSD=X",
    "AUDUSD=X", "CAD=X", "^GDAXI", "ES=F", "NQ=F", "YM=F", "RTY=F",
    "SI=F", "CL=F", "NG=F", "ZN=F", "ZB=F", "6J=F", "6E=F", "HG=F",
    # Options Underlyings
    "META", "NVDA", "SPY", "QQQ", "MSFT", "AMZN", "TSLA", "NFLX",
    "GLD", "AAPL", "AMD", "TLT", "INTC", "BA"
]

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
    "Accept": "application/json, text/xml, application/xml, */*",
    "Accept-Language": "en-US,en;q=0.9"
}


def classify_news_advisory(text):
    """Classify financial/macro report into BUY, SELL, or HOLD solely from news text."""
    lower = (text or "").lower()
    bull_words = ["beat", "beats", "surge", "surges", "jumps", "raises", "record", "inflows", "cut", "cools", "strong", "expands", "upgrade"]
    bear_words = ["miss", "misses", "slashes", "cuts guidance", "losses", "restructuring", "delay", "inventory build", "contraction", "downgrade", "slumps"]
    hold_words = ["in line", "in-line", "unchanged", "steady", "mixed", "awaits"]

    bull = sum(2 for w in bull_words if w in lower)
    bear = sum(2 for w in bear_words if w in lower)
    hold = sum(3 for w in hold_words if w in lower)

    if bear > bull:
        return "SELL"
    if hold > bull and hold > bear:
        return "HOLD"
    return "BUY"


def fetch_single_yahoo_quote(symbol):
    url = f"https://query1.finance.yahoo.com/v8/finance/chart/{urllib.parse.quote(symbol)}?interval=1d&range=2d"
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=4) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            res = data.get("chart", {}).get("result", [])
            if not res:
                return None
            meta = res[0].get("meta", {})
            price = meta.get("regularMarketPrice")
            prev = meta.get("chartPreviousClose") or meta.get("previousClose") or price
            if price is None:
                return None
            chg = price - prev if prev else 0.0
            chg_pct = (chg / prev * 100.0) if prev else 0.0
            return {
                "symbol": symbol,
                "price": round(price, 5),
                "changePercent": round(chg_pct, 2),
                "timestamp": datetime.utcnow().isoformat() + "Z"
            }
    except Exception:
        return None


def fetch_all_quotes():
    global QUOTES_CACHE, QUOTES_TS
    now = time.time()
    if now - QUOTES_TS < CACHE_TTL and QUOTES_CACHE:
        return QUOTES_CACHE

    with ThreadPoolExecutor(max_workers=10) as ex:
        results = list(ex.map(fetch_single_yahoo_quote, TRACKED_SYMBOLS))

    for r in results:
        if r:
            QUOTES_CACHE[r["symbol"]] = r
    QUOTES_TS = now
    return QUOTES_CACHE


def fetch_forexfactory_calendar():
    global FF_CACHE, FF_TS
    now = time.time()
    if now - FF_TS < 60 and FF_CACHE:
        return FF_CACHE

    url = "https://nfs.faireconomy.media/ff_calendar_thisweek.json"
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=5) as resp:
            events = json.loads(resp.read().decode("utf-8"))
            parsed = []
            for ev in events:
                impact = (ev.get("impact") or "").upper()
                if impact not in ("HIGH", "MEDIUM"):
                    continue
                title = ev.get("title", "Macro Release")
                country = ev.get("country", "USD")
                actual = ev.get("actual") or "Live"
                forecast = ev.get("forecast") or "—"
                previous = ev.get("previous") or "—"
                adv = classify_news_advisory(f"{country} {title} {actual}")
                parsed.append({
                    "time": ev.get("date", "THIS WEEK")[:16].replace("T", " "),
                    "currency": country,
                    "event": title,
                    "impact": "HIGH" if impact == "HIGH" else "MEDIUM",
                    "actual": actual,
                    "forecast": forecast,
                    "previous": previous,
                    "advisory": adv,
                    "targetAssets": "XAUUSD, USDJPY, ES=F, SPY" if country == "USD" else f"{country}USD CFD & Futures",
                    "summary": f"ForexFactory Direct ({country}): {title} (Forecast: {forecast}, Previous: {previous})"
                })
            if parsed:
                FF_CACHE = parsed[:14]
                FF_TS = now
    except Exception:
        pass
    return FF_CACHE


def fetch_yahoo_news():
    global YF_NEWS_CACHE, YF_NEWS_TS
    now = time.time()
    if now - YF_NEWS_TS < 45 and YF_NEWS_CACHE:
        return YF_NEWS_CACHE

    rss_url = "https://feeds.finance.yahoo.com/rss/2.0/headline?s=META,NVDA,SPY,AAPL,TSLA,MSFT,AMZN,GC=F,BTC-USD&region=US&lang=en-US"
    try:
        req = urllib.request.Request(rss_url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=5) as resp:
            root = ET.fromstring(resp.read())
            items = []
            for item in root.findall(".//item")[:12]:
                title = (item.findtext("title") or "").strip()
                link = (item.findtext("link") or "https://finance.yahoo.com").strip()
                pub = (item.findtext("pubDate") or "Live Wire").strip()[:22]
                desc = (item.findtext("description") or "").strip()
                if not title:
                    continue
                adv = classify_news_advisory(f"{title} {desc}")
                items.append({
                    "source": "Yahoo Finance • Live RSS",
                    "symbol": "MACRO / EQUITY",
                    "published": pub,
                    "title": title,
                    "snippet": desc[:180] + "..." if len(desc) > 180 else desc,
                    "url": link,
                    "advisory": adv,
                    "affectedDesks": f"Advisory: {adv} across correlated CFDs, Options & Futures"
                })
            if items:
                YF_NEWS_CACHE = items
                YF_NEWS_TS = now
    except Exception:
        pass
    return YF_NEWS_CACHE


class KpointCofHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=WORKSPACE_DIR, **kwargs)

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        if parsed.path == "/api/all":
            self.send_json({
                "status": "ONLINE",
                "quotes": fetch_all_quotes(),
                "forexfactory": fetch_forexfactory_calendar(),
                "yahooNews": fetch_yahoo_news(),
                "timestamp": datetime.utcnow().isoformat() + "Z"
            })
            return
        if parsed.path == "/api/quotes":
            self.send_json({
                "status": "ONLINE",
                "quotes": fetch_all_quotes(),
                "timestamp": datetime.utcnow().isoformat() + "Z"
            })
            return
        if parsed.path == "/api/macro-news":
            self.send_json({
                "status": "ONLINE",
                "forexfactory": fetch_forexfactory_calendar(),
                "yahooNews": fetch_yahoo_news(),
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
    httpd = HTTPServer(("", PORT), KpointCofHandler)
    print("=" * 74)
    print("  KPOINT COF // WHITE & GREY MACRO NEWS TRADING TERMINAL")
    print(f"  Local URL: http://localhost:{PORT}")
    print("  Desks: CFDs (XAUUSD, BTCUSD, USDJPY) | Options (META, NVDA) | Futures")
    print("  Feeds: Yahoo Finance & ForexFactory Direct (Zero API Keys Required)")
    print("=" * 74)
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        httpd.server_close()


if __name__ == "__main__":
    run_server()
