const array = [5, -2, 3, 1, 2];
let n = 3;
let maxSum = 0;

// Start by taking first n elements
let currentSum = 0;
for (let i = 0; i < n; i++) {
  currentSum += array[i];
}
maxSum = currentSum;

// Try all combinations: take i from front and n-i from back
for (let i = 1; i <= n; i++) {
  currentSum = currentSum - array[n - i] + array[array.length - i];
  maxSum = Math.max(maxSum, currentSum);
}

console.log("Maximum sum by picking from both sides:", maxSum);


/*
currentSum = 6
maxSum = 6
Line 14: currentSum = 6 - 3 + 2 = 5
currentSum = 5
maxSum = 6
Line 14: currentSum = 5 - (-2) + 1 = 8
maxSum = 8
// The maximum sum by picking 3 elements from both sides is 8
*/ 