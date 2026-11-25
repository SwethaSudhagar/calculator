const display = document.getElementById("display");
const resultEl = document.getElementById("result");

function appendValue(value) {
  display.value += value;
}

function append(value) {
  appendValue(value);
}

function clearDisplay() {
  display.value = "";
  if (resultEl) resultEl.innerText = "";
}

function clearAll() {
  clearDisplay();
}

function deleteOne() {
  display.value = display.value.slice(0, -1);
}

function deleteLast() {
  deleteOne();
}

function calculate() {
  try {
    if (display.value === "") return;
    let result = eval(display.value);
    if (!isFinite(result)) {
      if (resultEl) resultEl.innerText = "Cannot divide by zero";
      display.value = "Cannot divide by zero";
    } else {
      if (resultEl) resultEl.innerText = "Result: " + result;
      display.value = result;
    }
  } catch (e) {
    display.value = "Error";
    if (resultEl) resultEl.innerText = "Error";
  }
}
