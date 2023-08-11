import { mergeSortedArray } from "./Array/mergeSortedArray";

function main() {
  const nums1 = [1, 2, 3, 0, 0, 0],
    m = 3,
    nums2 = [2, 5, 6],
    n = 3;
  mergeSortedArray(nums1, m, nums2, n);
  console.log(nums1);
}

main();
