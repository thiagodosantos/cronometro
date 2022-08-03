
let hours = 0;
let minutes = 0;
let seconds = 0;

const interval;
let monitor = 0;

function start() {
    if (monitor == 0) {
        timer();
        interval = setInterval(timer, 20);
        monitor++;
    }
}

function pause() {
    clearInterval(interval);
    monitor = 0;
}

function stop() {
    clearInterval(interval);
    hours = 0;
    minutes = 0;
    seconds = 0;
    monitor = 0;

    document.getElementById('counter').innerText = '00:00:00';
}

function timer() {
    seconds++;

    if (seconds == 60) {
        minutes++;
        seconds = 0;

        if (minutes == 60){
            minutes = 0;
            hours++;
        }
    }

    let format = (hours < 10 ? '0' + hours : hours) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds); 
    document.getElementById('counter').innerText = format;
}