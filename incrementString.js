function incrementString(strng) {
    if (!strng.match(/\d/g) || !strng.match(/[^\d]/g)) {
        return strng.match(/\d/g) ? Number(strng) + 1 : strng + "1"
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
        console.log(Number(numStr))
      const str = strng.match(/[^\d]/g).join("");
      const strLength = Number(numStr) === 0 ? str.length - 1 : str.length  
      const strPad = str.padEnd(strLength + zeros, "0");
      return strPad + num;
    } 
  }
  incrementString("foobar00999") //"foobar01000"