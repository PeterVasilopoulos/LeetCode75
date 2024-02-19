/*
 * Complete the 'getResponses' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY valid_auth_tokens
 *  2. 2D_STRING_ARRAY requests
 */

function getResponses(valid_auth_tokens, requests) {
    // array to hold the results
    let results = []
    
    


    // includes token funciton
    function includesToken(str, tokens) {
        for(let i = 0; i < tokens.length; i++) {
            if(str.includes(tokens[i])) {
                return true
            }
        }
        return false
    }
    





    // getString function
    function getString(str) {
        // final string to return
        let endString = ''
        
        // split the string on & symbol
        let splitOne = str.split('&')
        
        // loop through the new array, excluding first element
        for(let i = 1; i < splitOne.length; i++) {
            // if i === 1, add valid to beginning of endString
            if(i === 1) {
                endString += 'VALID'
            }

            // split the string again on = symbol
            let splitTwo = splitOne[i].split('=')

            // add key and value to endString
            endString += `,${splitTwo[0]},${splitTwo[1]}`

            // check for csrf
            if(splitTwo[0] === 'csrf') {
                // make sure value is alphaNumeric and at least 8 characters
                if(!isAlphaNumeric(splitTwo[1]) || !splitTwo[1].length >= 8) {
                    // if not, set endString to 'INVALID' and break out of loop
                    endString = 'INVALID'
                    break
                }
            }
        }
        
        // return endString
        return endString
    }
    






    // isAlphaNumeric function
    function isAlphaNumeric(str) {
        return /^[a-zA-Z0-9]+$/.test(str)
    }
    





    // loop through requests
    for(let i = 0; i < requests.length; i++) {
        // check for valid auth token
        if(!includesToken(requests[i][1], valid_auth_tokens)) {
            // add INVALID to results
            results = [...results, 'INVALID']
            // continue to next iteration
            continue
        }
        
        // get string
        let validStr = getString(requests[i][1])
        
        // check for get or post
        if(requests[i][0] === 'GET') {
            // GET REQUEST
            // add string to results
            results = [...results, validStr]
        } else if(requests[i][0] === 'POST') {
            // POST REQUEST
            // check if string contains 'csrf'
            if(validStr.includes('csrf')) {
                // add string to results
                results = [...results, validStr]
            } else {
                // otherwise add invalid to results
                results = [...results, 'INVALID']
            }
        } 
    }
    
    // return results
    return results
}





// auth tokens variable
const valid_auth_tokens = ["ah37j2ha483u", "safh34ywb0p5", "ba34wyi8t902"]

// requests
const requests = [
    ["GET", "https://example.com/?token=347sd6yk8iu2&name=alex"],
    ["GET", "https://example.com/?token=safh34ywb0p5&name=sam"],
    ["POST", "https://example.com/?token=safh34ywb0p5&name=alex"],
    ["POST", "https://example.com/?token=safh34ywb0p5&csrf=ak2sh32dy&name=chris"]
]

console.log(getResponses(valid_auth_tokens, requests))