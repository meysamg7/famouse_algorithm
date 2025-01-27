function removeDuplicates(nums: number[]): number {
    let index: number = 0 //two pointer technique
    for(let i=0;i<nums.length;i++){
        if(nums[i] !== nums[i-1]){
            nums[index] = nums[i];
            index++;
        }
    }


    return index;
};

