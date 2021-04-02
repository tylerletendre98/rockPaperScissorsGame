const Gestures = require("./gestures");


class Player {
    constructor (name) {
        this.score = 0
        this.name = name;
        this.choices = ['rock','paper','scissors','lizard','spock'];
    }

}

module.exports = Player;