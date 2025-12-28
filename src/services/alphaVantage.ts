export async function fetchStockData(symbol: string) {
  try {
    const res = await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${process.env.NEXT_PUBLIC_ALPHA_VANTAGE_KEY}`
    );

    const data = await res.json();

    if (!data || !data["Time Series (5min)"]) {
      console.warn("Alpha Vantage API limit or error:", data);
      return [];
    }

    return Object.entries(data["Time Series (5min)"]).map(
      ([time, value]: any) => ({
        time,
        price: Number(value["1. open"]),
      })
    );
  } catch (err) {
    console.error("Fetch error:", err);
    return [];
  }
}
