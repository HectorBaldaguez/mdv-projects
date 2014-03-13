// Hector Baldaguez Rodriguez
// SDI 1403
// 03/13/2014
// Project 2
//


// My Variables
var title = "BladeBow Hunter";
var myDecision = "yes"
var hitPoints;
var huntBord = "Hunting Board";
var scraplerHP = 2700;
var gunnerHP = 3000;
var userName;

var say = function (message) {console.log(message);};

// My Prompt and Proceduer 

userName = prompt("What will be you'er Hunter name","Hunter Name");

var user = function () {
    say("Your Hunter Name is " + userName);
    
}
user()

// Confrimation

myDecision = confirm("Want to play " + title + " ?");

var decision = function () {
    
    if (myDecision === true) {
        //Decision to play or not
        say("Let's go hunting.");
    } else {
        say("To bad. I guess you'll be the hunted then.");
    };
    return;
};

decision()




