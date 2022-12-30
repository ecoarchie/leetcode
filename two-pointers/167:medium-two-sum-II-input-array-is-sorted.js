var twoSum = function (numbers, target) {
  let i = 0;
  let j = numbers.length - 1;
  let curr_sum;

  while (i < j) {
    curr_sum = numbers[i] + numbers[j];
    if (curr_sum === target) return [i + 1, j + 1];
    else if (curr_sum < target) i += 1;
    else if (curr_sum > target) j -= 1;
  }
};
