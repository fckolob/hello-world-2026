// Getting the message element.

const message = document.getElementById("message");

// Text of the message.

const text = "HELLO WORLD!";
let index = 0;

// Function to add the event to restart animation when clicked.

function addMessageEvent(){
    message.addEventListener("click", ()=>{
         message.style.animation = "none";
         message.offsetHeight;
         message.style.animation = "animate 2s ease-in-out";   
        })
}

// Function to await some time.

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Using recursion to add a letter after a delay.
// After the message is complete a CSS animation is aplied.
// The event to restart the css animation is added after 2 seconds to prevent
// trigering the event until the first animation is finished.


async function showNextLetter() {
    if (index < text.length) {
        message.textContent += text[index];
        index++;
        
        setTimeout(showNextLetter, 200);

    } else {
        
        message.style.animation = "animate 2s ease-in-out";
        await sleep(2000);
        addMessageEvent();
    }
}

// Calling the execution of showNextLetter.

showNextLetter();