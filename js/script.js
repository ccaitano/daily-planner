//Declare Current Day and Time
var todayDate = moment().format('dddd, MMMM Do, YYYY');
var currentTime = moment().format('h:mm:ss a');
var currentHour = moment().format('HH');

//Create Day and Time Elements
var todayDateEl = document.getElementById("currentDay");
todayDateEl.textContent = todayDate;
var currentTimeEl = document.getElementById("currentTime");
currentTimeEl.textContent = currentTime;

//Display Time Blocks with Save Button
var timeBlocksEl = document.querySelector(".container");
var amPM = "AM";

console.log(currentHour);
for (var i = 9; i <= 17; i++) {
    //Need to get previously saved data for each hour
    //Compare current time to hour to determine if hour is in the past, present or future
    console.log(i);
    if (i > currentHour) {
        timeStamp = "future";
    } else if (i == currentHour) {
        timeStamp = "present";
    } else if (i < currentHour) {
        timeStamp = "past";
    }

    var hour = i;
    if (i === 12) {
        amPM = "PM";
    } else if (i > 11) {
        amPM = "PM";
        hour = i-12;
    }
    var hourTemplate = `
    <div class="row no-gutters">
        <div class="hour col">
            <p>${hour}${amPM}</p>
        </div>
        <div class="time-block col-6">
            <textarea class="description ${timeStamp}"></textarea>
        </div>
        <div class="col">
            <button data-hour="${i}" class="saveBtn">SAVE 💾</button>
        </div>
    </div>`;
    timeBlocksEl.innerHTML += hourTemplate;
}
//Need to set up a click event listener on the container

//Need to get the hour from the clicked button's (event.target) "data-hour" attribute

//Use the hour to create a key for local storage


