var runningSum = function (nums) {
  const res = [];
  let sum = 0;

  for (num of nums) {
    sum += num;
    res.push(sum);
  }
  return res;
};
