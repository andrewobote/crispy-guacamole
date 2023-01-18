function diamond(n) {
  let str = "";
  if (n % 2 !== 0 && n > 0) {
    const arr1 = [];
    for (let i = 1; i <= n; i += 2) {
      arr1.push(i);
    }
    const arr2 = [...arr1, ...arr1.reverse().slice(1)];
    const arr3 = [];
    for (let i = Math.floor(n / 2); i >= 0; i -= 1) {
      arr3.push(i);
    }
    const arr4 = [...arr3.slice(0, -1), ...arr3.reverse()];
    arr2.map((y, i) => (str += " ".repeat(arr4[i]) + "*".repeat(y) + "\n"));
    return str.length === 2 ? str.slice(0, -1) : str;
  } else {
    return null;
  }
}

function towerBuilder(nFloors) {
  const arr1 = [];
  for (let a = 0; a < nFloors; a++) {
    arr1.push(new Array());
    arr1[a].push(`${nFloors - a - 1} ${a * 2 + 1} ${nFloors - a - 1}`);
  }
  const arr2 = arr1.map((b) => b[0].split(" "));
  return arr2;
}
towerBuilder(6);