function maxProfit2(prices: number[]): number {
    let maxProfit = 0;
    let buyPrice = prices[0];

    for(let i = 1; i<prices.length ; i++){
        if(buyPrice < prices[i]) maxProfit += prices[i] - buyPrice;

        buyPrice = prices[i]
    }

    return maxProfit;
};


// time compelxity = O(n)