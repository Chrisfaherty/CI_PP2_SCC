// Start of game.html JS.

const game = function (){
    let mScore = 0;
    let dScore = 0;

    const startGame = function (){
        const startBtn = document.querySelector('.info button');
        const infoScreen = document.querySelector('.info');
        const playZone = document.querySelector('.play-zone');

        startBtn.addEventListener('click', function (){
            infoScreen.classList.add('fadeOut');
            
        });
    };
    startGame();
};

game();