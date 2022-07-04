//Declare Current Day and Time
var todayDate = moment().format('dddd, MMMM Do, YYYY');
var currentTime = moment().format('h:mm a');
var currentHour = moment().format('HH');

//Create Day and Time Elements
var todayDateEl = document.getElementById("currentDay");
todayDateEl.textContent = todayDate;
var currentTimeEl = document.getElementById("currentTime");
currentTimeEl.textContent = currentTime;

//Display Time Blocks with Save Button
var timeBlocksEl = document.querySelector(".container");
var amPM = "AM";

for (var i = 9; i <= 17; i++) {
    //Need to get previously saved data for each hour
    var savedKey = JSON.parse(localStorage.getItem("hour-"+i));
    if (savedKey !== null) {
        var data = savedKey;
    } else {
        data = "";
    }

    //Compare current time to hour to determine if hour is in the past, present or future
    if (i > currentHour) {
        timeStamp = "future";
    } else if (i == currentHour) {
        timeStamp = "present";
    } else if (i < currentHour) {
        timeStamp = "past";
    }
    //Set AM/PM values
    var hour = i;
    if (i === 12) {
        amPM = "PM";
    } else if (i > 11) {
        amPM = "PM";
        hour = i-12;
    }
    //Set Template for each timeblock
    var hourTemplate = `
    <div id="hour-${i}" class="row no-gutters">
        <div class="hour col-1">
            <p>${hour}${amPM}</p>
        </div>
        <div class="time-block col-10">
            <textarea id="input-${i}" class="description ${timeStamp}">${data}</textarea>
        </div>
        <div class="col-1">
            <button id="${i}" class="saveBtn">SAVE 💾</button>
        </div>
    </div>`;
    //Create timeblock for each hour
    timeBlocksEl.innerHTML += hourTemplate;   
}

//Need to set up a click event listener on the container
var containerEl = document.querySelector(".container");

//Checks which element on the page was clicked
containerEl.addEventListener("click", function(event) {
    console.log(event.target.id);
    var key = event.target.id;
    var textEl = document.getElementById("input-"+key);
    console.log(textEl.value);
    localStorage.setItem("hour-"+key, JSON.stringify(textEl.value));
});
