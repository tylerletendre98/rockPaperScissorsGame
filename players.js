const Gestures = require("./gestures");
const Lizard = require("./lizard");
const Paper = require("./paper");
const Rock = require("./rock");
const Scissors = require("./scissors");
const Spock = require("./spock");


class Player {
    constructor (name) {
        this.score = 0
        this.name = name;
        this.choices = ['rock','paper','scissors','lizard','spock'];
    }

}

module.exports = Player;