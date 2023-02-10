const clock = document.getElementById("clock");
const hour = document.getElementById("hour");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");


function setTime ( ) {
    const now = new Date();
    
    hour.innerHTML = now.getHours()
    minutes.innerHTML =  now.getMinutes();
    seconds.innerHTML = now.getSeconds()

}
setInterval(setTime,1000)

