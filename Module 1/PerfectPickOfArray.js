const A = [
5, 1, 4, 3, 6, 8, 10, 7, 9
];

const n = A.length;
const rightMin = new Array(n);
rightMin[n - 1] = A[n - 1];

for (let i = n - 2; i >= 0; i--) {
  rightMin[i] = Math.min(A[i + 1], rightMin[i + 1]);
}

let leftMax = A[0];

for (let i = 1; i < n - 1; i++) {
  if (A[i] > leftMax && A[i] < rightMin[i]) {
    console.log("dfd"+A[i], leftMax, rightMin[i]);
    
  }
  leftMax = Math.max(leftMax, A[i]);
  console.log(A[i], leftMax, rightMin[i]);
}


console.log(A, leftMax, rightMin)