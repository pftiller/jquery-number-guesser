$(document).ready(numberGuesserGame);

function numberGuesserGame() {
  //event listener
  $('#guess_button').on('click', getUserNumber);

  //Define our Number
  var theNumber = 7;

  //Get user value on button click
  function getUserNumber() {
    var userNumber = $('#guess_input').val();

    console.log(userNumber);
    //Check to see if user value is between 1 and 10
    if (userNumber % 1 == 0 && userNumber > 0 && userNumber < 11) {
      return userNumber;
    }
    //If not between 1 and 10, alert user (no decimals)
    else {
      alert('Number must be a whole number and between 1 and 10');
    }
    $('#guess_input').val('').focus(); //clear input
  }
  //Compare user value to our Number

  //If correct, then update text and change background color to green

  //If not correct, check if greater or less than our number

  //If user value is greater, print 'Guess Lower' and change background color to yelllow

  //If user value is less, print 'Guess Higher' and change background color to orange
}
//*HARD MODE* Add a new button to reset game
