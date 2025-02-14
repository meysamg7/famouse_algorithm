function productExceptSelf(nums: number[]): number[] {
    const n = nums.length;
    const output = Array(nums.length).fill(1);
    for(let i = 1; i< nums.length ; i++){
        output[i] = output[i -1] * nums[i -1];
    }
    let right = 1;
    for(let i = n -1; i >= 0; i--){
        output[i] *= right;
        right *= nums[i];
    }
    return output;
};