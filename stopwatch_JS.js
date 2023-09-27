let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
let hour = 0;
let minute = 0;
let second = 0;
let milisec = 0;
let timer = true;
startBtn.addEventListener('click',function(){
    timer = true;
    stopWatch();
});
stopBtn.addEventListener('click',function(){
    timer = false;
});
resetBtn.addEventListener('click',function(){
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    milisec = 0;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('milisec').innerHTML = "00";
});
function stopWatch(){
    if (timer == true){
        milisec++;
        if (milisec == 100){
            second++;
            milisec = 0;
        }
        if (second == 60){
            minute++;
            second = 0;
        }
        if (minute == 60){
            hour++;
            minute = 0;
            second = 0;
        }
        let hrString = hour;
        let minString = minute;
        let secString = second;
        let milisecString = milisec;
        if (hour < 10){
            hrString = "0" + hrString;
        }
        if (minute < 10){
            minString = "0" + minString;
        }
        if (second < 10){
            secString = "0" + secString;
        }
        if (milisec < 10){
            milisecString = "0" + milisecString;
        }
        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('milisec').innerHTML = milisecString;
        setTimeout(stopWatch,10);
    }
}