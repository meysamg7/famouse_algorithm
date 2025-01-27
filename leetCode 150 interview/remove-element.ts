function removeElement(nums: number[], val: number): number {
    let newI: number = 0; //two pointer technique
    for(let i=0 ; i<nums.length; i++){
        if(nums[i] !== val) {
            nums[newI] = nums[i];
            newI++
        }
    }
    return newI;
};