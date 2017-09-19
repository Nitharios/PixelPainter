// grid (canvas to paint on)
// swatch (colors)
// erase
// clear

/* 
Nathan's notes:
  - Added a previousColor variable to store the previously selected color which replaces previous functionality of only filling in WHITE spaces
  - canvasGrid has a hidden background that I was playing with (if you set backgroundColor of Clear function to null, it will reveal the picture on the page) --> document.getElementsByClassName('canvasCell')[i].style.backgroundColor = 'rgb(255, 255, 255)' <-- set this to null;
  - If you set the backgroundColor of canvasCell (or any div) to null, it will reveal the background of that div or body
*/

var painterBody = document.getElementById('pixelPainter');
var painterCanvas = document.createElement('div');
var painterPalette = document.createElement('div');
var buttonDiv = document.createElement('div');
var fillButton = document.createElement('button');
var eraseButton = document.createElement('button');
var clearButton = document.createElement('button');
var saveButton = document.createElement("button");
var loadButton = document.createElement("button");
var previousColor = 'rgb(255, 255, 255)';
var currentColor = 'rgb(255, 255, 255)';
var mouseClick = false;
// Used to save current picture on canvas
var colorArray = [];

var colorArr = ['262c04', 'ffc0cb', 'f2df4f', 'eeeeee', 'c6e2ff', 
                '4169e1', '3b411d', 'f10714', '0d8163', '255083',
                '5f4236', '3496fa', 'fa02d4', '3ff206', '560e3f',
                '00fa9a', '00ffff', '666699','cc9900','#ffff99',
                'ff3300', '669900', 'cc3399', 'ffcccc', '999966'];

painterCanvas.className = 'painterCanvas';
painterBody.appendChild(painterCanvas);

painterPalette.className = 'painterPalette';
painterBody.appendChild(painterPalette);

// Create grid canvas
function canvasGrid(height, width) {
  for(var i = 0; i < height; i++) {
    var pixelRow = document.createElement("div");
    pixelRow.className = "pixelRow";
    painterCanvas.appendChild(pixelRow);
    for(var j = 0; j < width; j++) {
      var canvasCell = document.createElement("div");
      canvasCell.className = "canvasCell";
      canvasCell.style.backgroundColor = 'rgb(255, 255, 255)';
      canvasCell.addEventListener('click', canvasCellClickListener);
      canvasCell.addEventListener("mouseover", canvasCellMouseoverListener);
      pixelRow.appendChild(canvasCell);
    }
  }
}

// Create color palette
function paletteGrid(height, width) {
  for(var i = 0, k = 0; i < height; i++) {
    var colorRow = document.createElement("div");
    colorRow.className = "colorRow";
    painterPalette.appendChild(colorRow);
    for(var j = 0; j < width; j++) {
      var paletteCell = document.createElement("div");
      paletteCell.className = "paletteCell";
      paletteCell.style.backgroundColor = colorArr[k];
      paletteCell.addEventListener("click", paletteCellClickListener);
      colorRow.appendChild(paletteCell);
      k++;
    }
  }
}

// Sets canvasGrid and paletteGrid sizes
canvasGrid(20,20);
paletteGrid(5,5);

buttonDiv.className = 'buttonDiv';
painterPalette.appendChild(buttonDiv);

// BUTTONS
eraseButton.className = 'buttons';
eraseButton.id = 'eraseButton';
eraseButton.innerHTML = 'Erase';
eraseButton.addEventListener('click', eraseButtonClickListener);
buttonDiv.appendChild(eraseButton);

// Fills any space not colored by currentColor
fillButton.className = 'buttons';
fillButton.id = 'fillButton';
fillButton.innerHTML = 'Fill';
fillButton.addEventListener('click', fillButtonClickListener);
buttonDiv.appendChild(fillButton);

// Clears entire canvas and deselects current color
clearButton.className = 'buttons';
clearButton.id = 'clearButton';
clearButton.innerHTML = 'Clear';
clearButton.addEventListener('click', clearButtonClickListener);
buttonDiv.appendChild(clearButton);

saveButton.id = "saveButton";
saveButton.className = "buttons";
saveButton.innerHTML = "Save";
saveButton.addEventListener('click', savePic);
buttonDiv.appendChild(saveButton);

loadButton.id = "loadButton";
loadButton.className = "buttons";
loadButton.innerHTML = "Load";
loadButton.addEventListener("click", loadPic);
buttonDiv.appendChild(loadButton);

/* Functions */
function canvasCellClickListener() {
  if (!mouseClick) {
    event.target.style.backgroundColor = currentColor;
    mouseClick = true;
  } else if (mouseClick) {
    mouseClick = false;
  }
}

function canvasCellMouseoverListener() {
  if (mouseClick) {
  event.target.style.backgroundColor = currentColor;
  }
}

function paletteCellClickListener() {
  resetPalette();
  event.target.style.width = '2.1rem';
  event.target.style.height = '2.1rem';
  event.target.style.border = '0.2rem dashed black';
  previousColor = currentColor;
  currentColor = event.target.style.backgroundColor;
  mouseClick = false;
}

function eraseButtonClickListener() {
  currentColor = 'rgb(255, 255, 255)';
  mouseClick = false;
}

function clearButtonClickListener() {
  for (var i = 0; i < document.getElementsByClassName('canvasCell').length; i++) {
  document.getElementsByClassName('canvasCell')[i].style.backgroundColor = 'rgb(255, 255, 255)';
  }
  resetPalette();
  previousColor = 'rgb(255, 255, 255)';
  currentColor = 'rgb(255, 255, 255)';
  mouseClick = false;
}

function fillButtonClickListener() {
  var canvasCellArr = document.getElementsByClassName('canvasCell');
  for (var i = 0; i < canvasCellArr.length; i++) {
  if (canvasCellArr[i].style.backgroundColor !== previousColor) {
    console.log(currentColor);
    canvasCellArr[i].style.backgroundColor = currentColor;
    }
  }
}
// Functions to save and load pictures
// Can only save one picture at a time
// Saving another picture will rewrite current save
function savePic(){
  colorArray = [];
  var currentPic = document.getElementsByClassName("canvasCell");
  for (var i = 0; i < currentPic.length; i++) {
    colorArray.push(currentPic[i].style.backgroundColor);
  }
  mouseClick = false;
}

function loadPic(){
  var currentPic = document.getElementsByClassName("canvasCell");
  for(var i = 0; i < currentPic.length; i++){
    currentPic[i].style.backgroundColor = colorArray[i];
  }
  //colorArray = [];
  mouseClick = false;
}

// Used to reset size of the palette cells when selecting a new color
function resetPalette() {
  for (var i = 0; i < document.getElementsByClassName('paletteCell').length; i++) {
    document.getElementsByClassName('paletteCell')[i].style.width = '2.5rem';
    document.getElementsByClassName('paletteCell')[i].style.height = '2.5rem';
    document.getElementsByClassName('paletteCell')[i].style.border = '0rem';
  }
}