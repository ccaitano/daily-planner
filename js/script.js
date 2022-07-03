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

for (var i = 9; i <= 17; i++) {
    //Need to get previously saved data for each hour
    // var key = "hour-"+i;

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
    <div id="hour-${i}" class="row no-gutters ${timeStamp}">
        <div class="hour col">
            <p>${hour}${amPM}</p>
        </div>
        <div class="time-block col-6">
            <textarea id="input-${i}" class="description ${timeStamp}"></textarea>
        </div>
        <div class="btncol col">
            <button id="${i}" class="saveBtn">SAVE 💾</button>
        </div>
    </div>`;
    //Create timeblock for each hour
    timeBlocksEl.innerHTML += hourTemplate;
    //Create Button Elements
    
}

//Need to set up a click event listener on the container
var containerEl = document.querySelector(".container");

containerEl.addEventListener("click", function(event) {
    console.log(event.target.id);
    var key = event.target.id;
    var textEl = document.getElementById("input-"+key);
    console.log(textEl.value);
    // localStorage.setItem("hour-"+key, JSON.stringify(savedData));
});
//Need to get the hour from the clicked button's (event.target) "data-hour" attribute

//Use the hour to create a key for local storage


