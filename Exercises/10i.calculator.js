let calculation = JSON.parse(localStorage.getItem("calculation")) || "";

function saveMemory() {
  localStorage.setItem("calculation", JSON.stringify(calculation));
}

function showMemory() {
  calculation += JSON.parse(localStorage.getItem("calculation")) || 0;
}

function flushMemory() {
  localStorage.removeItem("calculation");
}

function displayNumbers() {
  let display = document.querySelector(".js-display");
  display.innerHTML = `${calculation}`;
}
