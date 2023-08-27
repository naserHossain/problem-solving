
function sumOfAll(n) {
    let total = 0;
    for (let i = 0; i <= n; i++) { // 5n + 2 bigO(n)

        total += i;
    }
    return total;
}

function sumOfn(n) {
    return n * (n + 1) / 2;  //3n bigO(1)
}

const time1 = performance.now();
// console.log(sumOfAll(1000000));
console.log(sumOfn(1000000));
const time2 = performance.now();

console.log(`time deleytion is ${(time2 - time1) / 1000}`);

console.log("something")

