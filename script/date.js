// current date
const updateDate = document.getElementById("current-date");
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const today = new Date();
const dayName = days[today.getDay()];
const monthName = months[today.getMonth()];
const date = today.getDate();
const year = today.getFullYear();
const finalDate = `${dayName} ${monthName} ${date} <br/> ${year}`;
updateDate.innerHTML = finalDate;

const todayTime = today.toLocaleTimeString(undefined, {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
});
