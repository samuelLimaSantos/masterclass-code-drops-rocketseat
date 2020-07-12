const dropzones = document.querySelectorAll(".dropzone");
const createIdeaButton = document.querySelector("#createIdea");
const initialDropZone = document.querySelector("#initial");

/** Card Events */
function addEventsInCards() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("dragstart", dragstart);
    card.addEventListener("drag", drag);
    card.addEventListener("dragend", dragend);
  });
}

function dragstart({ target }) {
  // console.log("> CARD: Start dragging");
  dropzones.forEach((dropzone) => dropzone.classList.add("highlight"));
  target.classList.add("is-dragging");
}

function drag({ target }) {
  // console.log("> CARD: Is dragging");
}

function dragend({ target }) {
  // console.log("> CARD: Stop Dragging");
  dropzones.forEach((dropzone) => dropzone.classList.remove("highlight"));
  target.classList.remove("is-dragging");
  changeStatusColor();
}

/** Dropzone events */
function addEventsInDropzones() {
  dropzones.forEach((dropzone) => {
    dropzone.addEventListener("dragenter", dragenter);
    dropzone.addEventListener("dragover", dragover);
    dropzone.addEventListener("dragleave", dragleave);
    dropzone.addEventListener("drop", drop);
  });
}
function dragenter() {
  // console.log("> DROPZONE: Enter in zone");
}

function dragover() {
  // console.log("> DROPZONE: Over");
  this.classList.add("over");
  const cardBeingDraggged = document.querySelector(".is-dragging");
  this.appendChild(cardBeingDraggged);
}

function dragleave() {
  // console.log("> DROPZONE: Leave");
  this.classList.remove("over");
}
function drop() {
  // console.log("> DROPZONE: dropped");
  this.classList.remove("over");
}

function changeStatusColor() {
  dropzones.forEach((dropzone, index) => {
    if (index === 0) {
      const allCards = dropzone.querySelectorAll(".card");
      allCards.forEach((card) => {
        card.childNodes[1].classList = "status red";
      });
    } else if (index === 1) {
      const allCards = dropzone.querySelectorAll(".card");
      allCards.forEach((card) => {
        card.childNodes[1].classList = "status blue";
      });
    } else {
      const allCards = dropzone.querySelectorAll(".card");
      allCards.forEach((card) => {
        card.childNodes[1].classList = "status green";
      });
    }
  });
}

createIdeaButton.addEventListener("click", createNewIdea);

function createNewIdea() {
  const newIdeaValue = document.querySelector("input[name=title");
  const newCard = `
    <div class="card" draggable="true">
      <div class="status red"></div>
      <div class="content">${newIdeaValue.value}</div>
    </div>`;
  initialDropZone.innerHTML += newCard;
  addEventsInCards();
  addEventsInDropzones();
  newIdeaValue.value = "";
}
