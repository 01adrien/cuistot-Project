const start = document.querySelector("#button");
const popup = document.querySelector(".popup");
const info = document.querySelector(".info");
const svg = document.querySelector("svg");

start.addEventListener("click", (e) => {
  e.preventDefault();
  popup.style.display = "none";
  info.style.display = "block";
  svg.style.display = "block";
});
