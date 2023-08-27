function arr1(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

const res1 = arr1([2, 4, 6, 8, 10]);
console.log(res1);


function arr2(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2);
    }
    return newArr;
}

const res2 = arr2([2, 4, 6, 8, 10]);
console.log(res2);