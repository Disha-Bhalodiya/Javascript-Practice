//  CHAPTER-1

//<!-- Q-1 -->
let a = "hello";
let b = 20;
console.log((a + b));

//<!-- Q-2 -->

console.log(typeof(a + b));

//<!-- Q-3 -->

let obj = {
    name: "javascript",
    rate: 10,
    role: "scripting language"
}
console.log(obj);

//  const obj = obj1 => this will thro error

//<!-- Q-4 -->

obj['uses'] = "development";
console.log(obj);

//<!-- Q-5 -->

let dict = {
    name: "disha",
    role: "developer",
    study: "bca"

}

console.log(dict);
console.log(dict.role);

//  CHAPTER-2

//<!-- Q-1 -->

var age = prompt("what is your age?");

if (age > 10 && age < 20) {
    document.write("your age is between 10 and 20")
} else {
    document.write("your age is not between 10 and 20")
}

//<-- Q-2 -->
var day = 3;
switch (day) {
    case 1:
        console.log("monday");
        break;

    case 2:
        console.log("tuesday");
        break;

    case 3:
        console.log("friday");
        break;

    default:
        console.log("wrong");
}


//<-- Q-3 -->
document.write("<br>");
var num = prompt("enter number:");

if (num % 2 == 0 && num % 3 == 0) {
    document.write("your number is divisible by 2 and 3")
} else {
    document.write("your number is not divisible by 2 and 3")
}

//<-- Q-4 -->
document.write("<br>");
var num = prompt("enter number:");

if (num % 2 == 0) {
    document.write("your number is divisible by 2")
} else if (num % 3 == 0) {
    document.write("your number is not divisible by 3")
}