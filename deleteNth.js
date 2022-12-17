// function deleteNth(arr, n) {
//   const duplicates = {};
//   const arr1 = []
//   arr.map((n, i) => (duplicates[n] = (duplicates[n] || 0) + 1));
//   arr.map(y => {
//       if (!arr1.includes(y) || duplicates[y] < n) {
//         arr1.push(y)
//       } 
//     }) 

//   return arr1
// }
// deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3); //[1, 1, 3, 3, 7, 2, 2, 2]

function deleteNth(arr, n) {
  const reg = new RegExp(`\\d{${n - 1}}`, "g");
  return arr.join("").match(reg).join("").split("").map(Number);
}
