var isPalindrome = function (s) {
  const trimed = s.toLowerCase().match(/[a-z0-9]/g);
  if (!trimed) return true;

  return trimed.join('') === trimed.reverse().join('');
};
