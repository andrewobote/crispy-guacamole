function plusMinus(arr) {
  const arr1 = [];
  const arr2 = [];
  const arr3 = [];
  arr.map((n) => {
    if (n > 0) {
      arr1.push(n);
    } else if (n < 0) {
      arr2.push(n);
    } else if (n === 0) {
      arr3.push(n);
    }
  });
  return `${(arr1.length / arr.length).toFixed(6)}
          ${(arr2.length / arr.length).toFixed(6)}
          ${(arr3.length / arr.length).toFixed(6)}`
//   return (
//     (arr1.length / arr.length).toFixed(6) +
//     "<br />" +
//     (arr2.length / arr.length).toFixed(6) +
//     "<br />" +
//     (arr3.length / arr.length).toFixed(6)
//   );
}
plusMinus([-4, 3, -9, 0, 4, 1]);
