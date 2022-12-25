/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const sHash = {};
  const tHash = {};

  s.split('').forEach((c) => (sHash[c] ? (sHash[c] += 1) : (sHash[c] = 1)));
  t.split('').forEach((c) => (tHash[c] ? (tHash[c] += 1) : (tHash[c] = 1)));

  if (Object.keys(sHash).length !== Object.keys(tHash).length) return false;

  for (let key of Object.keys(sHash)) {
    if (sHash[key] !== tHash[key]) {
      return false;
    }
  }

  return true;
};
