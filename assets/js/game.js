// Start of game.html JS.
const buttons = document.getElementsByClassName('control');
const mScore = document.getElementsByClassName('match');
const dScore = document.getElementsByClassName('different');
const game = function (){
    let mScore = 0;
    let dScore = 0;

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

    // This function will be used to start the game
    const playGame = function (){
        const choices = document.querySelector('.choices button');
        const humanImg = document.querySelector('.human-img');
        const computerImg = document.querySelector('.computer-img');

        //create a random generator to select between the images at random
        const computerChoices = ['bottle', 'cake', 'choclate', 'coffee', 'cookie', 'ice-cream'];
        
    

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
};

game();