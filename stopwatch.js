const elmnt = document.getElementById("Content");
const title = document.getElementById("title");
let hours = 0;
let minutes = 0;
let seconds = 0;
let stoptime = true;

function startTime(){
    const btn = document.querySelector("button");
    if (stoptime == true){
        stoptime = false;
        time();
    }
}
function stoptTime(){
    if (stoptime == false){
        stoptime = true
    }
}
function restartTime(){
    if(elmnt.innerHTML = "00 : 00 : 00"){
        hours = 0;
        minutes = 0;
        seconds = 0;
    }
}
function time(){
    setInterval(() =>{
        if(stoptime == false){
            seconds = parseInt(seconds)
            minutes = parseInt(minutes)
            hours = parseInt(hours)
                    
            seconds++
            if (seconds == 60){
                minutes = minutes + 1;
                seconds = 0;               
            }
            if (minutes == 60){
                hours = hours + 1;
                minutes = 0;
                seconds = 0;
            }
            if (seconds < 10 || seconds == 0){
                seconds = "0" + seconds;
            }
            if (minutes < 10 || minutes == 0){
                minutes = "0" + minutes;
            }
            if (hours < 10 || hours == 0){
                hours = "0" + hours;
            }
            elmnt.innerHTML = `${hours} : ${minutes} : ${seconds}`
        }
    }, 500);
}