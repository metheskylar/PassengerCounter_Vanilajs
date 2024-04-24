// variables
const countEl = document.querySelector("#count-el");
const incrementBtnEl = document.querySelector("#increment-btn-el");
const decrementBtnEl = document.querySelector("#decrement-btn-el");
const saveBtnEl = document.querySelector("#save-btn-el");
const saveEl = document.querySelector("#save-el");

let count = 0;

countEl.textContent = count;

// functions
const increment = () => {
  count++;
  countEl.textContent = count;
};
const decrement = () => {
  if (count > 0) {
    count--;
  }
  countEl.textContent = count;
};
const save = () => {
  const countStr = count + " - ";
  saveEl.textContent += countStr;
  count = 0;
  countEl.textContent = 0;
};

incrementBtnEl.onclick = increment;
decrementBtnEl.onclick = decrement;
saveBtnEl.onclick = save;
