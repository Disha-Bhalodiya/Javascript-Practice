//clock
function updateclock() {

    let a = new Date();
    let hours = zero(a.getHours())
    let minutes = zero(a.getMinutes())
    let seconds = zero(a.getSeconds())

    var time = hours + ":" + minutes + ":" + seconds;

    document.getElementById("time").innerHTML = time;


}

function zero(number) {
    if (number < 10) {
        return "0" + number;
    }
    return number;
}

setInterval(updateclock, 1000)

//callbacks

//*example one----

// function calculateSum(num1, num2, callback) {
//     var sum = num1 + num2;
//     callback(sum);
// }

// function displayResult(result) {
//     console.log("The sum is: " + result);
// }

// calculateSum(5, 10, displayResult);

//*example two----

// function loadscript(src, callback) {

//     let script = document.createElement("script");
//     script.src = src;

//     script.onload = () => {
//         console.log("Hello I Am Loaded..." + src)
//         callback(null, src)
//     }
//     script.onerror = () => {
//         console.log("Hello I Am Loaded..." + src)
//         callback("something wrong here...")
//     }

//     document.body.appendChild(script);

// }

// function Hello(error) {
//     if (error) {
//         return console.log(error)
//     }
//     alert("successfully done...")
// }

// loadscript("https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js", Hello)


//callback-hells

// function cheese(callback) {
//     setTimeout(() => {
//         let cheese = "🧀";
//         console.log("here is your cheese..." + cheese)
//         callback(cheese)
//     }, 2000);
// }

// function makeBase(cheese, callback) {
//     setTimeout(() => {
//         let base = "🥮" + cheese;
//         console.log("here is you pizza base with cheese..." + base)
//         callback(base)
//     }, 2000)
// }

// function bakepizza(base, callback) {
//     setTimeout(() => {
//         let bake = "🍲" + base;
//         console.log("your pizza is coming soon get ready..." + "🤤🤤🤤")
//         callback(bake)
//     }, 2000);
// }

// cheese((cheese) => {
//     makeBase(cheese, (base) => {
//         bakepizza(base, (bake) => {
//             setTimeout(() => {
//                 console.log("here is your pizza..." + bake)
//             }, 1000);
//         })
//     })
// })

//promises
// function loadImage(url) {
//     return new Promise((resolve, reject) => {
//         const image = new Image();

//         image.onload = function() {
//             resolve(image);
//         };

//         image.onerror = function() {
//             reject(new Error('Failed to load image'));
//         };

//         image.src = url;
//     });
// }


// function displayImage(image) {
//     const container = document.getElementById('imageContainer');
//     container.appendChild(image);
// }


// loadImage('https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80')
//     .then((image) => {
//         console.log('Image loaded successfully:', image);
//         displayImage(image);
//         // Display the image on the webpage or perform further actions
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//     });


// const result = new Promise(function(resolve, reject) {

//     //example of compare array with user input using promises
//     var intership = prompt("in which technology you want take internship?");

//     var role = ["react js", "node js", "php"];
//     var dd = role.some(final => final == intership);
//     if (dd == true) {

//         resolve(document.write("you have"))
//     } else {
//         reject(document.write("we can't"))
//     }


// })

// result.then((data) => {
//         document.write(data);

//     })
//     .catch((data) => {
//         document.write(data);
//     })

//promises chaining


// function cheese() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let cheese = "🧀";
//             resolve(console.log("here is your cheese..." + cheese))

//         }, 2000);
//     })
// }

// function makeBase(cheese) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let base = "🥮" + cheese;
//             resolve(console.log("here is you pizza base with cheese..." + base))

//         }, 2000)
//     })
// }

// function bakepizza() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             reject(console.log("your pizza is coming soon get ready..." + "🤤🤤🤤"))

//         }, 2000);
//     })
// }

// cheese().then((cheese) => {
//         return makeBase(cheese)
//     })
//     .then((base) => {
//         return bakepizza(base)
//     })
//     .then(() => {
//         return console.log("ready")
//     }).catch((data) => {
//         console.log("error occurred..." + data)
//     })

//async and wait 

// async function restro() {
//     let delhiw = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(console.log("27deg"))
//         }, 1000)
//     })

//     let bangalorew = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(console.log("20 deg"))
//         }, 7000)
//     })

//     let bangalore1 = await bangalorew;
//     let delhi1 = await delhiw;

//     return [delhi1, bangalore1]
// }
// let a = restro()
// console.log(a)

//promises APIs
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Value 1");
    }, 1000);
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Value 2");
        //reject(new Error("Error"));
    }, 2000);
});

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Value 3");
    }, 3000);
});

//let promise_all = Promise.all([p1, p2, p3]) //->one promises reject then print error msg

//let promise_all = Promise.allSettled([p1, p2, p3]) //->when any of them promises is rejected till this one print all promises with status and value

//let promise_all = Promise.race([p1, p2, p3]) //->faster loading and print one result which take short time to print data 

//let promise_all = Promise.resolve(6)
let promise_all = Promise.reject(new Error("Hey"))
promise_all.then((value) => {
    console.log(value)
})