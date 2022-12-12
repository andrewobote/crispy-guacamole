function rot13(message) {
  const lowerCase = [...Array(26)].map((n, i) => String.fromCharCode(97 + i));
  const upperCase = [...Array(26)].map((n, i) => String.fromCharCode(65 + i));
  const arr1 = [];
  message.split("").map((l) => {
    if (lowerCase.includes(l)) {
      lowerCase.map((t, i) => {
        if (l === t) {
          arr1.push(i);
        }
      });
    } else {
      upperCase.map((t, i) => {
        if (l === t) {
          arr1.push(i);
        }
      });
    }
  });
  return arr1
    .map((n) =>
      n + 13 > lowerCase.length
        ? lowerCase[n + 13 - lowerCase.length]
        : lowerCase[n + 13]
    )
    .join("");
}

rot13("test");
