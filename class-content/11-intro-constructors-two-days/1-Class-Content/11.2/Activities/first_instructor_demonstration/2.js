var prompt = require('prompt');
prompt.start();

var hungry = 'yes';

var areYouHungry = function(){
  if (hungry == 'yes'){
    prompt.get(['wantFood'], function(err, result) {
      hungry = result.wantFood;
        if (hungry == 'yes'){
          console.log("Here's some Pad See Ew!")
          areYouHungry();
        }else{
          console.log("Take a nap. You had a big meal.");
        }
    });
  }
}
areYouHungry();
