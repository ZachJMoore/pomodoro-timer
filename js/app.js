const timeLarge = document.querySelector("#timeLarge");
const timeMedium = document.querySelector("#timeMedium");
const timeSmall = document.querySelector("#timeSmall");
const start = document.querySelector("#start");
const pause = document.querySelector("#pause");
const reset = document.querySelector("#reset");
const timeDisplay = document.querySelector("#timeDisplay");

let currentSelection = timeLarge;
let currentTime = 0;
let currentTimeLeft = 0;
let timeRunning = false;

timeLarge.addEventListener("click", function () {
    timeRunning = false;
    currentSelection = timeLarge;
    setTime();
});

timeMedium.addEventListener("click", function () {
    timeRunning = false;
    currentSelection = timeMedium;
    setTime();
});

timeSmall.addEventListener("click", function () {
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
    currentTimeLeft = Number(currentSelection.textContent.substring(2, 0) * 60)
    setTime();
});

function setTime() {
    currentTimeLeft = Number(currentSelection.textContent.substring(2, 0) * 60);
    timeDisplay.textContent = (currentTimeLeft / 60).toFixed(2);
}

function updateTime() {
    if (currentTimeLeft > 0) {
        currentTimeLeft--;
        timeDisplay.textContent = Math.floor((currentTimeLeft / 60)) + "." + (currentTimeLeft % 60);
    } else {
        timeRunning = false;
    }
};


setInterval(function () {
    console.log("this thing is running");
    if (timeRunning) {
        updateTime();
    }
}, 1000)
