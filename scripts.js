//Reference selectors
const container = document.querySelector(".container");

let size = 16;


function generateGrid(size) {
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
        pixel.style.backgroundColor = "grey";
      })
    }
  }
}