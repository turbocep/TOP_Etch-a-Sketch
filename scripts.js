//Reference selectors
const container = document.querySelector(".container");

let size = 16;

//We'll have rows now. 
for (let i = 0; i < size; i++) {
  //This creates a row within the big container.
  let row = document.createElement("div");
  row.classList.toggle("row");
  container.appendChild(row);
}