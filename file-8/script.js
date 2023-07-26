//constructor methods overloading...

// class Employee {
//     constructor(name) {
//         console.log(`${name} - Employee's constructor is here`)
//         this.name = name
//     }
//     login() {
//         console.log(`Employee has logged in`);
//     }

//     logout() {
//         console.log(`Employee has logged out`);
//     }

//     task(name) {
//         console.log(`all task completed here... By ${name} `)
//         this.name = name;
//     }
//     requestLeaves(leaves) {
//         console.log(`Employee has requested ${leaves} leaves - Auto approved`)
//     }
// }

// class Programmer extends Employee {
//     //if derived class not created constructor than js engine create automatically
//     constructor(name) {
//         super(name)
//         console.log(`This is a newly written constructor`)
//     }

//     requestCoffee(x) {
//         console.log(`Employee has requested ${x} coffees`)
//     }
//     requestLeaves(leaves) {
//         super.requestLeaves(4)
//         console.log("One extra is granted")

//     }
// }

// let f = new Employee("Bill Gates")
// f.login()
// f.task("Bill Gates")
// f.logout()
//     //f.requestCoffee()
// let e = new Programmer("Harry")
// e.login()
// e.requestLeaves(3)
// e.requestCoffee(2)

// //inheritance using extends keyword in in js

// class Panda {

//     constructor(name, color) {
//         console.log(`Here is ${name} and his color is ${color}`)
//         this.name = name;
//         this.color = color;
//     }
//     run() {
//             console.log(this.name + `  is running around the park...`)
//         }
//         // run(name){
//         //     console.log( `${name}  is running around the park...`)
//         // }
//     eat() {
//         console.log(this.name + `  is eatting fruits...`)
//     }
//     play() {
//         console.log(this.name + `  is playing with human kid...`)
//     }
// }

// class Animal extends Panda {

//     run() {
//         console.log(this.name `animal is running...`)
//     }
//     hide(name) {
//         console.log(`${name} is playing hide and seek with his other friends...`)
//     }



// }



// let pobj = new Panda("Golu", "white");
// let aobj = new Animal("Lion", "orange");
// //pobj.run("Golu")
// pobj.play()
// pobj.eat()
//     //pobj.hide() //->it will throw an error because parent class can't use child class methods 
// aobj.hide("Lion")


//static method 

// class Car {
//     constructor(brand) {
//         this.carname = brand;
//         console.log(this.carname + "  i am ")
//     }
//     run() {
//         console.log("Car Is Running...")
//     }
//     static hello() { // static method
//         console.log("Hello!! I Am Static Method...")
//     }
// }

// carobj = new Car("BMW");
// carobj.run()
//     //carobj.hello() //->this is static method that's why we can't call using object .
// Car.hello() //static method call directly using class name


//getter ,setter ,instanceOf

class ClassWithGetSet {



    msg = "hello world";
    get msg() {
        return this._msg;
    }
    set msg(x) {
        this._msg = `hello ${x}`;
    }
}

const instance = new ClassWithGetSet();
console.log(instance.msg);

instance.msg = "cake";
console.log(instance.msg);