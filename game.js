"use strict";
const Human = require("./human");
const Computer = require("./computer");
const prompt = require('prompt-sync')();
const Gestures = require('./gestures');
const Rock = require("./rock");
const Paper = require('./paper');
const Scissors = require('./scissors');
const Lizard = require('./lizard');
const Spock = require('./spock');

class Game {
    constructor(){
        this.playerOne = null
        this.playerTwo = null
    }
    //Runs the game
    runGame(){
        this.chooseGame();
        this.playTillWinner();
        this.displayWinner();
        this.playerAnotherGame();
    }
    //player chooses if they want a one or two player game
    chooseGame(){
    let userInput = prompt("How many players will be playing one or two?: ");
        switch(userInput){
        case "two":
                this.playerOne = new Human ("tyler");
                this.playerTwo = new Human ("bubba");
                break;
        case  "one":
                this.playerOne = new Human ("tyler");
                this.playerTwo = new Computer ("computer");
                break;
        default:
                console.log("that was not a valid response please try again one or two: ");
                return this.chooseGame();
        }
    }
    //loops till someone reaches a score of three
    playTillWinner(){
        while(this.playerOne.score < 3 && this.playerTwo.score < 3){
            console.log(`its ${this.playerOne.name}'s turn `);
                let playerOnesChoice = this.playerOne.chooseGesture();
            console.log(`its ${this.playerTwo.name}'s turn: `);
                let playerTwosChoice = this.playerTwo.chooseGesture();
            this.calculateWinner(playerOnesChoice,playerTwosChoice);
            console.log(`${this.playerOne.name}'s score is ${this.playerOne.score} and ${this.playerTwo.name}'s score is ${this.playerTwo.score}`);
        }
    }
    //asks if the player wants to play again
    playerAnotherGame(){
        let anotherGame = prompt("Do you want to play another game yes or no: ");
        if (anotherGame == "yes"){
            return this.runGame();
        }
        else if (anotherGame == "no"){
            console.log("Thankyou for playing Rock Paper Scissors Lizard Spock!");
        }
        else {
            (console.log("that was not a valid response."))
        }
    }
    //displays winner of the game 
    displayWinner(){
        if(this.playerOne.score > this.playerTwo.score) {
            console.log(this.playerOne.name + " wins the game!");
        }
        else {
            console.log(this.playerTwo.name + " wins the game!");
        }
          
    }
    // runs the outcome of the two choices
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
            console.log("lizard eats paper");
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
}
    module.exports= Game;