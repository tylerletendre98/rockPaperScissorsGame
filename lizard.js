const Gestures = require("./gestures");


class Lizard extends Gestures{
    constructor(name){
        super(name)
    }
    compare(otherPlayersGesture){
        if (otherPlayersGesture == "lizard"){
            console.log("sorry you both tied pick again");
            return 0;
        }
        else if(otherPlayersGesture == "paper"){
            console.log('lizard eats paper');
            return 1;
        }
        else if (otherPlayersGesture == "spock"){
            console.log("lizard poisons spock");
            return 1;
        }
    }
}
module.exports = Lizard;