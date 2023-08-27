const findOddNumber = (arr) => {
    let emptyArr = [];
    arr.forEach((element) => {
        if (element % 2 !== 0) {
            emptyArr.push(element);
        }
    });
    console.log(emptyArr);
};

console.log(findOddNumber([3, 6, 8, 23, 56, 87, 54, 33, 79, 45, 67]));

// with helper method

const findOddNumber2 = (arr) => {
    let newArr = [];

    function helper(input) {
        if (input === 0) return 0;

        if (input[0] % 2 !== 0) {
            newArr.push(input[0]);
        }
        helper(input.slice(1));
    }

    helper(arr);
    return newArr;
};

console.log(findOddNumber2([3, 6, 8, 23, 56, 87, 54, 33, 79, 45, 67]));