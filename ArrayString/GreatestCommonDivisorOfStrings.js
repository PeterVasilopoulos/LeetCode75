var gcdOfStrings = function (str1, str2) {
    // check if concatenated strings are equal
    if(str1 + str2 !== str2 + str1) {
        // if not, return empty string
        return ''
    }

    // variables to hold the lengths of the strings
    const s1 = str1.length
    const s2 = str2.length

    // gcd function
    function gcd(x, y) {
        // base case
        if(!y) {
            return x
        }

        // call function again with remainder
        return gcd(y, x % y)
    }

    // run function to find divisor spot 
    const divisor = gcd(s1, s2)

    // return sliced str1 at divisor
    return str1.slice(0, divisor)
};