var prompt = require('prompt');
prompt.start();

var life = {
	hungry: true,
	keepPromptingUser : function() {
		var self = this; //reference "this", which is the life object with a "self" variable

		if (self.hungry == true){ //"self" is the life object
			prompt.get(['wantFood'], function(err, result) {
				self.hungry = result.wantFood; //"self" is the life object

			    if (self.hungry == 'yes'){ //"self" is the life object
			    	console.log("Here's some Pad See Ew!")
			    	self.keepPromptingUser(); //"self" is the life object
			    }else{
			    	console.log("Take a nap. You had a big meal.");
			    }
			});
		}
	}

}

life.keepPromptingUser();
