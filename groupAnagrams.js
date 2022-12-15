/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    //sort the strings and see if they are equal
    //keep track of how many repetitions of the set of letters
    //create an array

    const map = {}

    for(let string of strs) {
        let item = string.split('').sort().join()
        if(item in map) {
            map[item].push(string)
        } else {
            map[item] = [string]
        }
    }

    return Object.values(map)
};