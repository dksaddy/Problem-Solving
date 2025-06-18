A = [2, 3, 1];
B = 2;

const n = A.length;
const x = B;
const arr = A;

const targets = [arr[0], arr[0] + x, arr[0] - x]

for (const [target, index] of targets.entries()) {
    let ok = true;
    console.log(index,` : `,target);
    
    for (let i = 0; i < n; i++) {
        val = arr[i];
        if (val !== target && val + x !== target && val -x !== target) {
            ok = false;
            console.log(`arr[${i}]`, ` Value: ` ,val, target);
            break;
        }
    }
}

