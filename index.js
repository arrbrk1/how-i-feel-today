let buttons = document.querySelectorAll("button");
let colors = ["red", "yellow", "green"];

for (const button of buttons) {
  button.style.backgroundColor = "white";
  for (let i = 0; i <= colors.length; i++) {
    button.addEventListener("click", function () {
      button.style.backgroundColor = colors[i++ % colors.length];
    });
  }
}
