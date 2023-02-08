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
  const arr6 = [];
  for (let y = 0; y < arr5.length; y++) {
    arr6.push(new Array());
    for (let i = 0; i < arr2.length; i++) {
      arr6[y][arr2[i] - 1] = arr5[y][i];
    }
  }
  const result = arr6.map((a) => a.join(""));
  return result.join("");
}
nico("crazy", "secretinformation"); //"cseerntiofarmit on  "

function deNico(key, message) {
  const arr1 = key.split("").sort();
  const arr2 = [];
  for (let i = 0; i < key.length; i++) {
    arr2.push(arr1.indexOf(key[i]) + 1);
  }
  const regex = new RegExp(`.{1,${key.length}}`, "g");
  const arr3 = message.match(regex);
  const arr4 = [];
  arr3.map((a) => arr4.push(a.split("")));
  const arr5 = [];
  for (let y = 0; y < arr4.length; y++) {
    arr5.push(new Array());
    for (let i = 0; i < arr2.length; i++) {
      arr5[y][i] = arr4[y][arr2[i] - 1];
    }
  }
  const result = arr5.map((a) => a.join(""));
  return result.join("").trimEnd();
}
deNico("crazy", "cseerntiofarmit on  ");
