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

document.getElementById("Blogs").addEventListener("click", function (event) {
  window.location.href = "../qna.html";
});
