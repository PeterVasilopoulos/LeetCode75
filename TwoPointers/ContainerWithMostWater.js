var maxArea = function(height) {
    // variable to hold the max value
    let max = 0

    // left pointer variable
    let leftPointer = 0
    // right pointer variable
    rightPointer = height.length - 1

    // function to calculate value
    function calcValue(l, r) {
        return (r - l) * (Math.min(height[l], height[r]))
    }

    // loop through height array
    while(leftPointer !== rightPointer) {
        // get the water value
        let value = calcValue(leftPointer, rightPointer)

        // check if value is larger than current max
        if(value > max) {
            max = value
        }
        
        // move the pointer with the smaller value
        if(height[leftPointer] <= height[rightPointer]) {
            leftPointer++
        } else {
            rightPointer--
        }
    }

    // return max value
    return max
}