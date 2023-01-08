function whatIsInAName(collection, source) {
  let result = [];
  let num =
    Object.keys(source).length % 2 === 0
      ? Object.keys(source).length - 1
      : Object.keys(source).length;
  collection.map((a, b) => {
    for (let i = 0; i < num; i++) {
      if (
        Object.keys(a).includes(Object.keys(source)[i]) &&
        Object.values(a).includes(Object.values(source)[i])
      ) {
        result.push(a);
      }
    }
  });
  return result;
}

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

whatIsInAName(
  [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
  { apple: 1, bat: 2 }
);
// [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]
