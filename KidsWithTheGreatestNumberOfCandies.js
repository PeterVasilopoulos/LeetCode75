var kidsWithCandies = function(candies, extraCandies) {
    // create results array
    let results = []

    // find the kid with the highest number of candies
    const max = Math.max(...candies)

    // loop through the candies array
    for(let i = 0; i < candies.length; i++) {
        // check if the kid will have the highest candies
        if(candies[i] + extraCandies >= max) {
            // add true to results
            results = [...results, true]
        } else {
            // otherwise add false
            results = [...results, false]
        }
    }

    // return results
    return results
};