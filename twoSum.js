function twoSum(numbers, target) {
  const arr1 = [];
  numbers.map((a, b) => {
    numbers.map((y, z) => {
      if (a !== y && a + y === target) {
        arr1.push(b, z);
      }
    });
  });
  return [...new Set(arr1)];
}
twoSum([2, 3, 1], 4);
