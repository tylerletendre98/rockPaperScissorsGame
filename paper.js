const Gestures = require('./gestures');

class Paper extends Gestures{
    constructor(name){
        super(name)
    }
    compare(otherPlayersGesture){
        if (otherPlayersGesture == "paper"){
                console.log("sorry you both tied pick again");
                return 0;
        }
        else if (otherPlayersGesture == "rock"){
                console.log('paper covers rock');
                return 1;
        }
        else if (otherPlayersGesture == "spock"){
                console.log("paper disproves spock");
                return 1;
        }
    }
}
module.exports = Paper;