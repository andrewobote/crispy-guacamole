function whatIsInAName(collection, source) {
  let result = [];
  collection.map((a) => {
    if (
      collection.length > 1
        ? Object.keys(source).every((b) => Object.keys(a).includes(b)) &&
          Object.values(source).every((c) => Object.values(a).includes(c))
        : Object.keys(a).every((d) => Object.keys(source).includes(d)) &&
          Object.values(a).every((e) => Object.values(source).includes(e))
    ) {
      result.push(a);
    }
  });
  return result;
}
whatIsInAName(
  [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
  { apple: 1, bat: 2 }
);
// [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]
