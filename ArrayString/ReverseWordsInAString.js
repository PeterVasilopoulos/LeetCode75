var reverseWords = function(s) {
    // split the words into an array
    const words = s.split(" ")

    // variable to hold the new string
    let result = ''

    // loop through the array
    for(let i = words.length - 1; i >= 0; i--) {
        // check if the string is not empty
        if(words[i]) {
            // check if result is empty
            if(!result) {
                // if result is empty, just add the word
                result += words[i]
            } else {
                // otherwise add a space and the word
                result += ` ${words[i]}`
            }
        }
    }

    // return result
    return result
};