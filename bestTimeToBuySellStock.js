/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    //find the lowest value, then find the highest value after that
    //infinity
    
    let min = prices[0]
    let profit = 0
    
    //can also write it
    //for(let price of prices){
    
    for(let i=0; i<prices.length; i++){
        //keep track of the min and max
        min= Math.min(prices[i], min)
        profit = Math.max(prices[i]- min, profit)
    }
    return profit;
};