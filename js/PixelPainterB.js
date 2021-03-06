// grid (canvas to paint on)
// swatch (colors)
// erase
// clear

var painterBody = document.getElementById('pixelPainter');
var painterCanvas = document.createElement('div');
var painterPalette = document.createElement('div');
var buttonDiv = document.createElement('div');
var fillButton = document.createElement('button');
var eraseButton = document.createElement('button');
var clearButton = document.createElement('button');
var mouseClick = false;
var currentColor = 'ffffff';


var colorArr = ['262c04', 'ffc0cb', 'f2df4f', 'eeeeee', 'c6e2ff',
                '4169e1', '3b411d', 'f10714', '0d8163', '255083',
                '5f4236', '3496fa', 'fa02d4', '3ff206', '560e3f',
                '00fa9a', '00ffff', '666699','cc9900','#ffff99',
                'ff3300', '669900', 'cc3399', 'ffcccc', '999966'];

// add ids to each created element
// painterBody.id = 'painterBody';
// document.body.appendChild(painterBody);

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
      canvasCell.addEventListener('click', function() {
        if (mouseClick === false) {
          event.target.style.backgroundColor = currentColor;
          mouseClick = true;
        } else if (mouseClick === true) {
          mouseClick = false;
        }
      });
      canvasCell.addEventListener("mouseover", function() {
        if (mouseClick === true) {
          event.target.style.backgroundColor = currentColor;
        }
      });
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
      paletteCell.addEventListener("click", function() {
        resetPalette();
        event.target.style.width = '36px';
        event.target.style.height = '36px';
        event.target.style.border = '2px solid black';
        currentColor = event.target.style.backgroundColor;
        mouseClick = false;
      });
      colorRow.appendChild(paletteCell);
      k++;
    }
  }
}

canvasGrid(20,20);
paletteGrid(5,5);

buttonDiv.className = 'buttonDiv';
painterPalette.appendChild(buttonDiv);

// BUTTONS
fillButton.className = 'buttons';
fillButton.id = 'fillButton';
fillButton.innerHTML = 'Fill';

var canvasCellArr = document.getElementsByClassName('canvasCell');

fillButton.addEventListener('click', function() {
  for (var i = 0; i < canvasCellArr.length; i++) {
    //console.log(canvasCellArr[i].style.backgroundColor);
    if (canvasCellArr[i].style.backgroundColor === "rgb(255, 255, 255)") {
      canvasCellArr[i].style.backgroundColor = currentColor;
      console.log(currentColor);
    }
  }; 
  // console.log(currentColor);
});
buttonDiv.appendChild(fillButton);

eraseButton.className = 'buttons';
eraseButton.id = 'eraseButton';
eraseButton.innerHTML = 'Erase';
eraseButton.addEventListener('click', function() {
  currentColor = 'ffffff';
  mouseClick = false;
});
buttonDiv.appendChild(eraseButton);

clearButton.className = 'buttons';
clearButton.id = 'clearButton';
clearButton.innerHTML = 'Clear';
clearButton.addEventListener('click', function() {
  for (var i = 0; i < document.getElementsByClassName('canvasCell').length; i++) {
    document.getElementsByClassName('canvasCell')[i].style.backgroundColor = 'ffffff'
  }
  resetPalette();
  currentColor = 'ffffff';
  mouseClick = false;
});
buttonDiv.appendChild(clearButton);

function resetPalette() {
  for (var i = 0; i < document.getElementsByClassName('paletteCell').length; i++) {
    document.getElementsByClassName('paletteCell')[i].style.width = '40px';
    document.getElementsByClassName('paletteCell')[i].style.height = '40px';
    document.getElementsByClassName('paletteCell')[i].style.border = '0px';
  }
}

//CREATING GRID
/*function ppCanvas(pixelNumber){
  for(var i = 0; i < pixelNumber; i++){
    var canvasCell = document.createElement("div");
    canvasCell.className = "canvasCell";
    painterCanvas.appendChild(canvasCell);
    canvasCell.addEventListener("click", function() {
      event.target.style.backgroundColor = currentColor;
    })
  }
}
*/
//ppCanvas(99);

//CREATING COLOR PALLETE
/* function ppColor(pixelNumber){
  for(var i = 0; i < pixelNumber; i++){
    var paletteCell = document.createElement("div");
    paletteCell.className = "paletteCell";
    painterPalette.appendChild(paletteCell);
    paletteCell.style.backgroundColor = colorArr[i];
    paletteCell.addEventListener("click", function() {
      currentColor = event.target.style.backgroundColor;
      console.log(currentColor);
    });
  }
}

ppColor(16);
*/






