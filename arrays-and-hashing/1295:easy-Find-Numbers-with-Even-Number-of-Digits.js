var findNumbers = function (nums) {
  let even = 0;

  for (num of nums) {
    let count = 0;
    while (num) {
      num = Math.floor(num / 10);
      count++;
    }
    if (count % 2 === 0) {
      even++;
    }
  }
  return even;
};

// faster in runtime, but more space consumption
var findNumbers = function (nums) {
  let filtered = nums.filter((num) => {
    return num.toString().length % 2 === 0;
  });

  return filtered.length;
};
