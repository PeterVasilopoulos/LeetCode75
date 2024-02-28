var findMaxAverage = function(nums, k) {
    // variable to hold the max average
    let maxAvg = null

    // loop through the array
    for(let i = 0; i + k - 1 < nums.length; i++) {
        // variable to hold the current avg
        let curAvg = 0

        // loop through the window of the array
        for(let j = i; j <= i + k - 1; j++) {
            // add value to curAvg
            curAvg += nums[j]
        }

        // divide curAvg by k
        curAvg = curAvg / k

        // check if maxAvg has a value
        if(maxAvg) {
            // if so, check if curAvg is larger than maxAvg
            if(curAvg > maxAvg) {
                // set new maxAvg
                maxAvg = curAvg
            }
        } else {
            // if not, set starting maxAvg
            maxAvg = curAvg
        }
    }

    // return maxAvg
    return maxAvg
};