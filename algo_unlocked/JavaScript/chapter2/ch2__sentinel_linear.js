// LINEAR-SEARCH(A, n, x)

function sentinelLinearSearch(a, n, x) {
  const lastIdx = n - 1;
  const last = a[lastIdx];
  a[lastIdx] = x;

  let i = 0;
  while (a[i] !== x) {
    i++;
  }

  a[lastIdx] = last;
  if (i < lastIdx || a[lastIdx] === x) {
    return i;
  }

  return null;
}

const arr = [2, 3, 4, 5];
const res1 = sentinelLinearSearch(arr, arr.length, 3);
const res2 = sentinelLinearSearch(arr, arr.length, 6);
console.log("Res1: ", res1);
console.log("Res2: ", res2);
console.log("Test 1: ", res1 === 1);
console.log("Test 2: ", res2 === null);
