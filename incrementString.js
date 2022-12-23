function incrementString(strng) {
  const digits = strng.match(/[0-9]+$/) ? strng.match(/[0-9]+$/) : 0;
  const textLength = digits ? strng.length - digits[0].length : strng.length;
  const text = digits ? strng.slice(0, textLength) : strng;
  const num = Number(digits) + 1;
  return `${text}${num.toString().padStart(strng.length - text.length, "0")}`;
}
incrementString("asd"); //"asd1"
//incrementString("asd300") //"asd301"
//incrementString("1") //"2"
//incrementString("fo99obar99") //"fo99obar100"
