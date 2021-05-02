# App Brewery - The Simon Game

This is a Boss Challenge from [The Complete 2021 Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp/) that I'm working on. And it’s course is amazing. And instructor Angela Yu is amazing teacher👍 She was explaining very easy to understand, and provide an interesting practice.

## Table of contents

- [Overview](#overview)
  - [How to play](#how-to-play)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
<!-- - [Acknowledgments](#acknowledgments) -->

## Overview

### How to play?

The screen has four colored buttons, each producing a particular tone when it is pressed or activated by the device. A round in the game consists of the device lighting up one or more buttons in a random order, after which the player must reproduce that order by pressing the buttons. As the game progresses, the number of buttons to be pressed increases.

### Screenshot

![](./images/StatsPreviewCard-min.jpg)

### Links

- About the game: [The Simon Game](https://en.wikipedia.org/wiki/Simon_(game)#Gameplay)
- Live Site URL: [Live](https://grifano.github.io/FrontendMentor__StatsPreviewCard/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- JavaScript
- Jquery

### What I learned
- Adding and removing class from element using Jquery methods
- Catching an events
- Playing sound
- Combining the string and variable for using like a input for function
- Using anonymous function

This small piece of code make the game make a sound 😀

```JavaScript
// Playing the sound
function playSound(name) {
	// Play the sound for the button colour selected.
	var sound = new Audio("sounds/" + name + ".mp3");
	sound.play();
}
```
OMG! Jquery is amazing 🤩! So easy to animate a button, What else awaits me ahead?
```Jquery
// Animate a flash to the button selected.
$(selectedBtn).fadeOut(100).fadeIn(100);
```
Simple way to add and remove a class from an element after a while
```Jquery
// Animating the clicked button
function animatePress(currentColour) {
	// Use jQuery to add this pressed class to the button that gets clicked inside animatePress().
	currentColour.addClass('pressed');
	// use Google / Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.
	setTimeout(function () {
		currentColour.removeClass('pressed');
	}, 100)
}
```

### Continued development

I want to continue to learn a JavaScript and Jquery. So many want to learn 😀

### Useful resources

- [StackOverflow - How to play sound using JavaScript?](https://stackoverflow.com/questions/9419263/how-to-play-audio) - This helped me to figure out how to play sound using JavaScript.

## Author

- Website - [Serhii "{Grifano}" Orlenko"](https://grifano.webflow.io/)
- Frontend Mentor - [@Grifano](https://www.frontendmentor.io/profile/Grifano)
- Twitter - [@Serhii Orlenko](https://twitter.com/OrlenkoSerhii)
- LinkedIn - [@Serhii Orlenko](https://www.linkedin.com/in/serhii-orlenko-44aaa4a3/)

<!-- ## Acknowledgments -->
