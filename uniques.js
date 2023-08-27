function uniqueName(arr) {
    let uniqueName = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueName.includes(arr[i])) {
            uniqueName.push(arr[i]);
        }
    }
    return uniqueName;
}

const result = uniqueName(["robert", "carlos", "joseph", "robert", "carlos"]);
console.log(result);