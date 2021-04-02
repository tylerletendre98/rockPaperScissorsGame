const Gestures = require('./gestures');

class Spock extends Gestures{
    constructor(name){
        super(name)
    }
    compare(otherPlayersGesture){
        if (otherPlayersGesture == "spock"){
            console.log("sorry you both tied pick again");
            return 0;
        }
        else if (otherPlayersGesture == "rock"){
            console.log('spock vaporizes rock');
            return 1;
        }
        else if(otherPlayersGesture == "scissors"){
            console.log("spock smashes scissors");
            return 1;
        }
    }
}
module.exports = Spock;