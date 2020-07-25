const typedTextSpan = document.querySelector('.typed-text');
const textArray = ['Joshysmart', 'a web developer ', 'a software engineer'];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
 if(charIndex < textArray[textArrayIndex].length) {
  typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
  charIndex++;
  setTimeout(type, typingDelay);
 } else {
  // errase
  setTimeout(erase, newTextDelay);
 }
}

function erase() {
 if (charIndex > 0) {
  typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
  charIndex--;
  setTimeout(erase, erasingDelay);
 } else {
  //type
  textArrayIndex++;
  if (textArrayIndex >= textArray.length) textArrayIndex = 0;
  setTimeout(type, typingDelay * 5);
 }
}

window.addEventListener('load', () => {
 setTimeout(type, typingDelay * 2);
})