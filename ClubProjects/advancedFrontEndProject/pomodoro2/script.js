// Selecting elements
var startBtn = document.querySelector("button.start");
var msg = document.querySelector(".msg");
var increaseWorkBtn = document.querySelector(".work button.increase");
var decreaseWorkBtn = document.querySelector(".work button.decrease");
var workTime = document.querySelector(".work .time");
var work = document.querySelector(".work");
var increaseBreakBtn = document.querySelector(".break button.increase");
var decreaseBreakBtn = document.querySelector(".break button.decrease");
var breakTime = document.querySelector(".break .time");
var breaK = document.querySelector(".break");



//Adding event Lisitiners
startBtn.addEventListener("click", startTimer);
increaseWorkBtn.addEventListener("click", () => {
    increaseWorkTime = true;
    workTimer();
});
decreaseWorkBtn.addEventListener("click", () => {
    increaseWorkTime = false;
    workTimer();
});
increaseBreakBtn.addEventListener("click", () => {
    increaseBreakTime = true;
    breakTimer();
});
decreaseBreakBtn.addEventListener("click", () => {
    increaseBreakTime = false;
    breakTimer();
});



//local variabkes
var increaseWorkTime = false;
var increaseBreakTime = false;
var canNotChangeTimer = false;


//functions
function startTimer() {
    canNotChangeTimer = true;
    var workClock = work.innerText;
    var breakClock = breaK.innerText;
    var regex = /(\d{1,2}):(\d{1,2})/;
    var time = regex.exec(workClock);
    var minutes = time[1];
    var seconds = time[2];
    msg.innerText = "MSG :  #Timer Started.";

    var clearTimer = minutes * 60 * 1000;

    console.log(clearTimer);

    if (minutes == 0 && seconds == 0)
        startBreakTimer();

    var data = setInterval(ticTic, 1000);

    setTimeout(() => {
        clearInterval(data);
        console.log("cleared timer");
        if (minutes == 0 && seconds == 1) {
            seconds = "00";
            work.innerText = minutes + ":" + seconds;
            startBreakTimer();
        }
    }, clearTimer + 2);

    function ticTic() {
        seconds--;
        if (seconds <= 0) {
            minutes--;
            seconds = 59;
        }
        regex = /^\d$/;
        if (regex.test(minutes)) {
            console.log(minutes);
            minutes = "0" + minutes;
        }
        if (regex.test(seconds)) {
            console.log(seconds);
            seconds = "0" + seconds;
        }
        work.innerText = minutes + ":" + seconds;
    }

    function startBreakTimer() {
        console.log("Break timer started.");
        msg.innerText = "MSG :  #Break Timer Started";
        console.log(breakClock);
        regex = /(\d{1,2}):(\d{1,2})/;
        var time = regex.exec(breakClock);
        console.log(time);
        var minutes = time[1];
        var seconds = time[2];
        console.log("Break time : ", minutes, seconds);

        clearTimer = minutes * 60 * 1000;

        data = setInterval(breakTicTic, 1000);

        setTimeout(() => {
            clearInterval(data);
            console.log("cleared timer");
            if (minutes == 0 && seconds == 1) {
                seconds = "00";
                breaK.innerText = minutes + ":" + seconds;
                msg.innerText = "MSG : #Pomodoro cycle completed."
                canNotChangeTimer = false;
            }
        }, clearTimer);

        function breakTicTic() {
            seconds--;
            if (seconds <= 0) {
                minutes--;
                seconds = 59;
            }
            regex = /^\d$/;
            if (regex.test(minutes)) {
                console.log(minutes);
                minutes = "0" + minutes;
            }
            if (regex.test(seconds)) {
                console.log(seconds);
                seconds = "0" + seconds;
            }
            breaK.innerText = minutes + ":" + seconds;
        }
    }
}




function workTimer() {
    if (!canNotChangeTimer) {
        var time = workTime.innerText;
        msg.innerText = "MSG : #";
        if (increaseWorkTime) {
            time++;
            if (time > 59) {
                time = 59;
                msg.innerText = "MSG : #Cannot increase above 59";
            }
            if (time < 10) {
                time = "0" + time;
            }
        } else {
            time--;
            if (time <= 0) {
                time = "00";
                msg.innerText = "MSG : #Cannot decrease below 0";
            } else if (time < 10) {
                time = "0" + time;
            }
        }
        workTime.innerText = time;
        work.innerText = time + ":00";
    } else {
        msg.innerText = "MSG : #Cannot change timer, once the work has started.";
        setTimeout(() => {
            msg.innerText = "MSG : #Timer is running.";
        }, 1500);
    }
}


function breakTimer() {
    if (!canNotChangeTimer) {
        var time = breakTime.innerText;
        msg.innerText = "MSG : #";
        if (increaseBreakTime) {
            time++;
            if (time > 59) {
                time = 59;
                msg.innerText = "MSG : #Cannot increase above 59";
            }
            if (time < 10) {
                time = "0" + time;
            }
        } else {
            time--;
            if (time <= 0) {
                time = "00";
                msg.innerText = "MSG : #Cannot decrease below 0";
            } else if (time < 10) {
                time = "0" + time;
            }
        }
        breakTime.innerText = time;
        breaK.innerText = time + ":00";
    } else {
        msg.innerText = "MSG : #Cannot change timer, once the work has started."
        setTimeout(() => {
            msg.innerText = "MSG : #Timer is running.";
        }, 1500);
    }
}