// Define variables to hold time values
let seconds = 0;
let minutes = 0;
let hours = 0;

// Define variables to hold "timer" value
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

// Define variable to hold setInterval() function
let interval = null;

// Define variable to hold stopwatch status
let status = "stopped";

// Stopwatch function
function stopWatch(){

    seconds++; // Increment seconds

    // Logic to determine when to increment next value
    if(seconds / 60 === 1){
        seconds = 0; // Reset seconds
        minutes++; // Increment minutes

        if(minutes / 60 === 1){
            minutes = 0; // Reset minutes
            hours++; // Increment hours
        }

    }

    // If seconds/minutes/hours are only one digit, 
    // add a leading 0 to the value
    if(seconds < 10){
        displaySeconds = "0" + seconds.toString();
    }
    else{
        displaySeconds = seconds;
    }

    if(minutes < 10){
        displayMinutes = "0" + minutes.toString();
    }
    else{
        displayMinutes = minutes;
    }

    if(hours < 10){
        displayHours = "0" + hours.toString();
    }
    else{
        displayHours = hours;
    }

    // Display updated time values to user
    document.getElementById("timer").innerHTML = displayHours + " : " + displayMinutes + " : " + displaySeconds;

}

// Start/Stop function
function startStop(){

    if(status === "stopped"){

        // Start the stopwatch by calling the setInterval() function
        interval = window.setInterval(stopWatch, 1000);
        document.getElementById("startStop").innerHTML = "Stop";
        status = "started"; // Toggle status

    }
    else{

        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        status = "stopped"; // Toggle status

    }

}

// Function to reset the stopwatch
function reset(){

    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("timer").innerHTML = "00 : 00 : 00";
    document.getElementById("startStop").innerHTML = "Start";

}