var findMaxAverage2 = function(nums, k) {
    // variable to hold temp average
    let tempAvg = null

    // calculate starting tempAvg value
    for(let i = 0; i < k; i++) {
        // add current value to tempAvg
        tempAvg += nums[i]
    }

    // variable to hold the max average, 
    // starting at tempAvg / k
    let maxAvg = tempAvg / k

    // loop through nums array
    for(let i = k; i < nums.length; i++) {
        // add current value to tempAvg
        tempAvg += nums[i]
        // remove old value from tempAvg
        tempAvg -= nums[i - k]

        // check if tempAvg / k is larger than maxAvg
        if(tempAvg / k > maxAvg) {
            // set new maxAvg
            maxAvg = tempAvg / k
        }
    }

    // return maxAvg
    return maxAvg
};


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