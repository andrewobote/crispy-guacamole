function destroyer() {
  const arr = [...arguments];
  const arr2 = [];
  arr[0].map((a) => !arr.includes(a) && arr2.push(a));
  return arr2;
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);

function shortcut(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  const arr = [];
  str.split("").filter((a) => !vowels.includes(a) && arr.push(a));
  return arr.join("");
}

function high(str) {
  const words = str.split(" ");
  const scores = [];
  let highScore = 0;
  let highWord = "";
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let score = 0;
    for (let j = 0; j < word.length; j++) {
      score += word.charCodeAt(j) - 96;
    }
    scores.push(score);
    if (score > highScore) {
      highScore = score;
      highWord = word;
    }
  }
  return highWord;
}
high("what time are we climbing up the volcano");

function whatIsInAName(collection, source) {
  let result = [];
  collection.map((a) => {
    for (const b in a) {
      for (const c in source) {
        if (b === c && a[b] === source[c]) {
          result.push(a);
        }
      }
    }
  });
  return result;
}

function whatIsInAName(collection, source) {}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" },
  ],
  { last: "Capulet" }
);

function findNextSquare(sq) {
  let result = 0;
  let num = sq + 1;
  if (Number.isInteger(Math.sqrt(sq))) {
    while (result === 0) {
      let i = num++;
      if (Number.isInteger(Math.sqrt(i))) {
        result = i;
      }
    }
  } else {
    return -1;
  }
  return result;
}

function sumDigPow(e, f) {
  const arr1 = [];
  const arr2 = [];
  const arr3 = [];
  for (let g = e; g <= f; g++) {
    arr1.push(g.toString());
  }
  for (let y = 0; y < arr1.length; y++) {
    arr2.push(new Array());
    for (let i = 0; i < arr1[y].length; i++) {
      arr2[y].push(Math.pow(arr1[y][i], i + 1));
    }
  }
  arr2.map(
    (a, b) =>
      a.reduce((c, d) => c + d) === Number(arr1[b]) &&
      arr3.push(a.reduce((c, d) => c + d))
  );
  return arr3;
}
sumDigPow(10, 150);

function towerBuilder(nFloors) {
  const arr1 = [];
  for (let a = 0; a < nFloors; a++) {
    arr1.push(new Array());
    arr1[a].push(`${nFloors - a - 1} ${a * 2 + 1} ${nFloors - a - 1}`);
  }
  const arr2 = arr1.map((b) => b[0].split(" "));
  return arr2;
}
towerBuilder(6);
