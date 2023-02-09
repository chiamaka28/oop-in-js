const clock = document.getElementById("clock");
const hour = document.getElementById("hour");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");


function setTime ( ) {
    const clock = newDate ();
    hour.textContent = clock.gethours()
    minutes.textContent = clock.getminutes()
    seconds.textContent = clock.getseconds()

}
setInterval(setTime,1000)

