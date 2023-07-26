//**[TOPIC:1] variables in javacsript with deffrences

// using var keyword we can redeclare variables and reasign values and this is global var of js

var a = 10;
console.log(a);
var a = 20;
console.log(a);

//using let we can declare var once only but reasign values and it is block scope variable


let b = "hii";
console.log(b);

//let b="hello" => this will throw error 

b = "hello";
console.log(b);

//using const declare fixed value only .this is immutable var of js 

const c = "i am fixed";
console.log(c);
// const c= "change"; =>this will throw error

//**[TOPIC:2]data types in js 

//[1]primitive datatypes of javascript 
let num = 27;
console.log(typeof(num));
let str = "world";
console.log(typeof(str));
let empty = null;
console.log(empty);
let bool = true;
console.log(typeof(bool));
let d;
console.log(typeof(d));

// console.log(e); => this will give refrence error because e is not declare in program and we try to print it

//[2]non-primitive datatypes of javascript

//object
let obj = {
    name: "disha",
    role: "web developer",
    age: 20
}

console.log(typeof(obj), obj);

//array => js consider array as object
let arr = [1, "i am array", true];
console.log(typeof(arr));

//**[TOPIC:3] operators and expression

//arithmetic operators
var f = 20;
var g = 10;

console.log((f + g), (f - g), (f * g), (f / g), (f % g));

console.log(++f, f++, --f, f--, f); //21 21 21 21 20

//assignment operators

var x = 10;

console.log(x += 10, x -= 20, x *= 10, x %= 10, x /= 20, x **= y);

//comparision operators

var x = 40;
var y = 45;

console.log(x == y, x === y, x >= y, x <= y, x < y, x > y, x != y, x !== y);

//logical operators
var first = 10;
var second = 15;

console.log(first > second && first == second, first < second || first == second, first > second != first > second);

//if statements

a = 270;
b = 20;

if (a >= b) {
    console.log('a is grater than b');

}

// if  else statements


var n = 10;
var m = 60;

if (n > m && n < m) {
    console.log("b and c is equal");
} else {
    console.log("not equal");
}



//if else ladder

var s = 10;
var q = 40;

if (s >= q) {
    console.log("s is big");
} else if (s == q) {
    console.log("equal");

} else {
    console.log("that wrong");
}


//ternary opreator

var k = 50;
var v = 40;
var n;

(k == v) ? n = "true": n = "false";
console.log(n);

//switch statements

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

//for loops

for (h = 1; h <= 10; h++) {

    console.log(h);

}


//nested for loop

for (var i = 1; i <= 4; i++) {
    for (var j = 1; j <= i; j++) {
        arr.push(j);
        document.write(j);
    }
    document.write("<br>");
}
//for in loop -> print values
var obj1 = {
    fnm: "dishu",
    lnm: "patel",
    age: 20
}
for (var g in obj1) {
    console.log(obj1[g]);
}

//for of loop ->print keys
var arr1 = {
    fnm: "dishu",
    lnm: "patel",
    age: 20
}

for (var g in arr1) {
    console.log(g);
}

//while loop

var a = 1;
while (a < 3) {
    document.write("no is : " + a + "<br>");
    a++;
}

var z = 1;

do {
    document.write("hello" + " " + z + "<br>");
    z++;
}
while (z < 5);