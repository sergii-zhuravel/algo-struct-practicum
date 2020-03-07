function countTriplets(arr, r) {
  if (arr.length < 3) return 0;
  let count = 0;
  const leftMap = {};
  const rightMap = {};
  for (let i = 0; i < arr.length; i++) {
    rightMap[arr[i]] = rightMap[arr[i]] ? rightMap[arr[i]] + 1 : 1;
  }

  // a / r  : a : a * r
  for (let i = 0; i < arr.length - 1; i++) {
    const second = arr[i];
    const first = second / r;
    // remove current element from the right map
    rightMap[arr[i]] = rightMap[arr[i]] ? rightMap[arr[i]] - 1 : 0;
    if (leftMap[first]) {
      const third = second * r;
      if (rightMap[third]) {
        count = count + leftMap[first] * rightMap[third];
      }
    }
    // add current element to the left Map
    leftMap[arr[i]] = leftMap[arr[i]] ? leftMap[arr[i]] + 1 : 1;
  }

  return count;
}
