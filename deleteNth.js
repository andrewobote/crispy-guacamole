function deleteNth(arr, n) {
  const duplicates = {};
  arr.map((n, i) => (duplicates[n] = (duplicates[n] || 0) + 1));
}
deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3); //[1, 1, 3, 3, 7, 2, 2, 2]
