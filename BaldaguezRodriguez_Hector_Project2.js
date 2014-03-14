// Hector Baldaguez Rodriguez
// SDI 1403
// 03/13/2014
// Project 2



// My Variables
var title = "BladeBow Hunter";
var myDecision = "yes"
var huntBord = "Hunting Board";
var userName;

var say = function (message) {console.log(message);};
// My Prompt and Proceduer 
alert("Welcome to " + title)
userName = prompt("What is your Hunter name?");

var userN = function (hunter) {
    
    say("Your Hunter Name is " + userName);
    
};
userN(name)

// Confrimation


myDecision = confirm("Choose a Mission from the " + huntBord + ". Ok for Scrapler or Cancel for Gunner");

var decision = function (mission) {
    
    if (myDecision === true) {
        //Mission to choose.
        say("Let's go hunting.");
    } else {
        say("Let's take him down.");
    };
    return;
};
decision();

// My battle section

var attaking = function (hitPoints) {
    
    var attack = true;
    
    while (hitPoints > -330) {
        
        say("Slash him to death");
        say("He's going down only " + hitPoints + " HP left");
        attack = true
        
        attack = confirm("Time to hunt. OK to attack and Cancel to escape."); 
        
        if (attack === true) {
            hitPoints = hitPoints -370;
        } else {
            say("To bad.");
            attack = false 
            
        }   
        
    }     
    return hitPoints;
};             
var hp = attaking(3000);
say("The monster has " + hp + " life left");

// This part is for the cunsumption of experience points.

var exp = function () { 
    var levelInc = 150;
    var expPoints = 1200;
    while (expPoints >= levelInc){
        say("Incrising the level of the weapon by " + levelInc);
        
    };    
        for (levelInc = 150; expPoints <= 1200; levelInc++){
            
        };
    
};  