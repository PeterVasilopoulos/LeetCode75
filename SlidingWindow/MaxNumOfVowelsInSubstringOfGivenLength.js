var maxVowels = function(s, k) {
    // array of vowels
    const vowels = ['a','e','i','o','u']

    // variable to hold the vowel count
    let count = 0

    // loop through s to get initial window
    for(let i = 0; i < k; i++) {
        // check if letter is a vowel
        if(vowels.includes(s[i])) {
            // increment count
            count++
        }
    }

    // variable to hold max vowel count
    let maxCount = count

    // loop through s to find max vowel count
    for(let i = k; i < s.length; i++) {
        // check if letter being removed was a vowel
        if(vowels.includes(s[i - k])) {
            // decrement count
            count--
        }

        // check if letter being added is a vowel
        if(vowels.includes(s[i])) {
            // increment count
            count++
        }

        // check if current count is large than maxCount
        if(count > maxCount) {
            maxCount = count
        }
    }

    return maxCount
};