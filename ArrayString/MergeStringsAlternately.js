var mergeAlternately = function(word1, word2) {
    // create variable to hold result
    let result = ''

    // find the max length
    const maxLength = word1.length >= word2.length ? word1.length : word2.length

    // loop through the words
    for(let i = 0; i < maxLength; i ++) {
        // add letters to string alternately
        if(word1[i]) {
            result += word1[i]
        }
        if(word2[i]) {
            result += word2[i]
        }
    }

    // return result
    return result
};