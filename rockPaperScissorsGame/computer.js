"use strict";
const Player = require("./players");

class Computer extends Player{
    constructor(name){
        super(name);
    }
     chooseAnOption(){
         let computersChoice = this.choices[Math.floor(Math.random() * this.choices.length)];
         console.log("Computers choice was " + computersChoice)
         return computersChoice;
    }
}
module.exports = Computer;