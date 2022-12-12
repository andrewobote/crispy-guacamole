const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const arr3 = [7, 8, 9]
// [1, 2, 3, 6, 9, 8, 7, 4, 5]
const arr4 = [arr1, arr2, arr3]
const arr5 = []
arr4.map(i => console.log(i[i.length - 1]))
//console.log(arr5)
