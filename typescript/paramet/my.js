function last(arr, elt, start = arr.length) {
  for (let i = start - 1; i >= 0; i--) if (arr[i] == elt) return i;
  return -1;
}
console.log(last([1, 2, 1, 2], 2));
