const productOfConsequtiveElements = (A) => {
  let currentProduct = 0;
  let maxProduct = 0;
  for (let i = 0; i < A.length - 2; i++) {
    currentProduct = A[i] * A[i + 1] * A[i + 2];
    maxProduct = Math.max(currentProduct, maxProduct);
  }
  return maxProduct;
};

const anyHighestProduct = (A) => {
  A = A.sort((a, b) => a - b);
  let n = A.length;
  let max1 = A[n - 1] * A[n - 2] * A[n - 3];
  let max2 = A[0] * A[1] * A[n - 1];
  let maxProduct = Math.max(max1, max2);
  return maxProduct;
};

A = [1, 3, 5, 2, 8, 0, -1, -3];

console.log(productOfConsequtiveElements(A));
console.log(anyHighestProduct(A));
