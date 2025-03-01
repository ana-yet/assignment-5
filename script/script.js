// function for history
function historyAdd(title, time) {
  const historyContainer = document.getElementById("history-content");
  historyContainer.innerHTML += `<div class="p-4 bg-[#F4F7FF] rounded-3xl">
              <p class="font-medium">
                You have completed the task ${title} at ${time}
              </p>
            </div>`;
}

const body = document.body;
const color = [
  "#F4F7FF",
  "#33FF57",
  "#3357FF",
  "#F3FF33",
  "#FF33A8",
  "#A833FF",
];
let colorIndex = 0;
body.style.backgroundColor = color[colorIndex];
document
  .getElementById("theme-btn")
  .addEventListener("click", function (event) {
    colorIndex = (colorIndex + 1) % color.length;
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
