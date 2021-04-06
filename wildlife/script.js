const backgroundWidth = 1440;

window.onload = init;
window.onresize = resizeBackground;

// Functions
function init() {
    resizeBackground();
}

function resizeBackground() {
    document.body.style.backgroundSize = window.innerWidth > backgroundWidth ? "contain" : "auto";
}
