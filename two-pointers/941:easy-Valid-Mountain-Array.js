var validMountainArray = function (arr) {
  if (arr.length < 3) return false;

  let i = 0;
  let j = arr.length - 1;

  while (arr[i] < arr[i + 1]) {
    if (arr[i] === arr[i + 1]) return false;
    i++;
  }

  while (arr[j] < arr[j - 1]) {
    if (arr[j] === arr[j - 1]) return false;
    j--;
  }

  return i === j && i !== 0 && j !== arr.length - 1 ? true : false;
};
