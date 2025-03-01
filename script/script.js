// function for history
function historyAdd(title, time) {
  const historyContainer = document.getElementById("history-content");
  historyContainer.innerHTML += `<div class="p-4 my-2 bg-[#F4F7FF] rounded-3xl">
              <p class="font-medium">
                You have completed the task ${title} at ${time}
              </p>
            </div>`;
}

const body = document.body;
const color = [
  "#F4F7FF",
  "#FF5733",
  "#33FF57",
  "#3357FF",
  "#FF33A8",
  "#A833FF",
  "#33FFF5",
  "#FF8C33",
  "#8C33FF",
  "#33FFA8",
  "#FFA833",
  "#5733FF",
  "#FF3357",
  "#33A8FF",
  "#A8FF33",
  "#F533FF",
  "#33FF8C",
  "#8CFF33",
  "#FFCC33",
  "#3366FF",
  "#FF3366",
  "#66FF33",
  "#33FFCC",
  "#CC33FF",
  "#FF6633",
  "#3366CC",
  "#CCFF33",
  "#6633FF",
  "#33CCFF",
  "#FF33CC",
  "#33FF66",
];
let colorIndex = 0;
body.style.backgroundColor = color[colorIndex];
document
  .getElementById("theme-btn")
  .addEventListener("click", function (event) {
    colorIndex = Math.floor(Math.random() * color.length) + 1;
    body.style.backgroundColor = color[colorIndex];
    document;
  });
const availableTask = document.getElementById("available-task");
const cards = document.querySelectorAll(".card");
let conCV = cards.length;
availableTask.innerHTML = conCV;
let completedTask = parseInt(
  document.getElementById("Completed-task").innerText
);
const button = document.querySelectorAll(".complete-btn");
for (let i = 0; i < cards.length; i++) {
  const button = cards[i].querySelector("button");
  button.addEventListener("click", function (event) {
    const cardTitle = cards[i].querySelector(".card-title").innerText;
    historyAdd(cardTitle, todayTime);
    // console.log(cardTitle);
    // console.log(todayTime);
    alert("board Updated successfully");
    event.target.disabled = true;
    button.classList.remove("bg-blue-600");
    button.classList.add("bg-blue-300");
    conCV = conCV - 1;
    availableTask.innerHTML = conCV;
    completedTask++;
    document.getElementById("Completed-task").innerText = completedTask;

    if (conCV === 0) {
      alert("congrats!! you have completed all the current card");
    }
  });
}
// history clear button
document
  .getElementById("history-clear-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const history = document.getElementById("history-content");
    history.classList.add("hidden");
  });
