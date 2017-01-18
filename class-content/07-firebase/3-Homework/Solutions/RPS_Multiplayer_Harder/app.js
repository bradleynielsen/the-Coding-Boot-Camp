// Initialize Firebase
var config = {
  apiKey: "AIzaSyAgEuXgOYwmHK_RqpVzMIJDRLD5ZB7UbbQ",
  authDomain: "rps-multi-7fedd.firebaseapp.com",
  databaseURL: "https://rps-multi-7fedd.firebaseio.com",
  storageBucket: "rps-multi-7fedd.appspot.com",
};
firebase.initializeApp(config);

var database = firebase.database();
var chatData = database.ref("/chat")
var playersRef = database.ref("players")
var currentTurnRef = database.ref("turn")

var username = "Guest";
var currentPlayers = null;
var currentTurn = null;
var playerNum = false;
var playerOneExists = false;
var playerTwoExists = false;
var playerOneData = null;
var playerTwoData = null;

//USERNAME LISTENERS
//Start button - takes username and tries to get user in game
$('#start').click(function() {
  if ($('#username').val() !== "") {
    username = capitalize($('#username').val());
    getInGame();
  }
});
//listener for 'enter' in username input
$('#username').keypress(function(e) {
  if (e.keyCode == 13 && $('#username').val() !== "") {
    username = capitalize($('#username').val());
    getInGame();
  }
});

