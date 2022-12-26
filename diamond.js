function diamond(n) {
  let str = "";
  if (n % 2 !== 0 && n > 0) {
    const arr1 = [];
    for (let i = 1; i <= n; i += 2) {
      arr1.push(i);
    }
    const arr2 = [...arr1, ...arr1.reverse().slice(1)];
    const arr3 = [];
    for (let i = n - 1; i >= 0; i -= 1) {
      arr3.push(i);
    }
    const arr4 = [...arr3.slice(0, -1), ...arr3.reverse()];
    arr2.map((n, i) => (str += " ".repeat(arr4[i]) + "*".repeat(n) + "\n"));
    return str.length === 2 ? str.slice(0, -1) : str;
  } else {
    return null;
  }
}

