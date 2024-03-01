const nums1 = [1,1,1,0,0,0,1,1,1,1,0]
const k1 = 2

const nums2 = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1]
const k2 = 3

function longestOnes(nums, k) {
    // variable to hold the max length
    let max = 0

    // leftPointer variable
    let leftPointer = 0
    // rightPointer variable
    let rightPointer = 0

    // zero counter variable
    let zeroCount = 0

    // loop through nums
    for(let i = 0; i < nums.length; i++) {
        // check value of nums[i]
        if(nums[i]) {
            // value is 1, set rightPointer to i
            rightPointer = i
        } else {
            // value is 0, check if zeroCount is less than k
            if(zeroCount < k) {
                // still room for zeroes
                // set rightPointer to i
                rightPointer = i
                // increment zeroCount
                zeroCount++
            } else {
                // no more room for zeroes
                // set leftPointer to next 0 and increment
                leftPointer = nums.indexOf(0, leftPointer)
                leftPointer++
                // set rightPointer to i
                rightPointer = i
            }
        }

        // check if length is larger than max
        if(rightPointer - leftPointer + 1 > max) {
            max = rightPointer - leftPointer + 1
        }
    }

    // return max
    return max
}

console.log(longestOnes(nums2, k2))