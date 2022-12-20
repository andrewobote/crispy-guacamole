function deleteNth(arr, n) {
  const count = {};
  return arr.filter((i) => {
    count[i] = (count[i] || 0) + 1;
    return count[i] <= n;
  });
}
deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3); //[1, 1, 3, 3, 7, 2, 2, 2]
