const prompt = require("prompt-sync")();
class Player {
    constructor (name) {
        this.score = 0
        this.name = name;
        this.choices = ['rock','scissors','paper','lizard','spock'];
    }

}

module.exports = Player;