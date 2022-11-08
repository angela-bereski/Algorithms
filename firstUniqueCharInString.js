// /**
//  * @param {string} s
//  * @return {number}
//  */
 var firstUniqChar = function(s) {
    
    const memory = {
        
    }
    
    for(const letter of s) {
        if(memory[letter]) {
            memory[letter]++
        } else {
            memory[letter] = 1
        }
    }
    
    for(let i=0; i<s.length; i++) {
        if(memory[s[i]] == 1) {
            return i
        }
    }
    
    return -1
    
};