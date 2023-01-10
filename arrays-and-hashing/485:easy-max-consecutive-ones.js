var findMaxConsecutiveOnes = function (nums) {
  let max = 0;
  let localMax = 0;

  for (num of nums) {
    if (num === 1) {
      localMax++;
    } else {
      max = localMax > max ? localMax : max;
      localMax = 0;
    }
  }
  return localMax > max ? localMax : max;
};
