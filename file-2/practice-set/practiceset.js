//  CHAPTER-3

//<!-- Q-1 -->

let marks = {
    "manik": 90,
    "kabir": 78,
    "anubhav": 78,
    "stebin": 92
}


//using Object.keys we can extract keys of object and pass object as an argument in this method
//Object.keys(marks)[i] uing this we can extract whole object with values

for (i = 0; i < Object.keys(marks).length; i++) {
    console.log("marks of" + " " + Object.keys(marks)[i] + " " + "is:" + " " + marks[Object.keys(marks)[i]]);
}

//<!-- Q-2 -->

//using for in loop
for (let key in marks) {
    console.log("marks of" + " " + key + " " + "is:" + marks[key]);
}

//<!-- Q-3 -->
let correctnum = 27;
var i;
// while (i != correctnum) {
//      i = prompt("enter a number:");

// }
console.log("you entered correct number");

//<!-- Q-4 -->

const mean = (a, b, c, d) => {
    return ((a + b + c + d / 4));
}
console.log(mean(10, 10, 10, 10));

//  CHAPTER-4

//<!-- Q-1 -->

var a = "Hello\"";
console.log(a.length);

//<!-- Q-2 -->

var b = "Good Morning";
var c = "good";
console.log(`${b.includes(c) ? "true":"false"}`);

//<!-- Q-3 -->
var a = "Hello World! I Am Javascript! World";

var b = a.startsWith("Am");
console.log(b);

var b = a.endsWith("World");
console.log(b);

//<!-- Q-4 -->
var b = a.toUpperCase();
console.log(b);

var b = a.toLowerCase();
console.log(b);

//<!--Q-5 -->
var b = a.slice(5, 9);
console.log(b);

console.log(a.replace("o", "w"))
console.log(a)

//  CHAPTER-5

//<!-- Q-1 -->


let arr1 = [1, 2, 3, 4, 5, 6, 7, 83]
let a1 = prompt("Enter a number")
a = Number.parseInt(a1)
arr1.push(a)
console.log(arr1)

//<!-- Q-2 -->
let arr2 = [1, 2, 3, 4, 5, 6, 7, 83]

do {
    a = prompt("Enter a number")
    a = Number.parseInt(a)
    arr2.push(a)
} while (a >= 0);
console.log(arr2);

//<!-- Q-3 -->
var age = [12, 15, 22, 25, 12, 28];
console.log(age);
var b = age.filter((age) => age >= 20); //sort way to write code using array function

function check(age) {
    return age >= 20;
}

console.log(b);

//<!-- Q-4 -->
const users = [
    { id: 1, name: 'javascript' },
    { id: 2, name: 'bootstrap' },
    { id: 3, name: 'reactjs' },
];
const userIds = users.map((user) => user.name);
console.log(userIds);
//<!-- Q-5 -->
const op = age.reduce(function(max, curr) {
    if (max < curr) {
        max = curr;
    }
    return max;

}, 0);
console.log(op);