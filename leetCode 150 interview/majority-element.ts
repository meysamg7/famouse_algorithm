function majorityElement(nums: number[]): number {
    const map = new Map();
    for(let i=0; i<nums.length;i++){
        if((map.get(nums[i])||0)+1 > nums.length/2 ) return nums[i];

        map.set(nums[i], map.get(nums[i])?map.get(nums[i])+1:1)
    }

    return 0;
};