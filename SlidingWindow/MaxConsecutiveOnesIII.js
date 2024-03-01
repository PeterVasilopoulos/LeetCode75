

var longestOnes = function(nums, k) {
    // variable to hold the max consecutive
    let max = 0

    // variable to hold the count of 0s
    let zeroCount = 0

    // beginnging pointer variable
    let leftPointer = 0
    // end pointer variable
    let rightPointer = 0

    // loop through nums
    while(rightPointer < nums.length) {
        // check if value of nums[leftPointer] is zero
        if(!nums[leftPointer]) {
            // increment leftPointer
            leftPointer++
            // decrement zeroCount
            zeroCount--

            // check if rightPointer is at the same index
            if(leftPointer === rightPointer) {
                // increment rightPointer
                rightPointer++
            }
        }

        // check value of nums[rightPointer]
        if(nums[rightPointer + 1]) {
            // if value is 1, increment rightPointer
            rightPointer++
        } else {
            // if value is 0, check zeroCount
            if(zeroCount < k) {
                // still have room for zeroes, increment rightPointer
                rightPointer++
                // increment zeroCount
                zeroCount++
            } else {
                // max zero limit, move leftPointer to next 0 and increment
                leftPointer = nums.indexOf(0, leftPointer)
                leftPointer++
                // increment rightPointer
                rightPointer++
            }
        }

        // check if length is larger than current max
        if((rightPointer - leftPointer) > max) {
            // set new max
            max = rightPointer - leftPointer
        }
    }

    // return max
    return max
};