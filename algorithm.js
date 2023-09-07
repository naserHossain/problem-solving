
// write a function that take an array and a value, find the value from the array and return the index of this value.

function linerSearch(arr, val) {
    // arr.forEach((element, index) => {
    //     if (element === val) {
    //         return index;
    //     } else {
    //         return - 1;
    //     }
    // });


    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) return i;
    }
    return - 1;
};

console.log(linerSearch([2, 45, 65, 67, 23, 10, 76], 10));