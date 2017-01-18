var prompt = require('prompt');
prompt.start();

var hungry = 'yes';

while(hungry == 'yes'){
  prompt.get(['wantFood'], function(err, result) {
    hungry = result.wantFood;
      if (hungry == 'yes'){
        console.log("Here's some Pad See Ew!")
      }else{
        console.log("Take a nap. You had a big meal.");
      }
  });
}
