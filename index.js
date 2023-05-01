function updateTime() {
const now = new Date();
let hours = now.getHours();
const minutes = now.getMinutes();
const amPm = hours < 12 ? "AM" : "PM";

// Convert hours to 12-hour format
if (hours > 12) {
  hours -= 12;
} else if (hours === 0) {
  hours = 12;
}

// Add leading zero to minutes if necessary
const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

const timeElement = document.getElementById("time");

timeElement.textContent = `${hours}:${formattedMinutes} ${amPm}`;
}

updateTime();
setInterval(updateTime,10000);