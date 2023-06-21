function cipherThis(str) {
  const arr1 = str.split(" ");
  const arr2 = arr1.map((a) => {
    if (a.length > 3) {
      return a[0] + a[a.length - 1] + a.substr(2, a.length - 3) + a[1];
    } else if (a.length === 3) {
      return a[0] + a[a.length - 1] + a[1];
    } else {
      return a;
    }
  });
  const arr3 = arr2.map((a) => a.replace(a[0], a.charCodeAt(0)));
  return arr3.join(" ");
}
cipherThis("Check this out");

function decipherThis(str) {
  const arr1 = str.split(" ");
  const arr2 = arr1.map((a) =>
    a.replace(/^\d+/.exec(a), String.fromCharCode(/^\d+/.exec(a)))
  );
  const arr3 = arr2.map((a) => {
    if (a.length > 3) {
      return a[0] + a[a.length - 1] + a.substr(2, a.length - 3) + a[1];
    } else if (a.length === 3) {
      return a[0] + a[a.length - 1] + a[1];
    } else {
      return a;
    }
  });
  return arr3.join(" ");
}
decipherThis("67kech 116sih 111tu");
