// Start of game.html JS.

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
    }

    startGame();
};

game();