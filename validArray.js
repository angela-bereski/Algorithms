//valid array solved 2 ways

//First Solve

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    s = s.split('').sort().join();
    t = t.split('').sort().join();

    if (s==t) {
        return true;
    } else {
        return false;
    }
};

//Second Solve

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {

    //edge case-if strings are diff lengths
        if(s.length != t.length) {
            return false;
        }
    //keep track of how many times each unique char occurs
        let map = {}
    
        for(let item of s) {
            //if we've seen this before
            if(item in map) {
                map[item]++
            }else {
                map[item] = 1
            }
        }
    
        for(let item of t) {
            if(item in map) {
                //multiples of this letter
                if(map[item]>1){
                    map[item]--
                //there is only one of this letter
                }else {
                    delete map[item]
                }
            }else {
                return false
            }
        }
        return true
    }