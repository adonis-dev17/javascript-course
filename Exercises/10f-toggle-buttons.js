function toggleButton(selector) {
  const buttonElem = document.querySelector(selector);

  if (!buttonElem.classList.contains("is-toggled")) {
    /*before turning on, check if any previous button is on and turn it off */
    turnOffPrevious();
    buttonElem.classList.add("is-toggled");
  } else {
    buttonElem.classList.remove("is-toggled");
  }
}

function turnOffPrevious() {
  const checker = document.querySelector(".is-toggled");

  if (checker) {
    checker.classList.remove("is-toggled");
  }
}
