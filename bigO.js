function min5log(n) {
    for (let i = 0; i <= Math.max(5, n); i++) {
        console.log(i);
    }
}

function max5log(n) {
    for (let i = 0; i <= Math.min(5, n); i++) {
        console.log(i);
    }
}

// min5log(10);

max5log(10);