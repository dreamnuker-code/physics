const block = document.getElementById("block");
const frame = document.getElementById("main-frame");

let x = frame.clientTop;
let y = frame.clientLeft;
let gravY = 0;
let g = 1.051;
let dx = 2;

let key = {
    arrow_up: false,
    arrow_left: false,
    arrow_right: false
};

document.addEventListener("keydown", function(e){
    if (e.key == "ArrowUp") {
        key.arrow_up = true;
    };
    if (e.key == "ArrowLeft") {
        key.arrow_left = true;
    };
    if (e.key == "ArrowRight") {
        key.arrow_right = true;
    };
})

document.addEventListener("keyup", function(e){
    if (e.key == "ArrowUp") {
        key.arrow_up = false;
    };
    if (e.key == "ArrowLeft") {
        key.arrow_left = false;
    };
    if (e.key == "ArrowRight") {
        key.arrow_right = false;
    };
})

async function gravityWork() {
    x += dx;
    gravY += g;
    y += gravY;

    if (x + block.offsetWidth > frame.clientWidth ) {
        x = frame.clientWidth - block.offsetWidth;
        dx = 0;
    };
    if (y + block.offsetHeight > frame.clientHeight) {
        y = frame.clientHeight - block.offsetHeight;
        gravY = 0;
    };
    if (x + block.offsetWidth < frame.clientLeft + block.offsetWidth ) {
        x = frame.clientLeft;
        dx = 0;
    };
    if (key.arrow_up && gravY == 0) {
        gravY = -20;
    };
    if (key.arrow_left) {
        dx = -5;
    }
    else if (key.arrow_right) {
        dx = 5;
    }
    else {
        dx = 0;
    };

    block.style.top = y + "px";
    block.style.left = x + "px";

    requestAnimationFrame(gravityWork);
}

gravityWork();