//Function to capitalize usernames
function capitalize(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

//CHAT LISTENERS
//Chat send button listener, grabs input and pushes to firebase. (Firebase's push automatically creates a unique key)
$('#chatsend').click(function() {
  if ($('#chatinput').val() !== "") {
    var message = $('#chatinput').val();
    chatData.push({
      name: username,
      message: message,
      time: firebase.database.ServerValue.TIMESTAMP,
      idNum: playerNum
    });
    $('#chatinput').val("");
  }
});

//Chatbox input listener
$('#chatinput').keypress(function(e) {
  if (e.keyCode == 13 && $('#chatinput').val() !== "") {
    var message = $('#chatinput').val();
    chatData.push({
      name: username,
      message: message,
      time: firebase.database.ServerValue.TIMESTAMP,
      idNum: playerNum
    });
    $('#chatinput').val("");

  }
});


//click event for dynamically added li elements
$(document).on('click', 'li', function() {
  console.log('click');
  //grabs text from li choice
  var clickChoice = $(this).text();
  console.log(playerRef)
  //sets the choice in the current player object in firebase
  playerRef.child('choice').set(clickChoice);

  //user has chosen, so removes choices and displays what they chose
  $('#player' + playerNum + ' ul').empty();
  $('#player' + playerNum + 'chosen').html(clickChoice);

  //increments turn. Turn goes from:
  //1 - player 1
  //2 - player 2
  //3 - determine winner
  currentTurnRef.transaction(function(turn) {
    return turn + 1;
  });
});

//Update chat on screen when new message detected - ordered by 'time' value
chatData.orderByChild("time").on('child_added', function(snapshot) {

  //if idNum is 0, then its a disconnect message and displays accordingly
  //if not - its a user chat message
  if (snapshot.val().idNum === 0) {
    $('#chatmessages').append('<p class=player' + snapshot.val().idNum + '><span>' + snapshot.val().name + '</span>' + ' ' + snapshot.val().message + '</p>');
  } else {
    $('#chatmessages').append('<p class=player' + snapshot.val().idNum + '><span>' + snapshot.val().name + '</span>' + ': ' + snapshot.val().message + '</p>');
  }
  //keeps div scrolled to bottom on each update.
  $('#chatmessages').scrollTop($("#chatmessages")[0].scrollHeight);
});

//tracks changes in key which contains player objects
playersRef.on('value', function(snapshot) {
  //length of the 'players' array
  currentPlayers = snapshot.numChildren();

  //check to see if players exist
  playerOneExists = snapshot.child('1').exists();
  playerTwoExists = snapshot.child('2').exists();

  //player data objects
  playerOneData = snapshot.child('1').val();
  playerTwoData = snapshot.child('2').val();

  //If theres a player 1, fill in name and win loss data
  if (playerOneExists) {
    $('#player1name').text(playerOneData.name);
    $('#player1wins').text("Wins: " + playerOneData.wins);
    $('#player1losses').text("Losses: " + playerOneData.losses);

  } else {
    //if there is no player 1, clear win/loss data and show waiting
    $('#player1name').text("Waiting for Player 1");
    $('#player1wins').empty();
    $('#player1losses').empty();
  }

  //if theres a player 2, fill in name and win/loss data
  if (playerTwoExists) {
    $('#player2name').text(playerTwoData.name);
    $('#player2wins').text("Wins: " + playerTwoData.wins);
    $('#player2losses').text("Losses: " + playerTwoData.losses);
  } else {
    //if no player 2, clear win/loss and show waiting
    $('#player2name').text("Waiting for Player 2");
    $('#player2wins').empty();
    $('#player2losses').empty();
  }
});



//Detects changes in current turn key
currentTurnRef.on('value', function(snapshot) {
  //gets current turn from snapshot
  currentTurn = snapshot.val();

  //dont do the following unless you're logged in
  if (playerNum) {
    //for turn 1
    if (currentTurn == 1) {

      //if its the current player's turn, tell them and show choices
      if (currentTurn == playerNum) {
        $('#currentturn').html('<h2>It\'s Your Turn!</h2>');
        $('#player' + playerNum + ' ul').append('<li>Rock</li><li>Paper</li><li>Scissors</li>');
      } else {

        //if it isnt the current players turn, tells them theyre waiting for player one
        $('#currentturn').html('<h2>Waiting for ' + playerOneData.name + ' to choose.</h2>');
      }

      //shows yellow border around active player
      $('#player1').css('border', '2px solid yellow');
      $('#player2').css('border', '1px solid black');
    } else if (currentTurn == 2) {

      //if its the current player's turn, tell them and show choices
      if (currentTurn == playerNum) {
        $('#currentturn').html('<h2>It\'s Your Turn!</h2>');
        $('#player' + playerNum + ' ul').append('<li>Rock</li><li>Paper</li><li>Scissors</li>');
      } else {
        //if it isnt the current players turn, tells them theyre waiting for player two
        $('#currentturn').html('<h2>Waiting for ' + playerTwoData.name + ' to choose.</h2>');
      }
      //shows yellow border around active player
      $('#player2').css('border', '2px solid yellow');
      $('#player1').css('border', '1px solid black');
    } else if (currentTurn == 3) {
      ///where the game win logic takes place then resets to turn 1
      gameLogic(playerOneData.choice, playerTwoData.choice);

      //reveal both player choices
      $('#player1chosen').html(playerOneData.choice);
      $('#player2chosen').html(playerTwoData.choice);

      // reset after timeout
      var moveOn = function() {
        $('#player1chosen').empty();
        $('#player2chosen').empty();
        $('#result').empty();

        //check to make sure players didnt leave before timeout
        if (playerOneExists && playerTwoExists) {
          currentTurnRef.set(1);
        }
      };

      // show results for 2 seconds, then resets
      setTimeout(moveOn, 2000);

    } else {
      // if (playerNum) {
      //   $('#player' + playerNum + ' ul').empty();
      // }
      $('#player1 ul').empty();
      $('#player2 ul').empty();

      $('#currentturn').html('<h2>Waiting for another player to join.</h2>');
      $('#player2').css('border', '1px solid black');
      $('#player1').css('border', '1px solid black');
    }
  }
});




//When a player joins, checks to see if there are two players now. If yes, then it will start the game.
playersRef.on('child_added', function(snapshot) {
  if (currentPlayers == 1) {

    //set turn to 1, which starts the game
    currentTurnRef.set(1);
  }
});










//Function to get in the game
function getInGame() {
  //For adding disconnects to the chat with a unique id (the date/time the user entered the game)
  //Needed because Firebase's '.push()' creates its unique keys client side, so you cant '.push()' in a '.onDisconnect'
  var chatDataDisc = database.ref("/chat/" + Date.now());

  //checks for current players, if theres a player one connected, then the user becomes player 2.
  //if there is no player one, then the user becomes player 1
  if (currentPlayers < 2) {
    if (playerOneExists) {
      playerNum = 2;
    } else {
      playerNum = 1;
    }

    //creates key based on assigned player number
    playerRef = database.ref("/players/" + playerNum);


    //creates player object. 'choice' is unnecessary here, but I left it in to be as complete as possible
    playerRef.set({
      name: username,
      wins: 0,
      losses: 0,
      choice: null
    });

    //on disconnect remove this user's player object
    playerRef.onDisconnect().remove();

    //if a user disconnects, set the current turn to 'null' so the game does not continue
    currentTurnRef.onDisconnect().remove();

    //send disconnect message to chat with Firebase server generated timestamp and id of '0' to denote system message
    chatDataDisc.onDisconnect().set({
      name: username,
      time: firebase.database.ServerValue.TIMESTAMP,
      message: 'has disconnected.',
      idNum: 0
    });

    //Remove name input box and show current player number.
    $('#swapzone').html('<h2>Hi ' + username + '! You are Player ' + playerNum + '</h2>');

  } else {
    //if current players is '2', will not allow the player to join
    alert('Sorry, Game Full! Try Again Later!');
  }
}



//Game logic - Tried to space this out and make it more readable. Displays who won, lost, or tie game in result div.
//Increments wins or losses accordingly.

function gameLogic(player1choice, player2choice) {
  var playerOneWon = function(){
    $('#result').html('<h2>' + playerOneData.name + '</h2>' + '<h2>Wins!</h2>');

    if(playerNum === 1){
      playersRef.child('1').child('wins').set(playerOneData.wins + 1);
      playersRef.child('2').child('losses').set(playerTwoData.losses + 1);
    }
  };

  var playerTwoWon = function(){
    $('#result').html('<h2>' + playerTwoData.name + '</h2>' + '<h2>Wins!</h2>');

    if(playerNum === 2){
      playersRef.child('2').child('wins').set(playerTwoData.wins + 1);
      playersRef.child('1').child('losses').set(playerOneData.losses + 1);
    }
  };
  var tie = function(){
    $('#result').html('<h2>Tie Game!</h2>');
  };

  if (player1choice == 'Rock' && player2choice == 'Rock') {
    tie();
  } else if (player1choice == 'Paper' && player2choice == 'Paper') {
    tie();
  } else if (player1choice == 'Scissors' && player2choice == 'Scissors') {
    tie();
  } else if (player1choice == 'Rock' && player2choice == 'Paper') {
    playerTwoWon();
  } else if (player1choice == 'Rock' && player2choice == 'Scissors') {
    playerOneWon();
  } else if (player1choice == 'Paper' && player2choice == 'Rock') {
    playerOneWon();
  } else if (player1choice == 'Paper' && player2choice == 'Scissors') {
    playerTwoWon();
  } else if (player1choice == 'Scissors' && player2choice == 'Rock') {
    playerTwoWon();
  } else if (player1choice == 'Scissors' && player2choice == 'Paper') {
    playerOneWon();
  }
}
