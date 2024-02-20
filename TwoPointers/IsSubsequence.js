var isSubsequence = function(s, t) {
    // check if s is empty, return true if so
    if(!s) {
        return true
    }

    // split s into an array
    const arr = s.split('')

    // variable to move through arr
    let arrPointer = 0

    // loop through t
    for(let i = 0; i < t.length; i++) {
        // check if character in t equals current value in arr
        if(t[i] === arr[arrPointer]) {
            // increment arrPointer
            arrPointer++
        }

        // check if arrPointer outside index of arr
        if(arrPointer >= arr.length) {
            // return true
            return true
        }
    }

    // if it hasn't returned by this point, return false
    return false
};