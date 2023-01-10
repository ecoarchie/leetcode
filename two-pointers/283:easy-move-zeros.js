var moveZeroes = function (nums) {
  let i = 0;
  let length = nums.length;

  while (i < length) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      length--;
    } else {
      i++;
    }
  }
};
