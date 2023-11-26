function appendToEachArrayValue(array, appendString) {
  if (appendString !== undefined && array){
  const arr = [];
    for (let item of array) {
    let value = appendString + item;
    arr.push(value);
    }
  }
  return arr;
}
