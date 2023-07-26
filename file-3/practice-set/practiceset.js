//  CHAPTER-6

//<!-- Q-1 -->

let runAgain = true;

const canDrive = (age) => {
    return age >= 18 ? true : false
}

while (runAgain) {
    let age = prompt("Enter your age")
    age = Number.parseInt(age)
    if (age < 0) {
        console.error("Please enter a valid age");
        break;
    }

    if (canDrive(age)) {
        alert("Yes you can drive")
    } else {
        alert("You cannot drive")
    }
    runAgain = confirm("Do you want to play again?")
}

//<!-- Q-1-2 -->

let color = prompt("Enter the page background color")
document.body.style.background = color;

//  CHAPTER-7

//<!-- Q-1 -->

document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red";

//<!-- Q-2 -->

document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green"
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green"

//<!-- Q-3 -->
Array.from(document.getElementsByTagName("li")).forEach((element) => {
    element.style.background = "cyan";
})