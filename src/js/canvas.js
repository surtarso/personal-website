const CANVAS = document.getElementById("Canvas");
const CONTEXT = CANVAS.getContext("2d");
const HEADER = document.getElementById('Header');

CANVAS.width = window.innerWidth;
CANVAS.height = window.innerHeight;

window.addEventListener('resize', function(){
    CANVAS.width = window.innerWidth;
    CANVAS.height = window.innerHeight;
});

var ball_size = 30;
var ball_speed = 1;
var ball_loc_x, ball_loc_y;  // ball location
var ball_dir_x, ball_dir_y; // ball direction

function init(){
    ball_loc_x = CANVAS.width / 2;
    ball_loc_y = CANVAS.height / 2;
    ball_dir_x = ball_speed;
    ball_dir_y = -ball_speed;
}

//draw circles (ball)
function drawCircle(color, x, y, r) {
    CONTEXT.fillStyle = color
    CONTEXT.beginPath()
    CONTEXT.arc(x, y, r, 0, 2 * Math.PI, false)
    CONTEXT.fill()
}

//bounce on canvas walls
function bounce(){
    if (ball_loc_x - ball_size + ball_dir_x < 0 ||
            ball_loc_x + ball_size + ball_dir_x > CANVAS.width){
        ball_dir_x = -ball_dir_x;
    };
    if (ball_loc_y - ball_size + ball_dir_y < 0 ||
            ball_loc_y + ball_size + ball_dir_y > CANVAS.height){
        ball_dir_y = -ball_dir_y;
    };
}

//draw game details
function drawBall(){
    clearCanvas();
    drawCircle('whitesmoke', (ball_loc_x-2), (ball_loc_y-2), (ball_size-6));
    drawCircle('gray', (ball_loc_x-2), (ball_loc_y-2), (ball_size-7));
    drawCircle('black', (ball_loc_x-2), (ball_loc_y-2), (ball_size-10));
}

//clear canvas
function clearCanvas(){
    CONTEXT.clearRect(0, 0, CANVAS.width, CANVAS.height);
}

//main update on interval
function updateGame(){
    drawBall();
    bounce();
    //ball movement
    ball_loc_x += ball_dir_x;
    ball_loc_y += ball_dir_y;
}

init();
setInterval(() => {updateGame()}, 1000/60);