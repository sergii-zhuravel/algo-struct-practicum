Frequency Queries problem from Hackerrank

https://www.hackerrank.com/challenges/frequency-queries

### Brut force algorithm

Fullfill commands, add and remove elements from array.
When we have command 3 - count how many elements we have for each number and compare with required frequency number.

### Improvement

Use a hashmap to store frequency of all element. When we have command 3 - get values of the hashmap and search for required nuumber of frequency.

### Optimized solution:

Use two hashmaps to track number -> frequency and frequency -> numbers, this way we can check if we have required frequency in O(1)
