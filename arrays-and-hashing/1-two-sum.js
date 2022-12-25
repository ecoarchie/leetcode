// brute force
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums.includes(target - nums[i], i + 1)) {
      return [i, nums.indexOf(target - nums[i], i + 1)];
    }
  }
};

// with hash - O(n)
var twoSum = function (nums, target) {
  const hash = {};

  for (let i = 0; i < nums.length; i++) {
    if (hash.hasOwnProperty(target - nums[i])) {
      return [hash[target - nums[i]], i];
    }
    hash[nums[i]] = i;
  }
};
