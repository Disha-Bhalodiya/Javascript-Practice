//alert box
var d = "dishu";
//alert(d);



//confirm box

//var a = confirm("like website?");

//if (a) {
//  alert("thank you");
//} else {
//alert("ok");
//}


//prompt box

//var a = prompt(""what is your name");
//console.log(a);

//dom",bom and window objects 

// //[1]
// document.getElementById("text")
// //[2]
// document.querySelector(".text-2")
// //[3]
// let g=document.getElementsByTagName("h1");
//innerHTML
//innerText

// //bom

// window.innerHeight;
// window.innerWidth;
// window.history;

//elements nodes

let perent = document.getElementById("main");
let first = perent.firstChild;
console.log(first);
console.log(perent.lastChild);
console.log(perent.childNodes)

//siblings nodes

var paragraph1 = document.getElementById("parent").children[0];

var nextSibling = paragraph1.nextSibling;
console.log(nextSibling);

var previousSibling = paragraph1.previousSibling;
console.log(previousSibling);

var nextElementSibling = paragraph1.nextElementSibling;
console.log(nextElementSibling);


var previousElementSibling = paragraph1.previousElementSibling;
console.log(previousElementSibling);

//change style using child nodes

function bgchange() {
    let div1 = document.getElementById("main");
    let change = div1.nextElementSibling;
    change.style.color = "red";
}
bgchange()

//table navigation

let table = document.body.firstElementChild.nextElementSibling.nextElementSibling;

console.log(table)
console.log(table.rows)
console.log(table.caption)
console.log(table.tHead.firstElementChild)
console.log(table.tFoot)
console.log(table.tBodies)
console.log(table.rows[1].rowIndex)