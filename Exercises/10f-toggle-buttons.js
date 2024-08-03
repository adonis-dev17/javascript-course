function toggleButton(selector) {
  const buttonElem = document.querySelector(selector);

  if (!buttonElem.classList.contains("is-toggled")) {
    buttonElem.classList.add("is-toggled");
  } else {
    buttonElem.classList.remove("is-toggled");
  }
}
