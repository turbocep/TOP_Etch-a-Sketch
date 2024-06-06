//Reference selectors
const container = document.querySelector(".container");

let size = 16;

function deleteGrid() {
  while (container.firstChild) {
    container.firstChild.remove();
  }
}


function generateGrid(size) {
  deleteGrid();
  for (let i = 0; i < size; i++) {
    //This creates a row within the big container.
    let row = document.createElement("div");
    row.classList.toggle("row");
    container.appendChild(row);
    for (let j = 0; j < size; j++) {
      //Creates a pixel within a row.
      let pixel = document.createElement("div");
      pixel.classList.toggle("pixel");
      row.appendChild(pixel);
      pixel.addEventListener("mouseover", () => {
        const colors = [0, 0, 0];
        for (let i = 0; i < 3; i++) {
          //Generate random RGB values.
          colors[i] = Math.floor(Math.random() * 256 + 1)
        }
        pixel.style.backgroundColor = `rgb(
          ${colors[0]}, 
          ${colors[1]}, 
          ${colors[2]})`;
      })
    }
  }
}

function changePixelColor(pixel) {
  if (pixel.style.backgroundColor == "white") {
    const colors = [0, 0, 0];
    for (let i = 0; i < 3; i++) {
      //Generate random RGB values.
      colors[i] = Math.floor(Math.random() * 256 + 1)
    }
    pixel.style.backgroundColor = `rgb(
      ${colors[0]}, 
      ${colors[1]}, 
      ${colors[2]})`;
  }
}

const buttonCreateGrid = document.querySelector(".createGrid");
const buttonDeleteGrid = document.querySelector(".deleteGrid");

buttonCreateGrid.addEventListener("click", () => {
  const size = prompt("Grid side length:");
  generateGrid(size);
})

buttonDeleteGrid.addEventListener("click", deleteGrid);