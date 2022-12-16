/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    //window
    let current = 0;
    let max = -Infinity;

    for(let i=0; i<nums.length; i++) {
        current += nums[i];
        max = Math.max(current,max);
        if(current<0){
            current = 0;
        }
    }
    return max;
};