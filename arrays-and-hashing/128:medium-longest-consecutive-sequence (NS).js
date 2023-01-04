var longestConsecutive = function (nums) {
  const numsSet = new Set(nums);

  let longest = 0;
  for (let num of nums) {
    if (!numsSet.has(num - 1)) {
      let length = 0;
      while (numsSet.has(num + length)) {
        length += 1;
      }
      longest = longest > length ? longest : length;
    }
  }
  return longest;
};
