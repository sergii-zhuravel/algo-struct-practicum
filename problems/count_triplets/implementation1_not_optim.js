function countTriplets(arr, r) {
  if (arr.length < 3) return 0;
  let count = 0;
  for (let i = 0; i < arr.length - 2; i++) {
    const currEl = arr[i];
    const secondEl = currEl * r;
    const thirdEl = secondEl * r;
    let secondElIdx = arr.indexOf(secondEl, i + 1);
    while (secondElIdx && secondElIdx !== -1) {
      let thirdElIdx = arr.indexOf(thirdEl, secondElIdx + 1);
      while (thirdElIdx && thirdElIdx !== -1) {
        count++;
        thirdElIdx = arr.indexOf(thirdEl, thirdElIdx + 1);
      }
      secondElIdx = arr.indexOf(secondEl, secondElIdx + 1);
    }
  }
  return count;
}
