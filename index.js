//Assigns variables for all objects in game
let Board = document.getElementById("#board");
let FirstPaddle = document.getElementById("#firstPaddle");
let SecondPaddle = document.getElementById("#secondPaddle");
let InitialBall = document.getElementById("#ball");
let Ball = document.getElementById("#ball");
let ScoreOne = document.getElementById("#playerOneScore");
let ScoreTwo = document.getElementById("#playerTwoScore");
let Message = document.getElementById("#message");

//Gets coordinates of paddles, ball, and board
let FirstPaddleCoord = FirstPaddle.getBoundingClientRect();
let SecondPaddleCoord = SecondPaddle.getBoundingClientRect();
let BallCoord = Ball.getBoundingClientRect();
let BoardCoord = Board.getBoundingClientRect();
let CommonPaddle = document.querySelector('.paddle').getBoundingClientRect();

let GameState = 'start';

