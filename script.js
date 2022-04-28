function chunkArrayInGroups(arr, size) {
  let newArr = []
  let num
  if(arr.length % 2 === 0){
      num = (arr.length / size) - 1
  } else {
      num = Math.floor(arr.length / size)
  }
  for(let i = 0; i < num; i++){
      let arr1 = arr.splice(0, size)
      newArr.push(arr1)
  }
  newArr.push(arr)
  return newArr
}
chunkArrayInGroups(["a", "b", "c", "d", "e", "f"], 2)
