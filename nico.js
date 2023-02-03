function nico(key, message) {
  const arr1 = key.split("").sort();
  const arr2 = [];
  for (let i = 0; i < key.length; i++) {
    arr2.push(arr1.indexOf(key[i]) + 1);
  }
  const regex = new RegExp(`.{1,${key.length}}`, "g");
  const arr3 = message.match(regex);
  const arr4 = [];
  arr3.map((a) => {
    if (a.length < key.length) {
      arr4.push(a.padEnd(key.length, " "));
    } else {
      arr4.push(a);
    }
  });
  const arr5 = [];
  arr4.map((a) => arr5.push(a.split("")));
  console.log(arr2);
  console.log(arr5);
}
nico("crazy", "secretinformation"); //"cseerntiofarmit on  "
