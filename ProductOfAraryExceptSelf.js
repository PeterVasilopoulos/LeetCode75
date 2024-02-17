const nums = [1,2,3,4]

var productExceptSelf = function(nums) {
    // create a left array
    let leftArr = []
    // create a left multiplication value
    let leftMult = 1

    // increment through nums
    for(let i = 0; i < nums.length; i++) {
        // set leftArr[i] = leftMult
        leftArr[i] = leftMult
        // multiply leftMult by the current nums value
        leftMult *= nums[i]
    }

    // create a right array
    let rightArr = []
    // create a right multiplication value
    let rightMult = 1

    // decrement through nums
    for(let i = nums.length - 1; i >= 0; i--) {
        // set rightArr[i] = rightMult
        rightArr[i] = rightMult
        // multiply rightMult by the current nums value
        rightMult *= nums[i]
        // multiply current rightArr value by leftArr value
        rightArr[i] *= leftArr[i]
    }

    console.log(leftArr)
    console.log(rightArr)
    return rightArr
};

productExceptSelf(nums)