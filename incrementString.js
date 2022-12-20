function incrementString(strng) {
  if (!strng.match(/\d/g) || !strng.match(/[^\d]/g)) {
    //return strng.match(/\d/g) ? `${Number(strng) + 1}` : strng + "1";
    if (strng.match(/\d/g)) {
      //return `${Number(strng) + 1}`
      const zero = strng.match(/^[0]+/g).join();
      console.log(zero.length);
      const addNum = `${Number(strng) + 1}`;
      return addNum.padStart(strng.length + zero.length, "0");
    } else {
      return strng + "1";
    }
  } else {
    const numArr = strng.match(/\d/g);
    let zeros = 0;
    numArr.map((n) => {
      if (n === "0") {
        zeros += 1;
      }
    });
    const numStr = numArr.join("");
    const num = Number(numStr) + 1;
    //const numLength = num.toString().length;
    const str = strng.match(/[^\d]/g).join("");
    const strLength =
      Number(numStr) === 0 || numArr[numArr.length - 1] === "9"
        ? str.length - 1
        : str.length;
    const strPad = str.padEnd(strLength + zeros, "0");
    return strPad + num;
  }
}
//incrementString("foobar001") //"foobar002"
//incrementString("foobar00999"); //"foobar01000"
incrementString("009"); //"010"
