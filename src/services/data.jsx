export default class DataLoader {
  static async getAssetsPerformance() {
    return this.fetchData("/data/assets_performance.json", true);
  }

  static async getBenchmarkData() {
    return this.fetchData("/data/benchmark_data.json", true);
  }

  static async getPortfolioMetrics() {
    return this.fetchData("/data/porfolio_metrics.json", true);
  }

  static async getPortfolioStats() {
    return this.fetchData("/data/porfolio_stats.json", true);
  }

  static async getUserData() {
    return this.fetchData("data/user_data.json", true);
  }

  static async fetchData(filePath, quietly) {
    try {
      const response = await fetch(filePath);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (!quietly) console.log(`Fetched data from ${filePath}:`, data);

      return data;
    } catch (error) {
      if (!quietly)
        console.error(`Error fetching data from ${filePath}:`, error);
      return null;
    }
  }
}
