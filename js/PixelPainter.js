// grid (canvas to paint on)
// swatch (colors)
// erase
// clear

var painterBody = document.createElement('div');
var painterCanvas = document.createElement('div');
var colorPalette = document.createElement('div');
var eraseButton = document.createElement('button');
var clearButton = document.createElement('button');

// add ids to each created element
painterBody.id = 'painterBody';
document.body.appendChild(painterBody);

painterCanvas.class = 'painterCanvas';
painterBody.appendChild(painterCanvas);

colorPalette.className = 'colorPalette';
painterBody.appendChild(colorPalette);

eraseButton.className = 'buttons';
eraseButton.id = 'eraseButton';
eraseButton.innerHTML = 'Erase';
painterBody.appendChild(eraseButton);
// eraseButton.addEventListener('click', erase);

clearButton.classname = 'buttons';
clearButton.id = 'clearButton';
clearButton.innerHTML = 'Clear';
painterBody.appendChild(clearButton);
// clearButton.addEventListener('click', clear);


