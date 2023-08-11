// O(n * log(n))
function mergeSortedArray(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void {
  for (let i = m; i < m + n; i++) {
    nums1[i] = nums2[i - m];
  }
  nums1.sort((a, b) => a - b);
}

export { mergeSortedArray };
