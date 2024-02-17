var canPlaceFlowers = function(flowerbed, n) {
    // variable to count how many flowers have been added
    let count = 0

    // loop through flowerbed array
    for(let i = 0; i < flowerbed.length; i++) {
        // if there is a flower in this spot, continue
        if(flowerbed[i]) {
            continue
        }
        // if there is no flower here or on either side, add flower
        if(!flowerbed[i] && !flowerbed[i - 1] && !flowerbed[i + 1]) {
            // increment count
            count++
            // replace value with 1
            flowerbed[i] = 1
        }

        // check if count is equal to n, if so return true
        if(count >= n) {
            return true
        }
    }

    // return result
    return count >= n
};