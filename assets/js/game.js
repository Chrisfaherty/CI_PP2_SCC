// Start of game.html JS.
    const buttons = document.getElementsByClassName('control');
    /*
    const mScore = document.getElementById('matches');
    const dScore = document.getElementById('not-matched');
    */
    const humanImg = document.getElementById('human-img');
    const computerImg = document.getElementById('computer-img');
    //create a random generator to select between the images at random
    const choices = ['coffee', 'bottle', 'cake', 'chocolate', 'cookie', 'ice-cream'];
    
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
    
    // Adding event listeners to the buttons
       for (let button of buttons) {
            button.addEventListener("click", function(){
                let humanChoice = this.getAttribute("data-choice")
                playGame(humanChoice);
            });
        };
     
    // This function will be used to start the game
       function playGame(humanChoice) {

        //Update Images 
        const imageFileName = choices[humanChoice] ?? 'coffee'
        humanImg.src = `./assets/images/${imageFileName}.png`
        humanImg.alt = choices[humanChoice];
    
        let computerChoice = Math.floor(Math.random() * 6);
    
        computerImg.src = `./assets/images/${choices[computerChoice]}.png`
        computerImg.alt = choices[computerChoice];

        compareChoices(humanImg.src, computerImg.src);

        };

        /*
        // This section is to update the score
        const updateScore = () =>{
            const humanScore = document.querySelector('.match p');
            const computerScore = document.querySelector('.different p');
            humanScore.textContent = mScore;
            computerScore.textContent = dScore;
        }; */
    
        // This section is used to check if there is a match
        const compareChoices =(humanChoice, computerChoice) => {
            //Checking for a match
            const outcome = document.querySelector('.outcome');
            if(humanChoice === computerChoice){
                outcome.textContent = "It is a match";
                return;
            };
            // Check for coffee
            if(humanChoice === "coffee"){
                if(computerChoice === "coffee"){
                    outcome.textContent = "It is a Match";
                    return;
                } else {
                    outcome.textContent = "It is NOT a Match";
                    return;
                }
            };

            };
    
        startGame();
        playGame();
    