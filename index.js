const countEl = document.getElementById("count-el");
const incrementButton = document.getElementById("increment-btn");
const saveBtn = document.getElementById("save-btn");
const saveEl = document.getElementById("save-el");
const restartBtn = document.getElementById("restart-btn");

// Load counter value from Local Storage or default to 0
let count = parseInt(localStorage.getItem("count")) || 0;

// this is normal count default
//let count = 0;

function increment() {
  count += 1;
  countEl.innerText = count;

  // Save in localStorage
  localStorage.setItem("count", count.toString());
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += `${countStr}`;

  alert(`Would you want to save this please?: ${countStr}`);

  // This will save the count back to zero
  //   count = 0;
  //   countEl.innerHTML = `${count}`;

  localStorage.setItem("count", count.toString());
}

// Restart function
function restartCount() {
  count = 0;
  countEl.innerText = count;

  localStorage.setItem("count", count.toString());
}

countEl.innerText = count;

incrementButton.addEventListener("click", increment);
saveBtn.addEventListener("click", save);
restartBtn.addEventListener("click", restartCount);
