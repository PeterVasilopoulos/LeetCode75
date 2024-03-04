const nums1 = [1,1,0,1]

var longestSubarray = function(nums) {
    // variable to check if a 0 has been found
    let foundZero = false

    // variable to hold the longest subarray length
    let longest = 0

    // variable to hold the first pointer
    let firstPointer = 0
    // variable to hold the second pointer
    let secondPointer = 0

    // loop through nums
    for(let i = 0; i < nums.length; i++) {
        // check if foundZero is true and nums[i] is zero
        if(foundZero && nums[i] === 0) {
            // move secondPointer to a 0 and increment by one
            secondPointer = nums.indexOf(0, secondPointer)
            secondPointer++
        }

        // check if foundZero is false and nums[i] is zero
        if(!foundZero && nums[i] === 0) {
            // set foundZero to true
            foundZero = true
        }

        // set firstPointer equal to i
        firstPointer = i

        // check if length is longer than longest variable
        if(firstPointer - secondPointer + 1 > longest) {
            // set new longest value
            longest = firstPointer - secondPointer + 1
        }
    }

    // check if foundZero is still false
    if(!foundZero) {
        // return length of nums - 1
        return nums.length - 1
    }

    // return longest - 1
    return longest - 1
}

console.log(longestSubarray(nums1))