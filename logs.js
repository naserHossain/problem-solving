function logarithmOfn1(n) {
    while (n > 1) {
        console.log(n);
        n /= 2;
    }
    console.log("done");
}

logarithmOfn1(16);

// function logarithmOfn2(n) {
//     if (n <= 1) {
//         console.log(n);
//         return;
//     }
//     console.log(n);
//     logarithmOfn2(n / 2);
// }

// logarithmOfn2(16);

