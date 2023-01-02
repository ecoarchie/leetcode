// My first solution, very slow and space consuming. After that, below is better one,
// written after watching problem explanation
var threeSum = function (nums) {
  const output = [];
  let target;
  const hashI = {};
  const hashJ = {};

  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (hashI.hasOwnProperty(nums[i])) continue;
    target = 0 - nums[i];
    let hash = {};
    for (j = i + 1; j < nums.length; j++) {
      if (hash.hasOwnProperty(target - nums[j]) && hashJ[nums[j]] !== i) {
        output.push([nums[i], target - nums[j], nums[j]]);
        delete hash[target - nums[j]];
        hashJ[nums[j]] = i;
      } else {
        hash[nums[j]] = j;
      }
    }
    hashI[nums[i]] = i;
  }
  return output;
};

// This is much faster version, after tutorial at neetcode.io
const threeSum = (nums) => {
  const result = [];

  nums.sort((a, b) => a - b);

  for (const [i, el] of nums.entries()) {
    if (i > 0 && nums[i - 1] === el) continue;

    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      let threesum = el + nums[l] + nums[r];
      if (threesum < 0) l += 1;
      else if (threesum > 0) r -= 1;
      else {
        result.push([el, nums[l], nums[r]]);
        l += 1;
        while (nums[l] === nums[l - 1] && l < r) {
          l += 1;
        }
      }
    }
  }
  return result;
};
