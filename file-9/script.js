//immediatly invoked function

function Hello() { //this is the syntax of regular function
    console.log("Hello I Am Regular Function...")
}
Hello();

(function() { //this is the syntax of immediatly invoked function
    console.log("Hello I Am Immediatly Invoked Function...")
})();

//destructuring of array
const fruits = ['apple', 'banana', 'orange'];
const [firstFruit, secondFruit, thirdFruit] = fruits;
console.log(firstFruit, secondFruit, thirdFruit)

//destructuring of object
const person = {
    carname: 'BMW',
    model: 'model-G',
    color: 'nevy-blue',
};

const { carname, model, color } = person;
console.log(carname, model, color)

//spread operator 

const originalArray = [1, 2, 3];
const originalArray2 = [11, 22, 33];
const originalArray3 = {
    id: 1,
    name: "javascript",
    type: "scripting language"
}
let copiedArray = [...originalArray]; //print array
let copiedArray2 = [...originalArray, ...originalArray2] //combine array
let copiedArray3 = [...copiedArray2, 44, 55, 66]; //add new elements in array

let copiedArray4 = {...originalArray3 }
let copiedArray5 = {...copiedArray3, ...copiedArray4 }
let copiedArray6 = {...copiedArray4, name: "manik", age: 27 }
console.log(copiedArray);
console.log(copiedArray2);
console.log(copiedArray3);
console.log(copiedArray4);
console.log(copiedArray5);
console.log(copiedArray6);

//rest operator 
var colors = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];

var [a, b, ...args] = colors;
console.log(a);
console.log(b);
console.log(args);

//local and global scope of variable

//local scope and block scope
{
    let local = "i am block scope variable";
    console.log(local)
}
//console.log(local)-->throw error

let funscope = () => {
    let fun = "i am function scope variable";
    console.log(fun)
}
funscope();
//console.log(fun)-->throw error

//global scope 
let globalvar = "hello i am global variable";

{
    console.log(globalvar)
}
console.log(globalvar)

//hoisting -->Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function)

//console.log(n)   //error of initialization
//console.log(v)   //undefind
let n = "i am let";
console.log(n)
var v = "i am var";

//clousers-->A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.

function outter() {
    let a = 10;
    let b = 20;
    // console.log("outter  " + a, b)

    let inner = function() {
        console.log("inner  " + a, b)

    }
    return inner;
}
let run = outter();
//console.dir(run) //->used for check clouser scope 
run();