// LINEAR-SEARCH(A, n, x)

function linearSearch(a, n, x) {
  let answer = null;
  for (let i = 0; i < n; i++) {
    if (a[i] === x) {
      answer = i;
    }
  }
  return answer;
}

const arr = [2, 3, 4, 5];
const res1 = linearSearch(arr, arr.length, 5);
const res2 = linearSearch(arr, arr.length, 6);
console.log("Res1: ", res1);
console.log("Res2: ", res2);
console.log("Test 1: ", res1 === 3);
console.log("Test 2: ", res2 === null);
