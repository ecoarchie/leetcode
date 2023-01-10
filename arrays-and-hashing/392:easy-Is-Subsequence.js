var isSubsequence = function (s, t) {
  if (s.length === 0) return true;
  let i = 0;

  for (let j = 0; j < t.length; j++) {
    if (t[j] === s[i]) {
      i++;
      if (i === s.length) return true;
    }
  }
  return false;
};
