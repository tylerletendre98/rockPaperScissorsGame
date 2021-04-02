const Gestures = require("./gestures");

class Scissors extends Gestures{
    constructor(name){
        super(name)
    }
    compare(otherPlayersGesture){
        if (otherPlayersGesture == "scissors"){
            console.log("sorry you both tied pick again");
            return 0;
        }
        else if(otherPlayersGesture == "paper"){
            console.log("scissors cuts paper");
            return 1;
        }
        else if(otherPlayersGesture == "lizard"){
            console.log('scissors decapitates lizard');
            return 1;
        }
    }
}
module.exports = Scissors;