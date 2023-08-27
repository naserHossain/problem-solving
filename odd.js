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