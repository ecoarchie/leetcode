var duplicateZeros = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      for (let k = arr.length - 1; k > i; k--) {
        arr[k] = arr[k - 1];
      }
      i++;
    }
  }
};
