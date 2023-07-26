//functions

function web() {
    console.log("i am function");

}
web();

//with parameters

function webparam(appname, com) {
    console.log("application name is" + " " + appname + " " + "by" + " " + com);
}
webparam("instagram", "meta");

//function with params with return values 

function webreturn(appname, comnm) {
    var result = console.log("app name is" + " " + appname + " " + comnm);
    return result;
}
webreturn("threds", "meta");

//template literals -> using this we can write variables with any data inside template literals

const greeting = `Hello ${name}!`;
console.log(greeting);

//escap caharacters

const quote = 'This is a single quote: \'Hello\'.';
console.log(quote);

const tab = 'This is a tab:\t Hello.';
console.log(tab);

const newline = 'This is a newline: \nHello.';
console.log(newline);

//string methods ->NOTE : string is immutable can't change

var a = "Hello World! I Am Javascript! World";
var b = a.length;
console.log(b);

var b = a.toUpperCase();
console.log(b);

var b = a.toLowerCase();
console.log(b);

var b = a.includes("World");
console.log(b);

var b = a.startsWith("Am");
console.log(b);

var b = a.endsWith("World");
console.log(b);

var b = a.search("Javascript");
console.log(b);

var c = "        hello      ";
console.log(c)
console.log(c.trim());

var b = a.match(/World/g); //find globally
console.log(b);

var b = a.indexOf("Am");
console.log(b);

var b = a.lastIndexOf("World");
console.log(b);

var b = a.replace("Javascript", "Reactjs <br>");
console.log(b);

var b = a.charAt(4);
console.log(b);

var b = a.charCodeAt("Hello");
console.log(b);


var b = a.concat(" Technology");
console.log(b);

var b = a.repeat(2);
console.log(b);

var b = a.split("a");
console.log(b);

var b = a.slice(5, 9);
console.log(b);

var b = a.substr(3, 5);
console.log(b);

var b = a.substring(2, 20);
console.log(b);

var d = 20;
var b = d.toString();
console.log(b + 20);

var d = "Hello";
for (let i = 0; i < d.length; i++) {
    console.log(d[i])
}

//arrays methods -> mutable can change

var k = ["manik", "nandani", "kabir", "mukti"];
console.log(k);

k.sort();
console.log(k);

k.reverse();
console.log(k);

var m = ["manik", "navya", "dhruv"];
m.pop();
console.log(m);

m.push("alya");
console.log(m);

var i = ["muskan", "janu", "mosmi"];
i.shift();
console.log(i);

i.unshift("alya");
console.log(i);


var m = ["manik", "navya", "dhruv"];
var i = ["muskan", "janu", "mosmi"];
var k = ["manik", "nandani", "kabir", "mukti"];

var d = m.concat(i, k);
console.log(d);

var f = i.join("+");
console.log(f);

var g = ["dishu", 20, 'H'];

console.log(g);

var h = g.slice(0, 2);
console.log(h);

var t = ["manik", "nandani", "navya", "harshd"];
console.log(t);

var f = t.splice(1, 2, "mukti"); //first starting point then delete no. of element and add new element

console.log(f);

console.log(t);


var l = ["nbvdkjs"];
console.log(l);

var k = Array.isArray(l);


if (Array.isArray(l)) {
    console.log("array");
} else {
    console.log("not array");
}

var a = ["manik", "deep", "darshan", "deep"];

var b = a.indexOf("deep", 2);

console.log(b);

var b = a.lastIndexOf("deep", 2);

console.log(b);

var x = [23, 34, 75, 75, 58];

var y = x.includes(75);

console.log(y);

var x = [2, 4, 59, 8];

var y = x.some(check);

console.log(y);

function check(u) {
    return u => 9;
}

var x = [280, 460, 59, 908];

var y = x.every(check);

console.log(y);

function check(u) {
    return u <= 50;
}

// //find()

var age = [12, 15, 22, 20];
console.log(age);
var b = age.find(check, true);

function check(age) {
    return age > 16;
}
console.log(b);

// //findindex()

var age = [12, 15, 22, 25];
console.log(age);
var b = age.findIndex(check, true);

function check(age) {
    return age >= 23;
}
console.log(b);

//filter()


var age = [12, 15, 22, 25, 12, 28];
console.log(age);
var b = age.filter((age) => age >= 20); //sort way to write code using array function

function check(age) {
    return age >= 20;
}

console.log(b);

//reduce()

const op = age.reduce(function(max, curr) {
    if (max < curr) {
        max = curr;
    }
    return max;

}, 0);
console.log(op);

//map()

const users = [
    { id: 1, name: 'javascript' },
    { id: 2, name: 'bootstrap' },
    { id: 3, name: 'reactjs' },
];
const userIds = users.map((user) => user.name);
console.log(userIds);

//console methods

// console.warn("this is a warning")
// console.error("this is an error")
// console.log("this is print statement of code")
// console.clear()

// console.time() //start timer in the console view
// console.timeEnd() //ends a timer and write the result to the console
// console.assert() //writes a message to the console if an expression evalutes to                  false
// console.table() //used to generate the table in console
// console.count() //it indicat the number that the function hit by this counting                   method
// console.group() //used for create new console group.
// console.groupend() //used for exit the current group.
// console.info() //used for get logging information.