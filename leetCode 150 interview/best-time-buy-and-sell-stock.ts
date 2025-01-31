// with Dynamic Programming:
function maxProfit(prices: number[]): number {
    let maxProfit = 0;
    let minPrice = Number.MAX_VALUE
    for (let i=0;i<prices.length;i++){
        minPrice = Math.min(minPrice, prices[i])
        maxProfit = Math.max(maxProfit, prices[i] - minPrice)
    }

    return maxProfit;
};