const player = require("./players.js");
const Human = require("./players");
const Computer = require("./players");

class Game {
    constructor(){
        this.playerOne = null
        this.playerTwo = null
    }
    chooseGame(){
    let userInput = prompt("would you like to play human vs human or human vs computer");
        switch (userInput){
            case 'human vs human':
                this.playerOne = new 
        }
    }
    calculateWinner(){
        // players choice rock and paper
        if (playerOnesChoice === "rock" && playerTwosChoice === "paper"){
            console.log("paper covers rock");
            this.playerTwo.score++
        }
        else if(playerTwosChoice === "rock" && playerOnesChoice === "paper"){
            console.log("paper covers rock");
            this.playerOne.score++;
        }
        //players choose  paper and scissors
        else if(playerOnesChoice === "scissors" && playerTwosChoice === "paper"){
            console.log("scissors cuts paper");
            this.playerOne.score++
        }
        else if(playerTwosChoice === "scissors" && playerOnesChoice === "paper"){
            console.log("scissors cuts paper");
            this.playerTwo.score++;
        }
        //players choose rock and scissors
        else if(playerOnesChoice === "rock" && playerTwosChoice === "scissors"){
            console.log("paper covers rock");
            this.playerOne.score++
        }
        else if(playerTwosChoice === "rock" && playerOnesChoice === "scissors"){
            console.log("rock smashes scisors");
            this.playerTwo.score++;
        }
        //players choose lizard and paper
        else if(playerOnesChoice === "lizard" && playerTwosChoice === "paper"){
            console.log("paper covers rock");
            this.playerOne.score++
        }
        else if(playerTwosChoice === "lizard" && playerOnesChoice === "paper"){
            console.log("lizard eats paper");
            this.playerTwo.score++;
        }
        //players choose lizard and rock
        else if(playerOnesChoice === "lizard" && playerTwosChoice === "rock"){
            console.log("rock crushes lizard");
            this.playerTwo.score++
        }
        else if(playerTwosChoice === "lizard" && playerOnesChoice === "rock"){
            console.log("rock crushes lizard");
            this.playerOne.score++;
        }
        //players choose lizard and scissors
        else if (playerOnesChoice === "scissors" && playerTwosChoice === "lizard"){
            console.log("scissors decapiatates lizard");
            this.playerTwo.score++
        }
        else if(playerTwosChoice === "scissors" && playerOnesChoice === "lizard"){
            console.log("scissors decapiatates lizard");
            this.playerOne.score++;
        }
        //players choose lizard and spock
        else if (playerOnesChoice === "lizard" && playerTwosChoice === "spock"){
            console.log("lizard poisons spock");
            this.playerTwo.score++
        }
        else if(playerTwosChoice === "lizard" && playerOnesChoice === "spock"){
            console.log("lizard posions spock");
            this.playerOne.score++;
        }
        //players choose spock and paper
        else if (playerOnesChoice === "spock" && playerTwosChoice === "paper"){
            console.log("lizard poisons spock");
            this.playerTwo.score++
        }
        else if(playerTwosChoice === "spock" && playerOnesChoice === "paper"){
            console.log("paper disproves spock");
            this.playerOne.score++;
        }
        //players choice spock and rock
        else if (playerOnesChoice === "spock" && playerTwosChoice === "rock"){
            console.log("spock vaporizes rock");
            this.playerOne.score++
        }
        else if(playerTwosChoice === "spock" && playerOnesChoice === "rock"){
            console.log("spock vaporizes rock");
            this.playerTwo.score++;
        }
        //players choose spock and scissors
        else if (playerOnesChoice === "spock" && playerTwosChoice === "scissors"){
            console.log("spock vaporizes rock");
            this.playerOne.score++
        }
        else if(playerTwosChoice === "spock" && playerOnesChoice === "scissors"){
            console.log("spock vaporizes rock");
            this.playerTwo.score++;
        }
        
        


        


    }


    runGame(){
        while(this.playerOne.score < 3 && this.playerTwo.score < 3){
            let playerOnesChoice = this.playerOne.chooseAndOption();
            let playerTwosChoice = this.playerTwo.chooseAndOption();
            
        }
    }
    
    displayWinner(){
        if (this.playerOne.score == 3){
            console.log(`${this.playerOne.name} has one the game`);
        }
        else{
            console.log(`${this.playerTwo.name} has won the game`);
        }
    }
}