const beasts = ['ant', 'bison', 'camel', , 'duck', 'bison'];

// console.log(beasts.includes("banana"));

console.log(beasts.indexOf('bison'));

console.log(beasts.indexOf("ant", 2));

console.log(beasts.indexOf("giraffe"));
console.log(beasts.indexOf("duck"));


const vegetables = (veggies, veggie) => {
    if (veggies.indexOf(veggie) === -1) {
        veggies.push(veggie);
    }
    else {
        return "already existed";
    }
    return veggies;

};

const veggies = ["potato", "tomato", "chillies", "green-pepper"];

const result1 = vegetables(veggies, "spinach");
console.log(result1);


const language = ['javascript', "python", "c++", "php", "java", "javascript"];

console.log(language.indexOf("javascript", 1));

console.log(language.indexOf("c sharp"));
