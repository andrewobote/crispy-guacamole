function nico(key, message) {
  const arr1 = key.split("").sort();
  const arr2 = [];
  for (let i = 0; i < key.length; i++) {
    arr2.push(arr1.indexOf(key[i]) + 1);
  }
  const regex = new RegExp(`.{1,${key.length}}`, "g");
  const arr3 = message.match(regex);
  console.log(arr2);
  console.log(arr3);
}
nico("abc", "abcd");
