
var mainStr = "str1,str2,str3,str4";

// console.log(mainStr.split(","));


// console.log(("str1,str2,str3,str4".match(/,/g) || []).length);

const str = 'I love freeCodeCamp';
// console.log(str.split("") === str.split("", 19));
// console.log(str.split(""));

const split1 = str.split("", 2);
const split2 = str.split("", 2);

console.log(split1 === split2);

// console.log(str.split("").length);


const str1 = "I love Javascript";
// console.log(str1.split('', 3));

const str3 = "freeCodeCamp";
// console.log(str3.split('').reverse().join(""));
console.log(typeof str1.split('').reverse().join(''));

function charCount(str) {
    let charList = [];
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();



        if (charList[char] > 0) {
            charList[char] += 1;
        } else {
            charList[char] = 1;
        }

    }
    return charList;
}
console.log(charCount("Hello Everyone"));