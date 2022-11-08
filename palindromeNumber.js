// /**
//  * @param {number} x
//  * @return {boolean}
//  */
 var isPalindrome = function(x) {
    let string = String(x)
    let start = 0
    let end = string.length - 1
    
    while (start < end) {
        if (string[start] == string[end]){
            start ++
            end --
        } else {
            return false
        }
    }
    
    return true
};