const container = document.querySelector("#container");
const resizeButton = document.querySelector("#resize-btn");

function createGrid(size) {
  container.innerHTML = "";

  const totalSquares = size * size;
  const squareDimension = 960 / size + "px";

  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");

    square.style.width = squareDimension;
    square.style.height = squareDimension;

    square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = "black";
    });

    container.appendChild(square);
  }
}

resizeButton.addEventListener("click", () => {
  const userInput = prompt("Enter squares per side (1 - 100):");
  const newSize = parseInt(userInput);

  if (newSize > 0 && newSize <= 100) {
    createGrid(newSize);
  } else {
    alert("Invalid entry! Please enter a number between 1 and 100.");
  }
});

createGrid(16);