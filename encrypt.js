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
encrypt("the poetry of espionage", 3)

function decrypt(text, n) {
  let result = text;
  if (result === null) {
    return null;
  } else {
    while (n > 0) {
      let firstHalf = result.slice(0, Math.floor(result.length / 2));
      let secondHalf = result.slice(Math.floor(result.length / 2));
      result = "";
      for (let i = 0; i < firstHalf.length; i++) {
        result += secondHalf[i] + firstHalf[i];
      }
      if (secondHalf.length > firstHalf.length) {
        result += secondHalf[secondHalf.length - 1];
      }
      n--;
    }
    return result;
  }
}
decrypt("tstrphyie o onpfao geee", 3)
