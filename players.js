const prompt = require("prompt-sync")();
class Player {
    constructor (name) {
        this.score = 0
        this.name = name;
        this.choices = ['rock','scissors','paper','lizard','spock'];
    }

}
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


module.exports = Player;
module.exports = Human;
module.exports = Computer;