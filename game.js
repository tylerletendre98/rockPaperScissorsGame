"use strict";
const Human = require("./players");
console.log(Human);
const Computer = require("./players");
console.log(Computer);
const prompt = require('prompt-sync')();

class Game {
    constructor(){
        this.playerOne = null
        this.playerTwo = null
    }
    chooseGame(){
    let userInput = prompt("How many players will be playing one or two?: ");
        if (userInput == "two"){
                this.playerOne = new Human ("tyler");
                this.playerTwo = new Human ("bubba");
        }
        else if(userInput = "one"){
                this.playerOne = new Human ("tyler");
                this.playerTwo = new Computer ("computer");
        }
    }
    //Runs the game
    runGame(){
        this.chooseGame();
        while(this.playerOne.score < 3 && this.playerTwo.score < 3){
            console.log(`its ${this.playerOne.name}'s turn `);
            let playerOnesChoice = this.playerOne.chooseAnOption();
            console.log(`its ${this.playerTwo.name}'s turn: `);
            let playerTwosChoice = this.playerTwo.chooseAnOption();
            this.calculateWinner(playerOnesChoice,playerTwosChoice);
            console.log(`${this.playerOne.name}'s score is ${this.playerOne.score} and ${this.playerTwo.name}'s score is ${this.playerTwo.score}`)
        }
        this.displayWinner();
    }
    calculateWinner(playerOnesChoice, playerTwosChoice){
        // players choice rock and paper
        if(playerOnesChoice === playerTwosChoice){
            console.log("You both chose the same option pick again: ")
        }
        else if (playerOnesChoice === "rock" && playerTwosChoice === "paper"){
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
            console.log("rock smashes scissors");
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
            this.playerOne.score++
        }
        else if(playerTwosChoice === "scissors" && playerOnesChoice === "lizard"){
            console.log("scissors decapiatates lizard");
            this.playerTwo.score++;
        }
        //players choose lizard and spock
        else if (playerOnesChoice === "lizard" && playerTwosChoice === "spock"){
            console.log("lizard poisons spock");
            this.playerOne.score++
        }
        else if(playerTwosChoice === "lizard" && playerOnesChoice === "spock"){
            console.log("lizard posions spock");
            this.playerTwo.score++;
        }
        //players choose spock and paper
        else if (playerOnesChoice === "spock" && playerTwosChoice === "paper"){
            console.log("paper disproves spock");
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
            console.log("spock smashes scissors");
            this.playerOne.score++
        }
        else if(playerTwosChoice === "spock" && playerOnesChoice === "scissors"){
            console.log("spock smashes scissors");
            this.playerTwo.score++;
        }
    }
    displayWinner(){
        // if (this.playerOne.score === 3){
        //     console.log(this.playerOne.name + " has won the game");
        // }
        // if(this.playerTwo.score === 3){
        //     console.log(this.playerTwo.name + " has won the game");
        // }
        
        if(this.playerOne.score > this.playerTwo.score) {
            console.log(this.playerOne.name + " wins this game!");
        }
        else {
            console.log(this.playerTwo.name + " wins this game!");
        }
          
    }
}
module.exports= Game;