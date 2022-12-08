/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {

    let left = []
    let right = []
    let final = []

    left[0] = 1
    right[nums.length-1] = 1

    for(let i=1;i<nums.length; i++) {
        left.push(nums[i-1] * left[i-1])
    }
    console.log("left array:", left)

    for(let j=nums.length-2; j>=0; j--) {
        right[j]= (nums[j+1] * right[j+1])
    }
    console.log("right array:", right)

    for(let i=0; i<nums.length; i++){
        final.push(left[i] * right[i])
    }

    return final;


};