/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const greatestKidCandy = Math.max(...candies);
    let finalResult = [];
        for(let i = 0; i < candies.length; i++) {
            finalResult[i] = true;
            let currentKidCandy = candies[i] + extraCandies;
            if(currentKidCandy < greatestKidCandy) {
                finalResult[i] = false;
            }
        }
        return finalResult;
    
};