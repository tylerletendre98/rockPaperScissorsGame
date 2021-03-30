class Player {
    constructor (name) {
        this.score = 0
        this.name = name;
        this.choice = ['rock','scissors','paper','lizard','spock'];
    }
    chooseAndOption(){
    let playersChoice = prompt(`What option would you like to choose rock, paper , scissors, `);
    return playersChoice;
    }
}
class Human extends Player{
    constructor(){
        super();
    }
}
class Computer extends Player{
    constructor(){
        super();
    }
    chooseAndOption(){
        let computersChoice = this.choice[Math.floor(Math.random() * this.choice.length)];
        return computersChoice;
    }
}


module.exports = Player;
module.exports = Human;
module.exports = Computer;