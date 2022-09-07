// Start of game.html JS.
const buttons = document.getElementsByClassName('control');
const mScore = document.getElementsByClassName('match');
const dScore = document.getElementsByClassName('different');
const humanImg = document.getElementsByClassName('human-img');
const computerImg = document.getElementsByClassName('computer-img');
//create a random generator to select between the images at random
const computerChoices = ['bottle', 'cake', 'choclate', 'coffee', 'cookie', 'ice-cream'];


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

// Adding event listeners to the buttons
    for (let button of buttons) {
        button.addEventListener("click", function(){
            let humanChoice = this.getAttribute("data-choice");
            startGame(humanChoice);
        });
    };

    // This function will be used to start the game
    const playGame = function (){


    

       /* // create a loop to go through the arrey
        choices.forEach((choice) => {
            choice.addEventListener('click', function(){
        // For the computer to generate a random number from the arrey with no decimals
        const computerNumber = Math.floor(Math.random() * 6);
        const computerChoice = computerChoices[computerNumber];
        console.log(computerChoice);
            });
        });*/
    };

    startGame();
    playGame();
