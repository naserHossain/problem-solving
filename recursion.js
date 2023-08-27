const countDown = (n) => {
    // console.log(n);

    // for (let i = 0; i <= n; i++) {
    //     sum += i;
    // }

    for (let i = n; i >= 0; i--) {
        // console.log(i);
    }

};
// countDown(10);


const recursionCountDown = (n) => {
    console.log(n);
    n--;
    if (n > 0) {
        recursionCountDown(n);
    }

};
// recursionCountDown(10);


function sumOfNumber(n) {
    let sum = 0;
    for (let i = n; i >= 0; i--) {
        sum += i;
    }
    return sum;
};

console.log(sumOfNumber(15));


function recursiveSumOfNumber(n) {
    console.log(n);
    if (n <= 0) return 0;
    return n + recursiveSumOfNumber(n - 1);
}
console.log(recursiveSumOfNumber(15));