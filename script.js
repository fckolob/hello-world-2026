// Getting the message element.

const message = document.getElementById("message");

// Text of the message.

const text = "HELLO WORLD!";
let index = 0;

// Using recursion to add a letter after a delay.

function showNextLetter() {
    if (index < text.length) {
        message.textContent += text[index];
        index++;
        
        setTimeout(showNextLetter, 200);

    // After the message is complete a CSS animation is aplied.

    } else {
        
        message.style.animation = "animate 2s ease-in-out";
    }
}

// Calling the execution of showNextLetter.

showNextLetter();