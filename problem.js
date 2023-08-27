let temperature = [-2, 4, 45, 23, 5, "error", false, true, null, undefined, - 6, -10, 12, 15];


function getHigherAndLower(arr) {
    let higher = arr[0];

    let lower = arr[0];
    for (let i = 0; i < arr.length; i++) {

        if (typeof arr[i] !== "number") continue;


        if (arr[i] > higher) {
            higher = arr[i];
        }

        if (arr[i] < lower) {
            lower = arr[i];
        }

    }
    console.log(higher, lower);
}

getHigherAndLower(temperature);