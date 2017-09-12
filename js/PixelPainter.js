// grid (canvas to paint on)
// swatch (colors)
// erase
// clear

var painterBody = document.createElement('div');
var painterCanvas = document.createElement('div');
var colorPalette = document.createElement('div');
var eraseButton = document.createElement('button');
var clearButton = document.createElement('button');
var currentColor;

var colorArr = ['262c04', 'ffc0cb', 'f2df4f', 'eeeeee', 'c6e2ff', '4169e1', '3b411d', 'f10714', '0d8163', '255083', '5f4236', '3496fa', 'fa02d4', '3ff206', '560e3f', '00fa9a', 'violet'];

// add ids to each created element
painterBody.id = 'painterBody';
document.body.appendChild(painterBody);

painterCanvas.className = 'painterCanvas';
painterBody.appendChild(painterCanvas);

colorPalette.className = 'colorPalette';
painterBody.appendChild(colorPalette);


//BUTTONS
eraseButton.className = 'buttons';
eraseButton.id = 'eraseButton';
eraseButton.innerHTML = 'Erase';
painterBody.appendChild(eraseButton);
eraseButton.addEventListener('click', function() {
  currentColor = 'ffffff';
});

clearButton.classname = 'buttons';
clearButton.id = 'clearButton';
clearButton.innerHTML = 'Clear';
painterBody.appendChild(clearButton);
clearButton.addEventListener('click', function() {
  for (var i = 0; i < document.getElementsByClassName('pixelCell').length; i++) {
    document.getElementsByClassName('pixelCell')[i].style.backgroundColor = 'ffffff'
  }
  currentColor = 'ffffff';
});

//CREATING GRID
function ppCanvas(pixelNumber){
  for(var i = 0; i < pixelNumber; i++){
    var pixelCell = document.createElement("div");
    pixelCell.className = "pixelCell";
    painterCanvas.appendChild(pixelCell);
    pixelCell.addEventListener("click", function() {
      event.target.style.backgroundColor = currentColor;
    })
  }
}

ppCanvas(100);

//CREATING COLOR PALLETE
function ppColor(pixelNumber){
  for(var i = 0; i < pixelNumber; i++){
    var colorCell = document.createElement("div");
    colorCell.className = "colorCell";
    colorPalette.appendChild(colorCell);
    colorCell.style.backgroundColor = colorArr[i];
    colorCell.addEventListener("click", function() {
      currentColor = event.target.style.backgroundColor;
      console.log(currentColor);
    });
  }
}

ppColor(16);





