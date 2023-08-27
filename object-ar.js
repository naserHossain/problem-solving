const myObj = {
    name: "shawon",
    class: "poor",
    job: "student",
    friends: ['robert', "joseph", "micheal", 'nicholas']
};

console.log(Object.keys(myObj));
console.log(myObj.hasOwnProperty("job"));


const arr = ["robert", "jennifer", "gomez", "carlos"];
arr.unshift("shawon");
arr.pop();
console.log(arr);