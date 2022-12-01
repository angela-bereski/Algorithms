/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
    //sorted array
    //rotated n times to the left
    //binary search
    //return the minimum value in array
    
    let start = 0
    let end = nums.length - 1
    
    //edge case: if array is not rotated, return the minimum value
    
    if(nums[start] < nums[end]) {
        return nums[0]
    }
    
    //edge case: if nums has only 1 value in it
    
    if(nums.length == 1) {
        return nums[0]
    }
    
    while (start<= end) {
        
        //calculate the middle point of our window
        
        let middle = Math.floor((start+end)/2)
        
        //if the number to the left of middle is greater than the num at middle, then you found the minimum which is middle
        //if number to the right is less than the middle, we've found the minimum which is mid+1
        
        //middle is less than middle - 1
        if(nums[middle] < nums[middle-1]) {
            return nums[middle]
        } else if(nums[middle] > nums[middle+1]) {
            return nums[middle+1]
        }
        
        if(nums[middle] < nums[start]) {
            end = middle -1
        } else {
            start= middle + 1
        }
        
    }
    
};