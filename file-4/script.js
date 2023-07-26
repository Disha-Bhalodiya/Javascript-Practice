//array jokes generator 

var jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "How does a penguin build its house? Igloos it together!",
    "Why did the bicycle fall over? Because it was two-tipink!",
    "What do you call a snowman with a six-pack? An abdominal snowman!",
];

var jokeButton = document.getElementById("jokeButton");
var jokeDisplay = document.getElementById("jokeDisplay");
var currentIndex = 0;

jokeButton.addEventListener("click", function() {
    if (currentIndex >= jokes.length) {
        currentIndex = 0; // Restart from the head joke if all jokes have been displayed
    }
    jokeDisplay.textContent = jokes[currentIndex];
    currentIndex++;
});

//inner html and outter html

var head = document.getElementById("jokeButton");
var final = head.innerHTML;
console.log(final)

var second = document.getElementById("jokeButton");
var final = head.outerHTML;
console.log(final)

var third = document.getElementById("jokeButton");
var final = third.textContent;
console.log(final);

var newElement = document.createElement('div');
newElement.textContent = 'New child element';
var newchild = document.getElementById("jokeButton");
newchild.appendChild(newElement);

newchild.removeChild(newElement);

//attributes methods 

var get = document.getElementById("hello");
var result = get.getAttribute('class');
console.log(result)

get.setAttribute('href', 'google.com');

var result = get.hasAttribute("src");
console.log(result)
var result = get.hasAttribute("href");
console.log(result)

var result = get.removeAttribute("href");
console.log(result)

var get = document.getElementById("hello");
get.classList.add('new-class');

var newset = document.getElementById("new-set")
var val1 = newset.dataset.id;
var val2 = newset.dataset.name;
console.log(val1, val2)

//insertion methods 

var newdiv = document.createElement('div');
newdiv.textContent = 'New div element';
var newset = document.getElementById("new-set")
newset.appendChild(newdiv)

newset.before(newdiv);
newset.after(newdiv);

//insert adjacent
var head = document.getElementById("head");
head.insertAdjacentHTML('beforebegin', '<div class="test">beforebegin</div>');
head.insertAdjacentHTML('beforeend', '<div class="test">beforeend</div>');
head.insertAdjacentHTML('afterbegin', '<div class="test">afterbegin</div>');
head.insertAdjacentHTML('afterend', '<div class="test">afterend</div>');

//class name and classlist


head.className = "green light" //give space between two class name othervise code not execute and  use className keyword for appy css


head.classList.add("pink")
    // head.classList.remove("pink")
    //head.classList.contains("pink")
    //head.classList.toggle("pink")
var hasClass = head.classList.contains('pink');
console.log(hasClass);

//setinterval and settimeout methods 

var timeout = setTimeout((name) => {
    console.log("Hello I Am Timeout method!!! of " + name)
}, 3000, "Javscript")
console.log(timeout)

//clearTimeout(timeout)

var method = setInterval((reson) => {
    for (let i = 0; i <= 1; i++) {
        console.log(i + "My Favourite Place Name Is Ladakh for " + reson)
    }
}, 3000, "Trakking And Bullet Riding yehh!!!")
console.log(method)

//clearInterval(method)

//browser events

var btn = document.getElementById("event");
btn.addEventListener("click", () => {
    alert("hello")
})