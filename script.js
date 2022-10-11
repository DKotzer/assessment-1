let total = 0;
let plusEl = document.querySelector(".plus");
let minusEl = document.querySelector(".minus");
let countEl = document.querySelector(".count-number");
let inputValue = document.querySelector("#input-value").value; //not sure why this doesnt work but wasted a bunch of time on it
let inputTest = document.querySelector("#input-value");

inputTest.value = 1;
plusEl.addEventListener("click", plus);
minusEl.addEventListener("click", minus);

function minus() {
  total -= Number(inputTest.value);
  render();
  inputValue = 0;
}

function plus() {
  total += Number(inputTest.value);
  render();
  inputValue = 0;
}

function render() {
  countEl.textContent = total;
  if (total > 0) {
    countEl.classList.add("green");
    countEl.classList.remove("red");
    countEl.classList.remove("purple");
  }
  if (total < 0) {
    countEl.classList.add("red");
    countEl.classList.remove("green");
    countEl.classList.remove("purple");
  }
  if (total == 0) {
    countEl.classList.add("purple");
    countEl.classList.remove("red");
    countEl.classList.remove("green");
  }
  inputValue = 0;
}
