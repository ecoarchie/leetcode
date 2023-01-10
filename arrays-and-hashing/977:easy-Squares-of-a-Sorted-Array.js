var sortedSquares = function (nums) {
  let i = 0;
  let j = nums.length - 1;
  const newArr = [];

  while (i <= j) {
    if (Math.abs(nums[i]) > Math.abs(nums[j])) {
      newArr.unshift(nums[i] ** 2);
      i++;
    } else {
      newArr.unshift(nums[j] ** 2);
      j--;
    }
  }
  return newArr;
};

// faster runtime, but requires more space
var sortedSquares = function (nums) {
  let i = 0;
  let j = nums.length - 1;
  let k = nums.length - 1;
  const newArr = new Array(nums.length);

  while (i <= j) {
    if (Math.abs(nums[i]) > Math.abs(nums[j])) {
      newArr[k] = nums[i] ** 2;
      i++;
    } else {
      newArr[k] = nums[j] ** 2;
      j--;
    }
    k--;
  }
  return newArr;
};
