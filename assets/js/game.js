// Start of game.html JS.
const buttons = document.getElementsByClassName('control');
const mScore = document.getElementById('matches');
const dScore = document.getElementById('not-matched');
const humanImg = document.getElementById('human-img');
const computerImg = document.getElementById('computer-img');
//create a random generator to select between the images at random
const choices = ['coffee', 'bottle', 'cake', 'chocolate', 'cookie', 'ice-cream'];


    // This function is used to fade out the info screen and fade in the game
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

// Adding event listeners to the buttons
   for (let button of buttons) {
        button.addEventListener("click", function(){
            let humanChoice = this.getAttribute("data-choice")
            playGame(humanChoice);
        });
    };
 
// This function will be used to start the game
   function playGame(humanChoice) {
    const imageFileName = choices[humanChoice] ?? 'coffee'
    humanImg.src = `./assets/images/${imageFileName}.png`
    humanImg.alt = choices[humanChoice];

    let computerChoice = Math.floor(Math.random() * 6);

    computerImg.src = `./assets/images/${choices[computerChoice]}.png`
    computerImg.alt = choices[computerChoice];
            
    };



