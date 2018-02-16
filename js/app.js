const timeLarge = document.querySelector("#timeLarge");
const timeMedium = document.querySelector("#timeMedium");
const timeSmall = document.querySelector("#timeSmall");
const start = document.querySelector("#start");
const pause = document.querySelector("#pause");
const reset = document.querySelector("#reset");
const timeDisplay = document.querySelector("#timeDisplay");
const title = document.querySelector("title");

let currentSelection = timeLarge;
let currentTime = 0;
let currentTimeLeft = 0;
let timeRunning = false;
let soundOn = false;
let timerDone = new Audio("/audio/timer-done.mp3");

timeLarge.addEventListener("click", function () {
    soundOn = false;
    timeRunning = false;
    currentSelection = timeLarge;
    setTime();
});

timeMedium.addEventListener("click", function () {
    soundOn = false;
    timeRunning = false;
    currentSelection = timeMedium;
    setTime();
});

timeSmall.addEventListener("click", function () {
    soundOn = false;
    timeRunning = false;
    currentSelection = timeSmall;
    setTime();
});

start.addEventListener("click", function () {
    if (!timeRunning) {
        timeRunning = true;
    }
});

pause.addEventListener("click", function () {
    if (timeRunning) {
        timeRunning = false;
    }
});

reset.addEventListener("click", function () {
    timeRunning = false;
    soundOn = false;
    currentTimeLeft = Number(currentSelection.textContent.substring(2, 0) * 60);
    setTime();
});

function setTime() {
    currentTimeLeft = Number(currentSelection.textContent.substring(2, 0) * 60);
    timeDisplay.textContent = (currentTimeLeft / 60).toFixed(2);
    title.textContent = (currentTimeLeft / 60).toFixed(2);
}

function updateTime() {
    if (currentTimeLeft > 0) {
        currentTimeLeft--;
        timeDisplay.textContent = Math.floor((currentTimeLeft / 60)) + ":" + (currentTimeLeft % 60);
        title.textContent = (Math.floor((currentTimeLeft / 60)) + ":" + (currentTimeLeft % 60)) + " Time remaining";
    } else if (currentTimeLeft === 0) {
        timeRunning = false;
        soundOn = true;
    };
};


setInterval(function () {
    console.log("this thing is running");
    if (timeRunning) {
        updateTime();
    }
    if (currentTimeLeft === 0 && soundOn === true) {
        timeRunning = false;
        timerDone.play();
    }
}, 1000)
