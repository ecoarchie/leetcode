var reverseString = function (s) {
  let i = 0;
  let j = s.length - 1;
  let tmp = null;
  while (i < j) {
    tmp = s[i];
    s[i] = s[j];
    s[j] = tmp;
    i++;
    j--;
  }
};
