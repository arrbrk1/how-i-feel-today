let buttons = document.querySelectorAll("button");
let colors = ["red", "yellow", "green"];

for (const button of buttons) {
  button.style.backgroundColor = "white";
  for (let i = 0; i <= colors.length; i++) {
    button.addEventListener("click", function () {
      localStorage.setItem("curColor", colors[i++ % colors.length]);
      button.style.backgroundColor = localStorage.getItem("curColor");

      // console.table(localStorage.getItem("curColor"));
    });
  }
}
