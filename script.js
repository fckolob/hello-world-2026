const message = document.getElementById("message");

const text = "HELLO WORLD!";
let index = 0;

function showNextLetter() {
    if (index < text.length) {
        message.textContent += text[index];
        index++;
        
        setTimeout(showNextLetter, 200);
    } else {
        
        message.style.animation = "animate 2s ease-in-out";
    }
}


showNextLetter();