// Better LINEAR-SEARCH(A, n, x)

function linearSearch(A, n, x) {
  for (let i = 0; i < n; i++) {
    if (A[i] === x) {
      return i;
    }
  }
  return null;
}

const arr = [2, 3, 4, 5];
const res1 = linearSearch(arr, arr.length, 5);
const res2 = linearSearch(arr, arr.length, 6);
console.log("Res1: ", res1);
console.log("Res2: ", res2);
console.log("Test 1: ", res1 === 3);
console.log("Test 2: ", res2 === null);
