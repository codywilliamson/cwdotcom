document.addEventListener('DOMContentLoaded', () => {
    // set countDown Date

var countDownDate = new Date('May 05, 2020').getTime();
var timer = document.querySelector(".timer");

// set interval to every 1 second
    var countDown = setInterval(() => {
    
    // get todays date and time
    var today = new Date().getTime();

    // get distance between target date and today
    var distance = countDownDate - today;

    // time calculations
    var days = Math.floor(distance / ( 1000 * 60 * 60 * 24 ));
    var hours = Math.floor(distance % ( 1000 * 60 * 60 * 24 ) / ( 1000 * 60 * 60 ));
    var minutes = Math.floor(distance % ( 1000 * 60 * 60 ) / ( 1000 * 60 ));
    var seconds = Math.floor(distance % ( 1000 * 60 ) / 1000);
    var weeks = Math.floor(days / 7);

    // display the result
    timer.innerHTML = days + "d : " + hours + "h : " + minutes + "m : " + seconds + "s";
    document.querySelector(".weeks").innerHTML = weeks + " weeks";

    // if time is finished, display finished message
    if (distance < 0) {
        clearInterval(countDown);
        document.querySelector(".app-container").appendChild("h2").innerHTML = "It's go time!";
    }
    }, 1000);
});