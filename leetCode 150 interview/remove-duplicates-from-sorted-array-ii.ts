function removeDuplicates(nums: number[]): number {
    let index = 1, count = 0;
    for(let i = 1; i<nums.length;i++){
        if(nums[i] !== nums[i - 1]){
            count = 0;
            nums[index++] = nums[i];
        }else{
            count++;
            if(count <= 1){
                nums[index++] = nums[i]
            }
        }
    }

    return index;
};