//Declare Current Day and Time
var todayDate = moment().format('dddd, MMMM Do, YYYY');
var currentTime = moment().format('h:mm:ss a');

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
    var hour = i;
    if (i === 12) {
        amPM = "PM";
    } else if (i > 11) {
        amPM = "PM";
        hour = i-12;
    }
    var hourTemplate = `
    <div class="row">
        <div>
            ${hour}${amPM}
        </div>
        <div>
            <textarea></textarea>
        </div>
        <div>
            <button data-hour="${i}">Save</button>
        </div>
    </div>`;
    timeBlocksEl.innerHTML += hourTemplate;
}