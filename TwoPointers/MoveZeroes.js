let nums = [0, 1, 0, 3, 12]
let nums2 = [2, 1]

var moveZeroes = function(nums) {
    // low pointer
    let low = 0

    // high pointer
    let high = low + 1

    // loop through array
    while(high < nums.length) {
        // check if low is a zero
        if(nums[low] === 0) {
            // check if high is on a 0
            if(nums[high] === 0) {
                // increment high
                high++
            } else {
                // replace high and low value
                [nums[low], nums[high]] = [nums[high], nums[low]]
                // set high back to low + 1
                high = low + 1
            }
        } else {
            // increment low
            low++
            // increment high
            high++
        }
    }
}

moveZeroes(nums2)
console.log(nums2)