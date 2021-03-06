// FUNZIONI

// Funzione per ottenere un valore random
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Funzione che mi restiuisce un oggetto con le coordinate del mouse. Ottenendo inizialmente la posizione relativa del mouse sulla finestra del client, sottraendo la posizione del canvas
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}



// Funzione che disegna i rettangoli
function draw(canvas, e) {

    // Variabili

    let dim_max = 400;
    let dim_min = 50;

    var pos = getMousePos(canvas, e);

    let cursorX = pos.x;
    let cursorY = pos.y;
    
    let im_widht = getRandom(dim_min, dim_max);
    let im_height = getRandom(dim_min, dim_max);

    let colours = ["red", "yellow", "green", "purple", "blue", "brown", "black"];

    let num_col = getRandom(0, colours.length - 1);

    var ctx = canvas.getContext('2d');
    
    // assegno un colore alla figura
    ctx.fillStyle = colours[num_col];

    // disegno la figura
    ctx.fillRect(cursorX, cursorY, im_widht, im_height);

    // inserisco l'indice al rettangolo
    ctx.font = "30px Verdana";
    ctx.fillStyle = "black";
    ctx.textBaseline = "top";
    ctx.fillText(i, cursorX, cursorY);

}

// MAIN 

var canvas = document.getElementById('canvas_background');
var i = 0;
canvas.addEventListener("click", draw.bind(null, canvas));
