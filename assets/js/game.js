// Start of game.html JS.
/*jshint esversion: 6 */
// Creating all the selectors for the global section
    const buttons = document.getElementsByClassName('control');
    const humanImg = document.getElementById('human-img');
    const computerImg = document.getElementById('computer-img');
    const outcome = document.querySelector('.outcome');
    const reset = document.querySelector('.resetButton input');
    const choices = ['coffee', 'bottle', 'cake', 'chocolate', 'cookie', 'ice-cream'];
    const matches = document.getElementById('matches');
    const notMatched = document.getElementById('notMatched');
    let mScore = 0;
    let dScore = 0;
     
// Enter the game when you click lets play on the info screen
// Calling the start game function
    const startGame = function (){
            const startBtn = document.querySelector('.info button');
            const infoScreen = document.querySelector('.info');
            const playZone = document.querySelector('.play-zone');
            startBtn.addEventListener('click', function (){
                infoScreen.classList.add('fadeOut');
                playZone.classList.add('fadeIn'); 
            });
    };
    startGame();
    
// Adding event listeners to the buttons,
// The event listeners allows the buttons to be connected to the items arrey.
    for (let button of buttons) {
        button.addEventListener("click", function(){
        let humanChoice = this.getAttribute("data-choice");
        playGame(humanChoice);
            });
    }

// This function will be used to start the game
// Once a choice button is clicked the images will shuffle,
// The computer choice is set to select at random from the choices arrey
    function playGame(humanChoice) {
        const imageFileName = choices[humanChoice] ?? 'coffee';
        humanImg.src = `./assets/images/${imageFileName}.png`;
        humanImg.alt = choices[humanChoice];
        let computerChoice = Math.floor(Math.random() * 6);
        computerImg.src = `./assets/images/${choices[computerChoice]}.png`;
        computerImg.alt = choices[computerChoice];
        compareChoices(humanImg.src, computerImg.src);
    }

// This section is check who wins or loses the game
// It checks if there is a match with the images.
// The number of scores is also checked so it will display the correct text if you win orr lose the game
    const updateScore = () =>{
        const humanScore = document.querySelector('.match p');
        const computerScore = document.querySelector('.different p');
            humanScore.textContent = mScore;
            computerScore.textContent = dScore;
            let isGameOver = false;
            if (mScore === 5) {
                isGameOver = true;
                outcome.textContent = ` You won!`;
                return;
              } else if (dScore === 10) {
                isGameOver = true;
                outcome.textContent = `You lose!`;
                return;
              } else {
                isGameOver = false;
              }
    };
    
// This section is used to check if there is a match
// If there is a match it displays a specific text and same if there is not a match
// The score gets updated by one depending on if it is a match or not
    const compareChoices =(humanChoice, computerChoice) => {
        if(humanChoice === computerChoice){
            outcome.textContent = "It is a match";
            mScore++;
            updateScore();
            return;
        } else {
            outcome.textContent = "It is not a match";
            dScore++;
            updateScore();
            return;
        }
    };
// This function resets the game once the reset button is pressed.
// it sets all items back to defult
    const resetGame = function () {
        let isGameOver = false;
        reset.addEventListener("click", function(){
            isGameOver = false;
            mScore = 0;
            dScore = 0;
            matches.textContent = "0";
            notMatched.textContent = "0";
            outcome.textContent = "Choose an Item";
        });
    };
    resetGame();
        
