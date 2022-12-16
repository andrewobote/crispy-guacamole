function twoSum(numbers, target) {
  const arr1 = [];
  numbers.map((a, b) => {
    numbers.map((y, z) => {
      if (b !== z && a + y === target) {
        arr1.push(b, z);
      }
    });
  });
  return [...new Set(arr1)].slice(0, 2);
}
