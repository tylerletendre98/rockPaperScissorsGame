"use strict";
const Player = require("./players");
const prompt = require("prompt-sync")();

class Human extends Player{
    constructor(name){
        super(name);
    }
    chooseAnOption(){
        let playersChoice = prompt("What option would you like to choose 1.rock  2.paper  3.scissors 4.lizard  5.spock  option: ");
        if (playersChoice == "1"){
            console.log("Your choice was " + this.choices[0]);
            return this.choices[0];
        }
        else if(playersChoice == "2"){
            console.log("Your choice was " + this.choices[1]);
            return this.choices[1];
        }
        else if(playersChoice == "3"){
            console.log("Your choice was " + this.choices[2]);
            return this.choices[2];
        }
        else if(playersChoice == "4"){
            console.log("Your choice was " + this.choices[3]);
            return this.choices[3];
        }
        else if(playersChoice == "5"){
            console.log("Your choice was " + this.choices[4]);
            return this.choices[4];
        }
        else{
            console.log("that was not a valid responce please try again");
            return this.chooseAnOption();
        }
    }

}
module.exports = Human;