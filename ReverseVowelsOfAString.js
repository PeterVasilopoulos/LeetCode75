var reverseVowels = function(s) {
    // variables to hold left and right strings
    let leftStr = ''
    let rightStr = ''

    // array of vowels to reference
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

    // loop through array with 2 pointers
    for(let i = 0, k = s.length - 1; i <= k;) {
        // check if pointers are equal
        if(i === k) {
            // add character to leftStr
            leftStr += s[i]

            // break out of loop
            break
        }

        // check if both pointers are at vowels
        if(vowels.includes(s[i]) && vowels.includes(s[k])) {
            // add characters to opposite strings and move pointers
            leftStr = leftStr + s[k]
            k--
            rightStr = s[i] + rightStr
            i++
            // continue to next iteration
            continue
        }

        // check if i is at a vowel
        if(!vowels.includes(s[i])) {
            // add character to leftStr
            leftStr = leftStr + s[i]
            // no vowel, increment i
            i++
        }
        // check if k is a vowel
        if(!vowels.includes(s[k])) {
            // add character to rightStr
            rightStr = s[k] + rightStr
            // no vowel, decrement k
            k--
        }
    }

    // return final str
    return leftStr + rightStr
};