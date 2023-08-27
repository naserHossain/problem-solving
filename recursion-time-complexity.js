

function sumOfArr(arr) {
    if (arr.length === 0) return 0;

    let rest = arr.slice(1);
    return arr[0] + sumOfArr(rest);
}


// Time: bigO(n*n) = n^2
// Space: bigO(n) = n

function sumOfArray2(arr) {
    return helper(arr, 0);
}

const helper = (arr, index) => {

    if (arr.length === index) return 0;

    return arr[index] + helper(arr, index + 1);
};

const inputArr = new Array(8969).fill(1);

const time1 = Date.now();
console.log(sumOfArr(inputArr));
const time2 = Date.now();
console.log(`time elapsed for sumOfArr ${time2 - time1}`);

const time3 = Date.now();
console.log(sumOfArray2(inputArr));
const time4 = Date.now();
console.log(`time elapsed for sumOfArray2 ${time4 - time3}`);