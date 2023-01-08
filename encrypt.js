function encrypt(text, n) {
  if (n <= 0) {
    return text;
  }
  var evens = "";
  var odds = "";
  for (var i = 0; i < text.length; i++) {
    if (i % 2 === 0) {
      evens += text[i];
    } else {
      odds += text[i];
    }
  }
  return encrypt(odds + evens, n - 1);
}
encrypt("This is a test!", 3); //" Tah itse sits!"

function encrypt(text, n) {
  let result = text;
  while (n > 0) {
    result = [
      ...result.split("").filter((a, b) => b % 2 != 0),
      ...result.split("").filter((c, d) => d % 2 == 0),
    ].join("");
    n--;
  }
  return result;
}

function decrypt(encryptedText, n) {
  if ((encryptedText && encryptedText.length < 1) || n < 1) {
    return encryptedText;
  } else {
    let num = 0;
    if (n % 2 == 0) {
      num = 0;
    } else {
      num = encryptedText.length % 2 == 0 ? 3 : 2;
    }
    let result = encryptedText;
    while (n + num > 0) {
      result = [
        ...result.split("").filter((a, b) => b % 2 != 0),
        ...result.split("").filter((c, d) => d % 2 == 0),
      ].join("");
      n--;
    }
    return result;
  }
}