const API_KEY = process.env.NEXT_PUBLIC_ALPHA_VANTAGE_KEY;

export async function fetchStockData(symbol: string) {
  try {
    const res = await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${API_KEY}`
    );

    const data = await res.json();

    if (!data || data["Note"] || data["Error Message"]) {
      console.warn("API Error:", data);
      return [];
    }

    const timeSeries = data["Time Series (5min)"];
    if (!timeSeries) return [];

    return Object.entries(timeSeries).map(([time, value]: any) => ({
      time,
      price: parseFloat(value["1. open"]),
    }));
  } catch (err) {
    console.error("Fetch failed:", err);
    return [];
  }
}
