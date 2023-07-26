//  CHAPTER-8


//<!-- Q-3 -->

var toggleButton = document.getElementById('bulb');
var isActive = false;

toggleButton.addEventListener('click', function() {
    if (isActive) {
        toggleButton.classList.remove('active');
        toggleButton.classList.add('inactive');
    } else {
        toggleButton.classList.remove('inactive');
        toggleButton.classList.add('active');
    }

    isActive = !isActive;
});