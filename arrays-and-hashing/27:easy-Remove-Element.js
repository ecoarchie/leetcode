var removeElement = function (nums, val) {
  let lastInd = nums.length - 1;
  let i = 0;

  while (i <= lastInd) {
    if (nums[i] === val) {
      for (let k = i; k < lastInd; k++) {
        nums[k] = nums[k + 1];
      }
      i--;
      lastInd--;
    } else {
      i++;
    }
  }
  return lastInd + 1;
};

// a little bit faster using js splice method
var removeElement = function (nums, val) {
  let length = nums.length;

  for (let i = 0; i < length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};
