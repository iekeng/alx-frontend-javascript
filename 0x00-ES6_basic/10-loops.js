function appendToEachArrayValue(array, appendString) {
  const arr = [];
  for (let item of array) {
    let value = appendString + item;
    arr.push(value);
}

  return arr;
}
