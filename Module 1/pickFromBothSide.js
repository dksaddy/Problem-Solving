/*
Problem Description:Pick from both sides!

1. Given an integer array A of size N.
2. You have to pick exactly B elements from either left or right end of the array 
    A to get the maximum sum.
3. Find and return this maximum possible sum.
4. NOTE: Suppose B = 4 and array A contains 10 elements then
5. You can pick the first four elements 
   or can pick the last four elements 
   or can pick 1 from the front and 3 from the back etc. 
   ###you need to return the maximum possible sum of elements you can pick.###
*/

const array = [5, -2, 3, 1, 2];
let n = 3;
//Output: 8

let maxSum = 0;
let currentSum = 0;

for (let i = 0; i < n; i++) {
  currentSum += array[i];
}

maxSum = currentSum;

for (let i = 1; i <= n; i++) {
  currentSum = currentSum - array[n - i] + array[array.length - i];
  maxSum = Math.max(maxSum, currentSum);
}

console.log("Maximum sum by picking from both sides:", maxSum);

