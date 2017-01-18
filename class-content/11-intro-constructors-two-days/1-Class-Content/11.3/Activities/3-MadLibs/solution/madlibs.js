/**
 * madlibs.js solution
 **/

// Inquirer dependency
var inquirer = require("inquirer");

// The madlib constructor
function MadLib(nouns,adjectives,verbs) {
	this.nouns = nouns;
	this.adjectives = adjectives;
	this.verbs = verbs;
	this.story = "Once upon a [noun] there was a [adjective] village filled with [noun]. The villagers loved to [verb] all day long.";
	// When does the story get personalized?
	// That will become clear at the end of this file.
}

// Global variables
var loop = 0;
var nouns = [];
var adjectives = [];
var verbs = [];

// Our inquirer prompts, set up as a looping function
var getWords = function(loop){
	// We get two nouns.
	if(loop < 2){
		inquirer.prompt({
			name:"noun",
			message:"Enter a noun: "
		}).then(function(answer){
			// Notice how this promis method 
			// pushes the noun into the global nouns array
			nouns.push(answer.noun);
			// It then iterates the loop,
			loop++;
			// and runs the getWords function again,
			// but with the new value of loop for the argument.
			getWords(loop);
		})
	}
	// Then we get an adjective.
	if(loop >= 2 && loop < 3){
		inquirer.prompt({
			name:"adjective",
			message: "Enter an adjective: "
		}).then(function(answer){
			// The adjective portion's promise method 
			// is the same as the noun portion.
			adjectives.push(answer.adjective);
			loop++;
			getWords(loop);
		})
	}
	// Then, a verb.
	if(loop >= 3 && loop < 4){
		inquirer.prompt({
			name:"verb",
			message:"Enter a verb: "
		}).then(function(answer){
			// This should look familiar.
			verbs.push(answer.verb);
			loop++;
			getWords(loop);
		})
	}
	// When GetWords reaches loop 4, 
	// it takes the data the user entered
	// and instantiates an object of the madlib class.
	if(loop >= 4){
		var madLib = new MadLib(nouns,adjectives,verbs);
		// The new object is then sent to the constructStory function.
		constructStory(madLib);
	}
}

// This function edits the story in a madLibs object
// to reflect the nouns, adjectives and verbs that the user entered.
var constructStory = function(completeObject){
	console.log("got in here");
	// two nouns
	for(var i=0;i<2;i++){
		completeObject.story = completeObject.story.replace("[noun]",completeObject.nouns[i]);
	}
	// one adjective
	for(var i=0;i<1;i++){
		completeObject.story = completeObject.story.replace("[adjective]",completeObject.adjectives[i]);
	}
	// one verb
	for(var i=0;i<1;i++){
		completeObject.story = completeObject.story.replace("[verb]",completeObject.verbs[i]);
	}
	// Then, show the user the story.
	console.log(completeObject.story);
}

// With all of our global variables and functions defined
// we can now trigger the getWords function and set our app in motion.
getWords(loop);