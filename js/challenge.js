let count = 0
let counter = document.getElementById('counter');
let likeBtn = document.getElementById('heart');
let minusBtn = document.getElementById('minus');
let plusBtn = document.getElementById('plus');
let pauseBtn = document.getElementById('pause');
let clicks = 0

//Counter Setup-------------------------------------------------------------
function countUp() {
    count++;
    counter.innerText = count;
}
function autoCount() {
    autoCounter = setInterval(countUp, 1000)
}
document.addEventListener("DOMContentLoaded", function() {
    autoCount()
    setInterval(() => clicks = 0, 1000)
})

//Plus Button Setup--------------------------------------------------------
function plusButton () {
    clearInterval(autoCounter);
    countUp();
    autoCount();
}
plusBtn.addEventListener('click', function (){
    plusButton();
})

//Minus Button Setup -------------------------------------------------------
function minusButton () {
    clearInterval(autoCounter);
    count--;
    counter.innerText = count;
    autoCount()
}
minusBtn.addEventListener('click', function () {
    minusButton();
})

//Like Button Setup---------------------------------------------------------
function likeButton (clicks) {
    if (clicks <= 1) {
        let li = document.createElement('li');
        document.querySelector('.likes').appendChild(li);
        li.setAttribute('id', counter.innerText)
        document.getElementById(counter.innerText).innerText = `${count} has been liked ${clicks} time`
    } else if (clicks >= 2) {
        document.getElementById(counter.innerText).innerText = `${count} has been liked ${clicks} times`
    }
}
document.getElementById('heart').addEventListener('click', function() {
++clicks;
likeButton(clicks);
})

    

//Pause Button Setup-------------------------------------------------------

function pauseButton () {
    if (pauseBtn.innerText = 'pause') {
    clearInterval(autoCounter);
    plusBtn.disabled = true;
    minusBtn.disabled = true;
    likeBtn.disabled = true;
    pauseBtn.innerText = 'resume'
    } else {
    autoCount();
    plusBtn.disabled = false;
    minusBtn.disabled = false;
    likeBtn.disabled = false;
    pauseBtn.innerText = 'pause'
    }
}
pauseBtn.addEventListener('click', function () {
    pauseButton();
});



