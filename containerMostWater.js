/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    //find, calculate two values which create the greatest area
    //sliding window with two pointers
    
    //two pointers
    let start = 0
    let end = height.length - 1
    
    //keep track of the largest area we have seen
    let max = 0
    
    while(start < end) {
        //area calculation
        let x = end - start
        let y = Math.min(height[start], height[end])
        let area = y * x
        
        //compare this area against max
        max = Math.max(max, area)
        if(height[end] > height[start]){
            start++
        } else {
            end--
        }
    }
    return max
};