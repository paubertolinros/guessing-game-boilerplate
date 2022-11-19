
// You will ONLY working on the class SecretNumberGame.
// ⚠️ At the end of the file it is already instanced and the button already has the method called, so make sure the name is the same

class SecretNumberGame {
  // It will have 3 properties:
  // - secretNumber: will be an array of 3 random numbers between 0 and 9. 
  // - maxAttempts: will be a number passed to the constructor function. If not passed, the default value will be 10
  // - userAttempts: it will start at 0 and it will increase each time the user clicks the guess button


  // It will also have 2 methods:
  checkAttempt() {
    // Will increase the userAttempts every time it's clicked.
    // Will iterate (with a for loop) through the input values (remember by default they are strings) and it will check
    // their positions. For each guessed number, it will give feedback depending on: the guessed number is one of the secret numbers but it's not in the right position, the guessed number is NOT one of the secret numbers, or the guessed number is right AND in the right position.
    // It will have a rightGuesses counter and, if they are 3, it means the user got all of them right, and the user will be alerted to win.
    // It will also include in the span "attempts-user" the number of attempts that the user has used so far
    // At the end of the method, will invoke the _checkIfLost() method
  }

  _checkIfLost() {
    // Will check if the user has used 10 attempts already and, in that case, it will:
    // 1. alert them a message saying "You lost, the secret number was X,X,X"
    // 2. get the guess-btn button and set its attribute "disabled" to "true" (you can use setAttribute for this) so that the user can't click it anymore
  }
}

const game = new SecretNumberGame();