/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    if (nums.length ==1) {
        return
    }
    
    if(k== nums.length) {
        return
    } else if (k> nums.length) {
        let i=0
        while (i<k) {
            nums.unshift(nums.splice(nums.length-1))
            i++
        }
    } else {
        nums.unshift(...nums.splice(nums.length-k))
    }
    
    console.log(nums)
};