var computer_paddle,player_paddle,ball;
function preload(){

}

function setup(){
canvas = createCanvas(600,400);
canvas.position(320,100);
//creating objects
computer_paddle = new Paddle();
player_paddle = new Paddle();
ball = new Ball();
//adjusting the properties
player_paddle.xposition=580;
player_paddle.yposition=160;
computer_paddle.yposition=160;
ball.xposition=300;
ball.yposition=200;
ball.radius=20;
ball.color="blue";
}

function draw(){
background("lightblue");


//moving the player paddle 

player_paddle.yposition=mouseY;
console.log(mouseY);

//moving the ball
/*if(keyDown("space") == true){

ball.xposition = ball.xposition + 2;
}
*/
//moving the computer paddle
computer_paddle.yposition = ball.yposition;
//console.log(ball.yposition);

text("Press Space To Serve",250,230);
text("Computer Score:0",150,15);
text("Player Score:0",420,15)

//displaying game objects
computer_paddle.display();
player_paddle.display();
ball.display();

}