Prefix Sum Algorithm

https://en.wikipedia.org/wiki/Prefix_sum

Udacity video: https://www.youtube.com/watch?v=wGtO8pFo-cs

A[0:7] = [3, 4, -2, -1, 7, -5, 6, 4]
PrefixSumA[0:7] = [3, 7, 5, 4, 11, 6, 12, 16]

So we can find any sum of the array A, like:

SUM_A[0:3] = PrefixSumA[3] = 4
SUM_A[2:4] = PrefixSumA[4] - PrefixSumA[2 - 1] = 11 - 7 = 4

So now we can sum any RANGE in A with O(1) using the PrefixSumA

For m numbers of finding the range sum, for n elemets array, we have O(n) time complexity.

Without this algorithm we would have O(n \* m) time complexity
