var prompt = require('prompt');
prompt.start();

var life = {
	hungry: true,
	keepPromptingUser : function() {
		if (this.hungry == true){ //"this" is the life object
			prompt.get(['wantFood'], function(err, result) {
				this.hungry = result.wantFood; //"this" is the prompt object because we are inside the prompt callback

			    if (this.hungry == 'yes'){ //"this" is the prompt object because we are inside the prompt callback
			    	console.log("Here's some Pad See Ew!")
			    	this.keepPromptingUser(); //"this" is the prompt object because we are inside the prompt callback
			    }else{
			    	console.log("Take a nap. You had a big meal.");
			    }
			});
		}
	}

}

life.keepPromptingUser();
