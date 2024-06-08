function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector(`#controls`);
const boxes = document.querySelector(`#boxes`);

const input = controls.firstElementChild;

const createBtn = input.nextElementSibling;
const destroyBtn = createBtn.nextElementSibling;

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = input.value;
  destroyBoxes();

  const boxArray = [];

  if (amount > 0 && amount <= 100) {
    for (let i = 1, size = 30; i <= amount; i++, size += 10) {
      let newBox = `<div class="js-box" style="background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px;"></div>`;
      boxArray.push(newBox);
    }

    boxes.insertAdjacentHTML("beforeend", boxArray.join(""));
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
  input.value = "";
}
