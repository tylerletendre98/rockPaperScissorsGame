const Gestures = require('./gestures');

class Rock extends Gestures{
    constructor(name){
        super(name)
    }
    compare(otherPlayersGesture){
        if (otherPlayersGesture == "rock"){
            console.log("sorry you both tied pick again");
            return 0;
        }
        else if(otherPlayersGesture == "scissors"){
            console.log("rock smashes paper");
            return 1;
        }
        else if(otherPlayersGesture == "lizard"){
            console.log('rock smashes lizard');
            return 1;
        }
    }
}
module.exports = Rock;