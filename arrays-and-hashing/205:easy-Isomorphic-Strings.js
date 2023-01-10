var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;

  let i = 0;
  const hash = {};
  while (i < s.length) {
    if (
      (s[i] in hash && hash[s[i]] !== t[i]) ||
      (!(s[i] in hash) && Object.values(hash).indexOf(t[i]) !== -1)
    ) {
      return false;
    } else {
      hash[s[i]] = t[i];
      i++;
    }
  }
  return true;
};
