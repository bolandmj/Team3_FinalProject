//Assigns variables for all objects in game
let Board = document.querySelector('.board');
let FirstPaddle = document.querySelector(".firstPaddle");
let SecondPaddle = document.querySelector(".secondPaddle");
let InitialBall = document.querySelector(".ball");
let Ball = document.querySelector(".ball");
let ScoreOne = document.querySelector(".playerOneScore");
let ScoreTwo = document.querySelector(".playerTwoScore");
let Message = document.querySelector(".message");

//Gets coordinates of paddles, ball, and board
let FirstPaddleCoord = FirstPaddle.getBoundingClientRect();
let SecondPaddleCoord = SecondPaddle.getBoundingClientRect();
let InitialBallCoord = Ball.getBoundingClientRect();
let BallCoord = InitialBallCoord;
let BoardCoord = Board.getBoundingClientRect();
let CommonPaddle = document.querySelector('.paddle').getBoundingClientRect();

let GameState = 'start';

let dx = Math.floor(Math.random() * 4) + 3;
let dy = Math.floor(Math.random() * 4) + 3;
let dxd = Math.floor(Math.random() * 2);
let dyd = Math.floor(Math.random() * 2);


document.addEventListener('keydown', (e) => {
    if (e.key == 'Enter')
    {
        GameState = GameState == 'start' ? 'play' : 'start';
        
        if(GameState == 'play')
        {
            Message.innerHTML = 'Game Started';
            
            requestAnimationFrame(() => {
            dx = Math.floor(Math.random() * 4) + 3;
            dy = Math.floor(Math.random() * 4) + 3;
            dxd = Math.floor(Math.random() * 2);
            dyd = Math.floor(Math.random() * 2);
            moveBall(dx,dy,dxd,dyd);
            });
        }
    }
    if(GameState == 'play')
    {
        if(e.key == 'w')
        {
            FirstPaddle.style.top =
                Math.max(BoardCoord.top, 
                FirstPaddleCoord.top - window.innerHeight * 0.06
                ) + 'px';
            FirstPaddleCoord = FirstPaddle.getBoundingClientRect();
        }
        if(e.key == 's')
        {
            FirstPaddle.style.top = 
                Math.min(
                BoardCoord.bottom - CommonPaddle.height,
                FirstPaddleCoord.top + window.innerHeight * 0.06
                ) + 'px'; 
            FirstPaddleCoord = FirstPaddle.getBoundingClientRect();
        }
        if(e.key == 'ArrowUp')
        {
            SecondPaddle.style.top =
                Math.max(
                    BoardCoord.top,
                    SecondPaddleCoord.top - window.innerHeight * 0.06
                ) + 'px';
            SecondPaddleCoord = SecondPaddle.getBoundingClientRect();
        }
        if(e.key == 'ArrowDown')
        {
            SecondPaddle.style.top =
                Math.min(
                    BoardCoord.bottom - CommonPaddle.height,
                    SecondPaddleCoord.top + window.innerHeight * 0.06
                ) + 'px';
            SecondPaddleCoord = SecondPaddle.getBoundingClientRect();
        }
    }
    
});

function moveBall(dx, dy, dxd, dyd)
{
    if (BallCoord.top <= BoardCoord.top)
    {
        dyd = 1;
    }
    if (BallCoord.bottom >= BoardCoord.bottom)
    {
        dyd = 0;
    }
    if (BallCoord.left <= FirstPaddleCoord.right &&
        BallCoord.top >= FirstPaddleCoord.top &&
        BallCoord.bottom <= FirstPaddleCoord.bottom)
    {
        dxd = 1;
        dx = Math.floor(Math.random() * 4) + 3;
        dy = Math.floor(Math.random() * 4) + 3;
    }
    if (BallCoord.right >= SecondPaddleCoord.left &&
        BallCoord.top >= SecondPaddleCoord.top &&
        BallCoord.bottom <= SecondPaddleCoord.bottom)
    {
        dxd = 0;
        dx = Math.floor(Math.random() * 4) + 3;
        dy = Math.floor(Math.random() * 4) + 3;
    }
    if (BallCoord.left <= BoardCoord.left ||
        BallCoord.right >= BoardCoord.right)
    {
        if (BallCoord.left <= BoardCoord.left)
        {
            ScoreTwo.innerHTML = +ScoreTwo.innerHTML + 1;
        }
        else 
        {
            ScoreOne.innerHTML = +ScoreOne.innerHTML + 1;
        }
        GameState = 'start';

        BallCoord = InitialBallCoord;
        Ball.style = InitialBall.style;
        Message.innerHTML = 'Press Enter to Play Pong';
        
        return;
    }
    Ball.style.top = BallCoord.top + dy * (dyd == 0 ? -1 : 1) + 'px';
    Ball.style.left = BallCoord.left + dx * (dxd == 0 ? -1 : 1) + 'px';
    BallCoord = Ball.getBoundingClientRect();
    requestAnimationFrame(() => 
    {
        moveBall(dx,dy,dxd,dyd);
    });
}