const nums1 = [1,2,3,4]
const k1 = 5

const nums2 = [3,1,3,4,3]
const k2 = 6

var maxOperations = function(nums, k) {
    // function to remove numbers
    function removeNums(num1, num2) {
        // loop through array for num2
        for(let i = num2; i < nums.length; i++) {
            // replace value at nums[i] with next value
            nums[i] = nums[i + 1]
        }
        // loop through array for num1
        for(let i = num1; i < nums.length; i++) {
            // replace value at nums[i] with next value
            nums[i] = nums[i + 1]
        }

        // remove last two elements
        nums.pop()
        nums.pop()
    }
    

    // variable to hold the number of operations
    let count = 0

    // loop through nums
    for(let i = 0; i < nums.length - 1;) {
        console.log("NUMS:" + nums)
        // check if nums has value of k - i
        const index2 = nums.indexOf(k - nums[i])

        // check if index exists
        if(index2 >= 0) {
            // if so, remove both elements
            removeNums(i, index2)
            // increment count
            count++
        } else {
            // otherwise increment i
            i++
        }
    }

    // return operation count
    return count
}

// console.log(maxOperations(nums1, k1))
console.log(maxOperations(nums2, k2))