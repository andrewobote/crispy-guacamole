function whatIsInAName(collection, source) {
  let result = [];
  collection.map((a, b) => {
    console.log(Object.keys(a));
    if (
      Object.keys(source).includes(Object.keys(a)) ||
      Object.values(source).includes(Object.values(a))
    ) {
      result.push(a);
    }
  });
  console.log(Object.keys(source));
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

whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }) 
// [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]