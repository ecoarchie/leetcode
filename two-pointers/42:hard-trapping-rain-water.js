const trap = (height) => {
  let totalVol = 0;
  let notEmptyVol = 0;
  let i = 0;
  let j = i;
  let localJ = 0;

  while (i < height.length - 2) {
    while (height[i] <= height[i + 1]) i++;
    j = i;
    localJ = i + 1;
    while (
      // height[j] < height[i] &&
      // height[j] <= height[j - 1] &&
      height[j] > height[j + 1] &&
      height[j] !== undefined
    ) {
      if (j !== i) notEmptyVol += height[j];
      j++;
      // localJ = height[j] >= height[localJ] ? j : localJ;
    }
    while (height[j] <= height[j + 1] && height[j + 1] !== undefined) {
      notEmptyVol += height[j];
      j++;
    }
    console.log('i = ', i);
    console.log('j = ', j);
    // console.log('localJ = ', localJ);

    totalVol = totalVol + (j - i - 1) * (height[i] > height[j] ? height[j] : height[i]);
    i = j;
    console.log('totalVol = ', totalVol);
    console.log('notEmptyVol = ', notEmptyVol);
    console.log('\n');
  }
  console.log('notEmptyVol = ', notEmptyVol);

  return totalVol - notEmptyVol;
};

console.log(trap([4, 2, 0, 3, 2, 5]));
