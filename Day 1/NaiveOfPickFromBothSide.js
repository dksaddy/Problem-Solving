const array = [5, -2, 3, 1, 2];
let n = 2;
let result1 = 0;
let result2 = 0;

for (let i = 0; i < n; i++) {
  result1 += array[i];
}

for (let i = array.length - n; i < array.length; i++) {
  result2 += array[i];
}

console.log(result1);
console.log(result2);

if (result1 > result2) {
  console.log("First half is greater");
} else if (result1 < result2) {
  console.log("Second half is greater");
} else {
  console.log("Both halves are equal");
  var p1 = n;
  var p2 = n;
  p1 = n - 1; // p1 = 2
  p2 = n - p1; // p2 = 1

  while (p1 > 0 && p2 <= n - 1) {
    result1 = 0;
    result2 = 0;
    for (let i = 0; i < p1; i++) {
      result1 += array[i];
    }
    for (let i = array.length - p2; i < array.length; i++) {
      result2 += array[i];
    }
    console.log(result1 + " when p1 = " + p1 + " and p2 = " + p2);
    console.log(result2);
    p1--;
    p2++;
  }
}
