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
How many options? --> Erase, Clear, Save, Load
*/

// Function checker and will build a 400 pixel canvas
let appBuilder = new pixelPainter();
// appBuilder.pixelBuilder(20, 20);

// Start with the Revealing Module Pattern?
function pixelPainter() {

  // hidden from global
  let pixelCanvas = document.getElementById("pixelCanvas");

  return {
    pixelBuilder : pixelBuilder
  };

  // Function: Need to build a pixel builder the returns something
  function pixelBuilder(width, height) {
    // need a loop
    for (let i = 0; i < height; i++) {
      console.log(pixelPainter);
      // create a row using another loop
      for (let j = 0; j < width; j++) {

        let pixelRow = document.createElement("div");
        // append pixels to row
        pixelCanvas.appendChild(pixelRow);
        console.log("sanityCheck");
      }
    }
  }
}