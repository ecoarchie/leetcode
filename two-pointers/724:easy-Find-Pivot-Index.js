var pivotIndex = function (nums) {
  let leftSum = [];
  let rightSum = [];
  let sumL = 0;
  let sumR = 0;
  let i = 0;
  let j = nums.length - 1;

  while (i < nums.length) {
    leftSum[i] = sumL;
    sumL += nums[i];
    i++;

    rightSum[j] = sumR;
    sumR += nums[j];
    j--;
  }
  for (let k = 0; k < nums.length; k++) {
    if (rightSum[k] === leftSum[k]) return k;
  }
  return -1;
};
