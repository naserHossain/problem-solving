function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (i = 0; i < arr1.length; i++) {
        let currentIndex = arr2.indexOf(arr1[i] * arr1[i]);
        if (currentIndex === -1) {
            return false;
        } else {
            arr2.splice(currentIndex, 1);

        }

    }
    return true;
}

console.log(same([2, 3, 4], [4, 16, 6]));
