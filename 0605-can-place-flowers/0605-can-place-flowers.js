/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let cnt = 0;
        let len = flowerbed.length;
        for (let i=0; i < len; i++) {
            if( 
                flowerbed[i] == 0 && 
                (i == 0 || flowerbed[i-1] == 0) && 
                (i == len-1 || flowerbed[i+1] == 0)
            ) {
                cnt++;
                flowerbed[i] = 1;
            }
            if(cnt >= n) {
                return true;
            }
        }
        return cnt >= n;
};