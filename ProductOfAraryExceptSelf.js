var productExceptSelf = function(nums) {
    // array of values starting at the left
    let leftArr = []

    // loop through nums starting at front
    for(let i = 0; i < nums.length; i++) {
        // on first loop, add 1 to leftArr
        if(i === 0) {
            leftArr[i] = 1
        } else {
            // otherwise multiply num[i - 1] and leftArr[i - 1] to get current leftArr value
            leftArr[i] = nums[i - 1] * leftArr[i - 1]
        }
    }

    // array of values starting at the right
    let rightArr = []

    // loop through nums starting at back
    for(let i = nums.length - 1; i >= 0; i--) {
        // on first loop, add 1 to rightArr
        if(i === nums.length - 1) {
            rightArr[i] = 1
        } else {
            // otherwise multiply num[i + 1] and rightArr[i + 1] to get current rightArr value
            rightArr[i] = nums[i + 1] * rightArr[i + 1]
        }
    }

    // multiply related values in arrays and put into rightArr
    for(let i = 0; i < rightArr.length; i++) {
        rightArr[i] = leftArr[i] * rightArr[i]
    }

    // return rightArr
    return rightArr
};