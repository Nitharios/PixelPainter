// jshint esversion:6

let sanityCheck = 'Pixel Painter';
console.log("Sanity Check: " + sanityCheck);

/*
Outline:
(Attempting to use flex box and SASS to build this)

Start with a parent div that wraps the entire setup and set margin to auto
What does setup consist of? --> 2 columns: 1 for the canvas, order 1? and 1 for the palette and options
How large will the canvas be? --> Depends, could do a 20x20 grid and grow from there
How many palette colors? --> Black, white, blue, yellow, orange, pink, red, purple, green, grey to start
How many options? --> Erase, Clear, Save, Load, 
  Size Selector - pre-defined list of canvas dimesions that changes the number of pixels on the canvas but doesn't change the overall size of the canvas
*/

// Function checker and will build a 400 pixel canvas
let appBuilder = new pixelPainter();
appBuilder.pixelBuilder(20, 20);

// Start with the Revealing Module Pattern?
function pixelPainter() {

  // hidden from global
  let pixelCanvas = document.getElementById("pixelCanvas");
  let currentColor = '#000000';

  return {
    pixelBuilder : pixelBuilder
  };

  /*
    Function: generates a pixelRow in the outer loop and then pixelCells in the inner loop.
    pixelCells are appended to their respective pixelRow and the pixelRow is appended to the DOM.
  */
  function pixelBuilder(width, height) {

    for (let i = 0; i < height; i++) {
      let pixelRow = document.createElement("div");
      pixelRow.className = "pixelRow";

      for (let j = 0; j < width; j++) {
        let pixelCell = document.createElement("div");
        pixelCell.className = "pixelCell";
        pixelCell.addEventListener("click", colorChanger);
        pixelRow.appendChild(pixelCell);
      }
      pixelCanvas.appendChild(pixelRow);
    }
  }

  // Function: Changes the backgroundColor of the pixelCell to the currently selected color
  // does the DOM have access to this function? YEA IT DOES!
  function colorChanger() {
    this.style.backgroundColor = currentColor;
  }
}