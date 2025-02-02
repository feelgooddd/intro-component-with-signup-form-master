const errorMessage = document.querySelectorAll(".error");
const inputs = document.querySelectorAll("input");
const submitButton = document.getElementById("submit-button");

function Validate() {
  inputs.forEach((input) => {
    if (input.value === "") {
      input.nextElementSibling.classList.remove("hidden");
      input.style.border = "1px solid hsl(0, 100%, 74%)";
      input.style.background = "url(../images/icon-error.svg)";
      input.style.backgroundRepeat = "no-repeat";
      input.style.backgroundPosition = "right";
      input.style.backgroundSize = "20px 20px";
    } else if (input.value !== "") {
      input.style.background = "none";
      input.nextElementSibling.classList.add("hidden");
      input.style.border = "1px solid hsl(246, 25%, 77%)";
    }
  });
}

submitButton.addEventListener("click", Validate);
