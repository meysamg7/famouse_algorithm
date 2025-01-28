/**
 Do not return anything, modify nums in-place instead.
 */
 function rotate(nums: number[], k: number): void {
    k = k % nums.length
    const tmp: number[] = []
    for(let i=0;i<nums.length;i++){
        let newI = (i + k)
        if((nums.length - (i + k)) <= 0){
            newI = Math.abs(nums.length - (i + k));
        }
        tmp[newI] = nums[i]
    }
    nums.splice(0, nums.length, ...tmp);    
};