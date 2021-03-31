"use strict";
const PromptSync = require("prompt-sync");
const Player = require("./players");
const prompt = require("prompt-sync")();

class Human extends Player{
    constructor(name){
        super(name);
    }
    chooseAnOption(){
        let playersChoice = prompt("What option would you like to choose 1.rock \. 2.paper \. 3.scissors\. 4.lizard \. 5.spock ");
        console.log("Your choice was " + playersChoice);
        return playersChoice;
    }

}
module.exports = Human;