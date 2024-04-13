var twoSum = function(nums, target) {
    for(let i =0; i<nums.length; i++) {
        for(let j=0; j<nums.length && i!=j; j++) {
            if(target == (nums[i] + nums[j])) {
                return [i,j];
            }
            console.log('j',j);
        }

    }
    return [0,1];
};
console.log(twoSum([-3,4,3,9],0));