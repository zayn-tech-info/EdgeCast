const https = require("https");

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
          try {
            resolve(JSON.parse(data));
          } catch (e) {
            reject(e);
          }
        });
      })
      .on("error", reject);
  });
}

async function getEthUsdPrice() {
  // CoinGecko simple price API
  const url = "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd";
  const json = await fetchJson(url);
  const price = json?.ethereum?.usd;
  if (typeof price !== "number") throw new Error("Invalid price response");
  return price; // number in USD
}

async function getAssetUsdPrice(assetId) {
  const data = await getSimplePrices([assetId], "usd");
  const price = data?.[assetId]?.usd;
  if (typeof price !== "number") throw new Error(`Invalid price for ${assetId}`);
  return price;
}

async function getSimplePrices(ids, vs = "usd") {
  const idsParam = encodeURIComponent(ids.join(","));
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${idsParam}&vs_currencies=${encodeURIComponent(vs)}`;
  return await fetchJson(url);
}

async function getMarketChart(coinId, vs = "usd", days = 1, interval = "hourly") {
  const url = `https://api.coingecko.com/api/v3/coins/${encodeURIComponent(coinId)}/market_chart?vs_currency=${encodeURIComponent(vs)}&days=${encodeURIComponent(String(days))}&interval=${encodeURIComponent(interval)}`;
  // Response has arrays: prices [[ts, price], ...], market_caps, total_volumes
  return await fetchJson(url);
}

async function getTopCoins(vs = "usd", perPage = 25, page = 1) {
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${encodeURIComponent(vs)}&order=market_cap_desc&per_page=${encodeURIComponent(String(perPage))}&page=${encodeURIComponent(String(page))}&price_change_percentage=1h,24h,7d`;
  return await fetchJson(url);
}

module.exports = { getEthUsdPrice, getAssetUsdPrice, getSimplePrices, getMarketChart, getTopCoins };


