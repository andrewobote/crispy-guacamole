function rot13(message) {
  const lowerCase = [...Array(26)].map((n, i) => String.fromCharCode(97 + i));
  const upperCase = [...Array(26)].map((n, i) => String.fromCharCode(65 + i));
  const arr1 = [];
  message.split("").map((l) => {
    if (/[a-z]/i.test(l)) {
      if (lowerCase.includes(l)) {
        lowerCase.map((t, i) => {
          if (l === t) {
            arr1.push(i);
          }
        });
      } else if (upperCase.includes(l)) {
        upperCase.map((x, y) => {
          if (l === x) {
            arr1.push(y);
          }
        });
      }
    } else {
      arr1.push(l);
    }
  });
  return arr1
    .map((n, y) => {
      if (typeof n === "number") {
        if (message[y] === lowerCase[n]) {
          return n + 13 >= lowerCase.length
            ? lowerCase[n + 13 - lowerCase.length]
            : lowerCase[n + 13];
        } else if (message[y] === upperCase[n]) {
          return n + 13 >= upperCase.length
            ? upperCase[n + 13 - upperCase.length]
            : upperCase[n + 13];
        }
      } else {
        return n;
      }
    })
    .join("");
}

rot13("test");
