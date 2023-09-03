// O(n^2)
function majorityElement(nums: number[]): number {
  const nonDuplicated = new Set(nums);
  for (const num of nonDuplicated) {
    if (nums.filter((f) => f === num).length >= nums.length / 2) {
      return num;
    }
  }
  return -1;
}

// O(n)
function majorityElement2(nums: number[]) {
  const majority = Math.floor(nums.length / 2);

  if (nums.length <= 2) return nums[0];

  const numCount: Record<number, number> = {};

  for (const num of nums) {
    if (!numCount[num]) numCount[num] = 0;
    if (++numCount[num] > majority) return num;
  }
  return -1;
}

export { majorityElement, majorityElement2 };
