const maxArea = (height) => {
  let max_area = 0;
  let currentArea = 0;

  let i = 0;
  let j = height.length - 1;

  while (i < j) {
    currentArea = (j - i) * (height[i] < height[j] ? height[i] : height[j]);
    max_area = max_area > currentArea ? max_area : currentArea;
    if (height[i] <= height[j]) i++;
    else j--;
  }

  return max_area;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
