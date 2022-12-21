function findEvenIndex(arr) {
    const arr1 = [];
    const leftArr = arr.map((n, i) => arr.slice(i));
    const left = leftArr.map((x, y) => {
      if (x.length !== 0) {
        return x.reduce((a, b) => a + b);
      }
    });
    const rightArr = arr.reverse().map((n, i) => arr.slice(i));
    const right = rightArr
      .map((x, y) => {
        if (x.length !== 0) {
          return x.reduce((a, b) => a + b);
        }
      })
      .reverse();
    for (let i = 0; i < left.length; i++) {
      if (left[i] === right[i]) {
        arr1.push(left.indexOf(left[i]));
      }
    }
    return arr1.length === 0 ? -1 : arr1[0];
  }
  findEvenIndex([10,-80,10,10,15,35,20]); //6
  