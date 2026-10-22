const button = document.getElementById("btn");
const message = document.getElementById("message");

button.addEventListener("click", function () {
  message.textContent = "You clicked the button!";
})
