// LINEAR-SEARCH(A, n, x)

function sentinelLinearSearch(a, n, x) {
  const last = a[n - 1];
  a[n - 1] = x;

  let i = 0;
  while (a[i] !== x) {
    i++;
  }

  a[n - 1] = last;
  if (i < n || a[n - 1] === x) {
    return i;
  }

  return null;
}

const arr = [2, 3, 4, 5];
const res1 = sentinelLinearSearch(arr, arr.length, 5);
const res2 = sentinelLinearSearch(arr, arr.length, 6);
console.log("Res1: ", res1);
console.log("Res2: ", res2);
console.log("Test 1: ", res1 === 3);
console.log("Test 2: ", res2 === null);
