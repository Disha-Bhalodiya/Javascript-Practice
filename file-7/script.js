//oops concepts

//prototypes and props 
let a = {
    name1: "Language",
    language: "JavaScript",
    run: () => {
        alert("self run")
    }
}
console.log(a)


let p = {
    run: () => {
        alert("run")
    }
}

p.__proto__ = {
    name: "Reactjs"
}

a.__proto__ = p
a.run()
console.log(a.name)

//classes and objects

class flight {

    constructor(givenname) {
        console.log("HELLO I AM CONSTRUCTOR..." + " " + givenname) //constructor call every time when methods are run inside the class
        this.name = givenname;
    }
    submit() {
        alert(this.name + ": Your form is submitted for train number: " + this.trainno)
    }
    cancel() {
        alert(this.name + ": This form is cancelled for train number: " + this.trainno)
    }
    fill(givenname, trainno) { //->this accept three argu one-value second-startindex third-endindex
        this.name = givenname
        this.trainno = trainno
    }
}


let DishaFlight = new flight("dhruv")
let rohanFight1 = new flight("manik")
let rohanFlight2 = new flight("kabir")

DishaFlight.fill("Disha", 145316)
rohanFight1.fill("Rohan", 222420)
rohanFlight2.fill("Rohan", 2229211)

DishaFlight.submit()
rohanFight1.submit()
rohanFlight2.submit()
rohanFight1.cancel()