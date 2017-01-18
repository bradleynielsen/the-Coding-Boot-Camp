//REQUIRE INQUIRER
var inquirer = require('inquirer');

//CONSTRUCTOR FUNCTION FOR CREATING Player OBJECTS
function Player(name, position, offense, defense) {
    this.name = name,
    this.position = position,
    this.offense = offense,
    this.defense = defense,
    //FLIPS A COIN: IF THE THE VALUE IS EQUAL TO 0 THEN this.offense GOES UP BY ONE. IF THE VALUE IS EQUAL TO 1
    this.goodGame = function() {
        if (Math.floor(Math.random() * 2) == 0) {
            this.offense++;
            console.log(this.name + "'s offense has gone up!\n----------");
        } else {
            this.defense++;
            console.log(this.name + "'s defense has gone up!\n----------");
        }
    },
    this.badGame = function() {
        if (Math.floor(Math.random() * 2) == 0) {
            this.offense--;
            console.log(this.name + "'s offense has gone down!\n----------");
        } else {
            this.defense--;
            console.log(this.name + "'s defense has gone down!\n----------");
        }
    },
    this.printStats = function() {
        console.log("Name: " + this.name + "\nPosition: " + this.position + "\nOffense: " + this.offense + "\nDefense: " + this.defense + "\n----------");
    }
}

//ARRAYS USED TO CONTAIN ALL OF OUR PLAYER OBJECTS
var starters = [];
var subs = [];
var score = 0;

//RECURSIVE FUNCTION WHICH WILL ALLOW THE USER TO CREATE 5 PLAYERS AND THEN WILL PRINT EACH PLAYER'S STATS AFTERWARDS
var createPlayer = function() {
    //IF THE LENGTH OF THE team ARRAY IS 8 OR HIGHER, NO MORE QUESTIONS WILL BE ASKED
    if (starters.length + subs.length < 8) {
        console.log("\nNEW PLAYER!\n");
        inquirer.prompt([{
            name: "name",
            message: "Player's Name: "
        }, {
            name: "position",
            message: "Player's position: "
        }, {
            name: "offense",
            message: "Player's Offensive Ability: ",
            validate: function(value) {
                if (isNaN(value) == false && parseInt(value) > 0 && parseInt(value) <= 10) {
                    return true;
                } else {
                    return false;
                }
            }
        }, {
            name: "defense",
            message: "Player's Defensive Ability: ",
            validate: function(value) {
                if (isNaN(value) == false && parseInt(value) > 0 && parseInt(value) <= 10) {
                    return true;
                } else {
                    return false;
                }
            }
        }]).then(function(answers) {
            //RUNS THE CONSTRUCTOR AND PLACES THE NEW Player OBJECT INTO THE VARIABLE player.  TURNS THE offense AND defense VARIABLES INTO INTEGERS AS WELL WITH parseInt
            var player = new Player(answers.name, answers.position, parseInt(answers.offense), parseInt(answers.defense));
            //ADDS A PLAYER TO THE starters ARRAY IF THERE ARE LESS THAN FIVE Player OBJECTS IN IT. OTHERWISE ADDS THE NEWEST Player OBJECT TO THE subs ARRAY.
            if (starters.length < 5) {
                starters.push(player);
                console.log(player.name + " added to the starters");
            } else {
                subs.push(player);
                console.log(player.name + " added to the subs");
            }
            //RUNS THE createPlayer FUNCTION ONCE MORE
            createPlayer();
        })
    } else {
        //LOOPS THROUGH THE team ARRAY AND CALLS printStats() FOR EACH OBJECT IT CONTAINS
        for (var i = 0; i < team.length; i++) {
            team[i].printStats();
        }
    }
}

//CALLS THE FUNCTION createPlayer() TO START THE CODE
createPlayer();
