function isAnagram(s: string, t: string): boolean {
  const sArr = s.split('').sort();
  const tArr = t.split('').sort();
  return sArr.join('') === tArr.join('');
}
