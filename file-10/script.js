//arrow function

const sayHello = name => {
    console.log("greeting" + " " + name)
    console.log("hiii")
}

const x = {
    name: "disha",
    role: "Js Developer",
    exp: 5,
    show: function() {
        // let that = this -->using this var we can use this keyword inside other inner function of function and using arrow function don't need to do this it will automatically consider this keyword
        // console.log(this) -->returns window object
        setTimeout(() => {
            console.log(`The name is ${this.name}\nThe role is ${this.role}`)
        }, 2000)
    }
}
sayHello("Disha", "Good Afternoon")
console.log(x.name, x.exp)
x.show()