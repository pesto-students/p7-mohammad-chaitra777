var sortnums = function(nums) {
    let p0 = 0;
    let curr = 0;
    let p2 = nums.length - 1;
    let tmp;
    
    while (curr <= p2) {
          if (nums[curr] === 0) {
                tmp = nums[p0];
                nums[p0++] = nums[curr];
                nums[curr++] = tmp;
          } else if (nums[curr] === 2) {
                tmp = nums[curr];
                nums[curr] = nums[p2];
                nums[p2--] = tmp;
          } else curr++;
    };
};