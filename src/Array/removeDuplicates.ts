// First Solution - O(n^2)
function removeDuplicatesS1(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        nums.splice(j, 1);
        j--;
      }
    }
  }
  return nums.length;
}
export { removeDuplicatesS1 };

// Second Solution - O(n)
function removeDuplicatesS2(nums: number[]): number {
  const uniqueArray = Array.from(new Set(nums));
  nums.length = 0;
  nums.push(...uniqueArray);
  return nums.length;
}
export { removeDuplicatesS2 };
