const chars1 = ["a","a","b","b","c","c","c"]
const chars2 = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]

var compress = function(chars) {
    // string to hold the characters and numbers
    let s = ''

    // object to hold the characters and character counts
    const counts = {}

    // loop through chars and add values to counts
    for(let i = 0; i < chars.length; i++) {
        // check if character exists in counts
        if(counts.hasOwnProperty(chars[i])) {
            counts[chars[i]]++
        } else {
            counts[chars[i]] = 1
        }
    }

    // loop through counts and add values to string s
    for(key in counts) {
        if(counts[key] === 1) {
            s += key
        } else {
            s += `${key}${counts[key]}`
        }
    }

    // replace chars with new array
    chars = s.split('')

    // return length of chars
    return chars.length
};

console.log(compress(chars2))