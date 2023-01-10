var merge = function (nums1, m, nums2, n) {
  let z = nums1.length - 1;

  while (n > 0 && m > 0) {
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[z] = nums1[m - 1];
      m--;
    } else {
      nums1[z] = nums2[n - 1];
      n--;
    }
    z--;
  }
  while (n > 0) {
    nums1[z] = nums2[n - 1];
    n--;
    z--;
  }
};
