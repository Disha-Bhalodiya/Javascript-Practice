//try catch block error handling


// let data = prompt("name")
// try {
//     if (data === "") throw new Error("data is empty")
//     else alert(`Hi ${data} how do you do today`)
// } catch (e) {
//     alert(e)
// } finally {
//     alert("welcome to the try catch article")
// }


//error object and custom error
// try {
//     let age = prompt("Enter your age")
//     age = Number.parseInt(age)
//     if (age > 150) {
//         throw new ReferenceError("This is probably not true")
//     }
// } catch (error) {
//     console.log(error.name)
//     console.log(error.message)
//     console.log(error.stack)
// }

// console.log("The script is  running")

//finally clause -->main reson for use finally block is it will execute in any situation if log msg,if occurr any error anything---

// const f = () => {
//     try {
//         let a = 0;
//         //console.log(program)
//         console.log("Program ran successfully")
//         return
//     } catch (err) {
//         console.log(hiii)
//         console.log("This is an error")
//         console.log(p)
//     } //finally {
//     console.log("I am a good boy")

//     // }

// }

// f()
// console.log("End");

//fetch api


// let p1 = fetch("https://goweather.herokuapp.com/weather/Ny")
// p1.then((response) => {
//     console.log(response.status)
//     console.log(response.ok)
//     console.log(response.headers)
//     return response.json()
// }).then((value2) => {
//     console.log(value2)
// })

//localstorage  and session storage 


let store = prompt("enter key ")
let store1 = prompt("enter value ")

localStorage.setItem(store, store1)


const username = localStorage.getItem("username");
console.log(username);

localStorage.removeItem("username");

const items = localStorage.length;
console.log(items);



sessionStorage.setItem(store, store1)


const user = sessionStorage.getItem("username");
console.log(username);

sessionStorage.removeItem("username");

const data = sessionStorage.length;
console.log(data);