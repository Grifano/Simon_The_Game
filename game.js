// Create a new array called buttonColours and set it to hold the sequence "red", "blue", "green", "yellow".
var buttonColours = ["red", "blue", "green", "yellow"];
// Create a new empty array called gamePattern.
var gamePattern = [];
// New empty array with the name userClickedPattern.
var userClickedPattern = [];
// Create a new variable called level and start at level 0.
var level = 0;
//Way to keep track of whether if the game has started or not, so you only call nextSequence() on the first keypress.
var started = false;

// The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
// Inside nextSequence(), increase the level by 1 every time nextSequence() is called.
// Inside nextSequence(), update the h1 with this change in the value of level.

// ***> Start The Game:
$(document).keypress(function (e) {
	if (!started) {
		nextSequence();
		started = true //?
	} else {
		// Reload the game
		$(document).keypress(function (e) {
			window.location.reload();
		});
	}
});


// 1. Create a new function called checkAnswer(), it should take one input with the name currentLevel
function checkAnswer(currentLevel) {
	// 2. Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.
	// called in detect click function
	// 3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern.If so then log "success", otherwise log "wrong".
	if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
		// 4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
		if (gamePattern.length === userClickedPattern.length) {
			// 5. Call nextSequence() after a 1000 millisecond delay.
			setTimeout(function () {
				nextSequence();
			}, 1000)
		}
	} else {
		// 2. Call startOver() if the user gets the sequence wrong.

		// 1. In the sounds folder, there is a sound called wrong.mp3, play this sound if the user got one of the answers wrong.
		playSound("wrong");
		// 2. In the styles.css file, there is a class called "game-over", apply this class to the body of the website when the user gets one of the answers wrong and then remove it after 200 milliseconds.
		$('body').addClass('game-over');
		setTimeout(function () {
			$('body').removeClass('game-over');
		}, 200)
		// 3. Change the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.
		$('#level-title').text("Game Over, Press Any Key to Restart");
		startOver();
	}

}
// 1. Create a new function called startOver().
function startOver() {
	// 3. Inside this function, you'll need to reset the values of level, gamePattern and started variables.
	level = 0;
	gamePattern = [];
	started = false;
}



// Detect when any of the buttons are clicked and trigger a handler function.
$('.btn').click(function (event) {
	// Create a new variable called userChosenColour to store the id of the button that got clicked.
	var userChosenColour = $(this).attr('id');
	// Add the contents of the variable userChosenColour to the end of userClickedPattern.
	userClickedPattern.push(userChosenColour);
	// Play the sound for the button colour selected.
	playSound(userChosenColour);
	animatePress($(this));
	checkAnswer(userClickedPattern.length - 1);
})

// Playing the sound
function playSound(name) {
	// Play the sound for the button colour selected.
	var sound = new Audio("sounds/" + name + ".mp3");
	sound.play();
}
// Animating the clicked button
function animatePress(currentColour) {
	// Use jQuery to add this pressed class to the button that gets clicked inside animatePress().
	currentColour.addClass('pressed');
	// use Google / Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.
	setTimeout(function () {
		currentColour.removeClass('pressed');
	}, 100)
}
// Main/Next round function
function nextSequence() {
	// 6. Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.
	userClickedPattern = [];
	// ***> Start The Game:
	$('#level-title').text("Level " + level);
	level++;

	// Generate a new random number between 0 and 3, and store it in a variable
	var randomNumber = Math.floor(Math.random() * 4);
	// Create a new variable called randomChosenColour and use the randomNumber 
	// to select a random colour from the buttonColours array.
	var randomChosenColour = buttonColours[randomNumber];
	// Add the new randomChosenColour to the end of the gamePattern.
	gamePattern.push(randomChosenColour);
	// Select the button with the same id as the randomChosenColour
	var selectedBtn = "#" + randomChosenColour;
	// Animate a flash to the button selected.
	$(selectedBtn).fadeOut(100).fadeIn(100);
	// Play the sound for the button colour selected.
	var sound = new Audio("sounds/" + randomChosenColour + ".mp3");
	sound.play();
}