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
// var displayTimeBlocksEl = document.createElement('div');
var hour = moment().format('h a');
var hourTemplate = `
    <div class="row">
        <div>
            ${hour}
        </div>
        <div>
            <textarea></textarea>
        </div>
        <div>
            <button data-hour="${i}">Save</button>
        </div>
    </div>`;

for (var i = 9; i <= 18; i++) {
    //Need to get previously saved data for each hour
    hour = i;
    console.log(hour);
    timeBlocksEl.innerHTML += hourTemplate;

}