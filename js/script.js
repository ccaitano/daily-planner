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
    if (i > currentHour) {
        console.log('future');
    } else if (i === currentHour) {
        console.log('present');
    } else {
        console.log('past');
    }

    var hour = i;
    if (i === 12) {
        amPM = "PM";
    } else if (i > 11) {
        amPM = "PM";
        hour = i-12;
    }
    var hourTemplate = `
    <div class="row">
        <div class="hour">
            <p>${hour}${amPM}</p>
        </div>
        <div class="time-block">
            <textarea class="description"></textarea>
        </div>
        <div>
            <button data-hour="${i}" class="saveBtn">Save</button>
        </div>
    </div>`;
    timeBlocksEl.innerHTML += hourTemplate;
}
//Need to set up a click event listener on the container

//Need to get the hour from the clicked button's (event.target) "data-hour" attribute

//Use the hour to create a key for local storage


