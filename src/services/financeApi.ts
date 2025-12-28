export interface StockData {
  symbol: string;
  price: number;
  change: number;
}

// Simulated API call
export const fetchStockData = async (symbol: string): Promise<StockData> => {
  await new Promise((res) => setTimeout(res, 800)); // fake latency

  return {
    symbol,
    price: Number((Math.random() * 1000 + 100).toFixed(2)),
    change: Number((Math.random() * 10 - 5).toFixed(2)),
  };
};
