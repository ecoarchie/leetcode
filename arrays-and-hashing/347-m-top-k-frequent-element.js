var topKFrequent = function (nums, k) {
  const hash = {};
  for (let num of nums) {
    if (!hash.hasOwnProperty(num)) {
      hash[num] = 0;
    }
    hash[num] += 1;
  }
  return Object.entries(hash)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((a) => +a[0]);
};
