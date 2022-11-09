// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
 var search = function(nums, target) {
    
    let start = 0
    let end = nums.length - 1
    
    while(start <= end) {
        
        //find the middle
        let middle = Math.floor((start + end) / 2)
    
        //conditions:
            //number in the middle is higher than the target
            //number in the middle is lower than the target
            //number in the middle is the target
            if(nums[middle] == target) {
                return middle
            } else if(nums[middle] > target) {
                end = middle - 1
            } else {
                //middle number is less than the target
                start = middle + 1
            }  
    }    

    return -1
};