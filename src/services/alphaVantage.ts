const API_KEY = process.env.NEXT_PUBLIC_ALPHA_VANTAGE_KEY;

export async function fetchStockData(symbol: string) {
  try {
    const res = await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${API_KEY}`
    );

    const data = await res.json();

    if (!data["Time Series (5min)"]) {
      console.error("API Error:", data);
      return [];
    }

    return Object.entries(data["Time Series (5min)"])
      .slice(0, 20)
      .map(([time, value]: any) => ({
        time,
        price: parseFloat(value["1. open"]),
      }))
      .reverse();
  } catch (err) {
    console.error(err);
    return [];
  }
}
