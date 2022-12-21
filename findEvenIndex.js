function findEvenIndex(arr) {
    const leftArr = arr.map((n, i) => arr.slice(i + 1))
    const left = leftArr.map((x, y) => {if(x.length !== 0){return x.reduce((a, b) => a + b)}})
    const rightArr = arr.reverse().map((n, i) => arr.slice(i + 1))
    const right = rightArr.map((x, y) => {if(x.length !== 0){return x.reduce((a, b) => a + b)}})
    console.log(leftArr)
    console.log(left)
    console.log(rightArr)
    console.log(right)
}
findEvenIndex([6,1,1,3,2]) //3