var redSquare;
var purpleSquare;
var greenSquare;

window.onload = init;

function init() {
    redSquare = document.getElementById("redSquare");
    purpleSquare = document.getElementById("purpleSquare");
    greenSquare = document.getElementById("greenSquare");

    document.getElementById("shapes1").addEventListener("click", showShapes1);
    document.getElementById("shapes2").addEventListener("click", showShapes2);
    document.getElementById("shapes3").addEventListener("click", showShapes3);
    document.getElementById("shapes4").addEventListener("click", showShapes4);

    showShapes1()
}

function showShapes1() {
    redSquare.style.position = "relative";
    redSquare.style.backgroundColor = "";
    redSquare.style.border = "solid #FF2020";
    redSquare.style.zIndex = 1;

    purpleSquare.style.position = "relative";
    purpleSquare.style.top = "80px";
    purpleSquare.style.bottom = "";
    purpleSquare.style.left = "181px";
    purpleSquare.style.right = "";
    purpleSquare.style.backgroundColor = "";
    purpleSquare.style.border = "solid #7043A8";
    purpleSquare.style.zIndex = 1;

    greenSquare.style.top = "120px";
    greenSquare.style.left = "322px";
    greenSquare.style.width = "100px";
    greenSquare.style.height = "100px";
    greenSquare.style.backgroundColor = "";
    greenSquare.style.border = "solid #00C05B";
    greenSquare.style.zIndex = 1;
}

function showShapes2() {
    configureSquares()
    greenSquare.style.zIndex = 3;
}

function showShapes3() {
    configureSquares()
    greenSquare.style.zIndex = 1;
}

function showShapes4() {
    redSquare.style.position = "absolute";
    redSquare.style.backgroundColor = "#FFFFFF";
    redSquare.style.border = "";
    redSquare.style.zIndex = 2;

    purpleSquare.style.position = "absolute";
    purpleSquare.style.top = "";
    purpleSquare.style.bottom = "40px";
    purpleSquare.style.left = "";
    purpleSquare.style.right = "40px";
    purpleSquare.style.backgroundColor = "#FFFFFF";
    purpleSquare.style.border = "";
    purpleSquare.style.zIndex = 2;

    greenSquare.style.top = "";
    greenSquare.style.left = "";
    greenSquare.style.width = "100%";
    greenSquare.style.height = "100%";
    greenSquare.style.backgroundColor = "#00C05B";
    greenSquare.style.border = "";
    greenSquare.style.zIndex = 1;
}

function configureSquares() {
    redSquare.style.position = "relative";
    redSquare.style.backgroundColor = "#FF2020";
    redSquare.style.border = "";
    redSquare.style.zIndex = 1;

    purpleSquare.style.position = "relative";
    purpleSquare.style.top = "15px";
    purpleSquare.style.bottom = "";
    purpleSquare.style.left = "116px";
    purpleSquare.style.right = "";
    purpleSquare.style.backgroundColor = "#7043A8";
    purpleSquare.style.border = "";
    purpleSquare.style.zIndex = 2;

    greenSquare.style.top = "-10px";
    greenSquare.style.left = "192px";
    greenSquare.style.width = "100px";
    greenSquare.style.height = "100px";
    greenSquare.style.backgroundColor = "#00C05B";
    greenSquare.style.border = "";
}
