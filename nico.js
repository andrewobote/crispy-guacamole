function nico(key, message) {
  const arr1 = key.split("").sort();
  const arr2 = [];
  for (let i = 0; i < key.length; i++) {
    arr2.push(arr1.indexOf(key[i]) + 1);
  }
  return arr2;
}
nico("abc", "abcd");

