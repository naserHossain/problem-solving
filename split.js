const str = "the quick brown fox jumps over the lazy dogs";

// conso(str.split(' ', 3));
const r1 = str.split('');
console.log(r1[4]);
console.log(r1[10]);

const r2 = str.split('');

console.log(r2[22]);

const r3 = str.split('');
console.log(r3[r3.length - 3]);

console.log(str.split(' ', 6));