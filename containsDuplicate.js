/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    //loop through and put in a map-could do this if not allowed to use sort
    //if condition --> if index in map
    //let sorted = nums.sort((a,b)==>a-b)

    let sorted = nums.sort();
    for(let i=0;i<sorted.length; i++) {
        if(sorted[i] == sorted[i+1]){
            return true;
        }
    }
    return false;
};