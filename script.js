const block = document.getElementById("block");
const frame = document.getElementById("main-frame");
const leftB = document.getElementById("left")
const jumpB = document.getElementById("jump")
const rightB = document.getElementById("right")
let bonk = new Audio("bonk.mp3")

let x = frame.clientWidth / 2 - block.offsetWidth / 2;
let y = frame.clientHeight / 2 - block.offsetHeight / 2;
let dy = 0
let Fg = 0.194
let dx = 0
let canJump = false;

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

leftB.addEventListener("mousedown", function(e){
    key.arrow_left = true;
});

rightB.addEventListener("mousedown", function(e){
    key.arrow_right = true;
});

jumpB.addEventListener("mousedown", function(e){
    key.arrow_up = true;
});

leftB.addEventListener("mouseup", function(e){
    key.arrow_left = false;
});

rightB.addEventListener("mouseup", function(e){
    key.arrow_right = false;
});

jumpB.addEventListener("mouseup", function(e){
    key.arrow_up = false;
});

leftB.addEventListener("mouseleave", function(e){
    key.arrow_left = false;
});

jumpB.addEventListener("mouseleave", function(e){
    key.arrow_up = false;
});

rightB.addEventListener("mouseleave", function(e){
    key.arrow_right = false;
});


async function game() {
    x += dx;
    dy += Fg
    y += dy
    


    /* Gravity */
    if (y + block.offsetHeight > frame.clientHeight) {
        y = frame.clientHeight - block.offsetHeight;
        dy = -dy * 0.4
        canJump = true;
    }
    if (x + block.offsetWidth > frame.clientWidth) {
        x = frame.clientWidth - block.offsetWidth;
        dx = 0;
    };
    if (x + block.offsetWidth < frame.clientLeft + block.offsetWidth) {
        x = frame.clientLeft;
        dx = 0;
    }

    /* Controls */
    if (key.arrow_up && canJump) {
        canJump = false;
        dy = -8.9;
    }
    if (key.arrow_left) {
        dx = -5;
    }
    else if (key.arrow_right) {
        dx = 5;
    }
    else {
        dx = 0;
    }

    block.style.top = y + "px";
    block.style.left = x + 'px';

    requestAnimationFrame(game)
}

game()