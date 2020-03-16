Count Triplets problem from Hackerrank

https://www.hackerrank.com/challenges/count-triplets-1/

### Brut force algorithm

We can get each element in the array [0..n]

This element is - a,
second element is - a _ r;
third element is - a _ r \* r;

For each element a, calculate second possible element in the triplet (a \* r) and find it starting from the current position of the first element (a),

if it's found - calculate third possible element( a _ r _ r) starting from the second element position and find it in the array, if it's found - find the next possible third element (starting form the last possition).

### Optimized solution:

1. According to the requirements the numbers can be very big, so a _ r _ r - can be very big number,
   we can calculate triplets in another way:

first element: a / k
second elemnt: a
third element: a \* k

Then we could do the same brut force approach, but we can improve the algorithm if we cound each element as the second element, and then find first element in the left part of the arrary and the third element in the right part of the array.

We can iterate through the array [0..n - 1], each element can be our a element (second element in the triplet), then to count the number of possible triplets with this number we can calculate how many first elements in the left part of the array (current element splits the array) and how many third elements in the right part of the array.

Then the count of the triplems with this element will be:
count = countOfFirstElement \* countOfThirdElement

IF the first element and the third element were found.

We will need to search for the element in the left part of the array and in the right part of the array - again and again. So we can use HashTable data structure to improve the performance.

Calculate leftMap and rightMap. leftMap can be empty initially. In the rightMap we should add all elements from the array and the number of their occurance in the array.

rightMap[el] = countEl
