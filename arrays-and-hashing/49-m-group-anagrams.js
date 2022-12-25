var groupAnagrams = function (strs) {
  const sortedStrs = strs.map((str) => str.split('').sort().join(''));

  const dict = {};
  for (let i = 0; i < sortedStrs.length; i++) {
    if (!dict.hasOwnProperty(sortedStrs[i])) {
      dict[sortedStrs[i]] = [];
    }
    dict[sortedStrs[i]].push(strs[i]);
  }
  return Object.values(dict);
};
