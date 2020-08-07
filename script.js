/* ==================>
CANVAS BEGINS
<=================== */
const heroCanvas = document.querySelector('.hero-canvas');
const contactCanvas = document.querySelector('.contact-canvas');

const heroSection = document.querySelector('.hero');
const contactSection = document.querySelector('.contact');

const heroCtx = heroCanvas.getContext('2d');
const contactCtx = contactCanvas.getContext('2d');

[heroCanvas.width, heroCanvas.height] = [heroSection.clientWidth, heroSection.clientHeight];
[contactCanvas.width, contactCanvas.height] = [contactSection.clientWidth, contactSection.clientHeight];

const noOfParticles = 400;

const contactColorArray = [
   '#2180A6',
   '#27C6FF',
   '#20A4D3',
   '#4BD4F2'
];
const heroColorArray = [
   '#a2a2a2',
   '#e4e4e4',
   '#C9C9C9'
];

let heroCircleArray = [];
let contactCircleArray = [];

class Circle {
   constructor(x, y, radius, dx, dy, ctx, colorArray, width, height) {
      this.x = x;
      this.y = y
      this.dx = dx;
      this.dy = dy;
      this.ctx = ctx,
      this.color = colorArray[Math.floor(Math.random() * colorArray.length)],
      this.width = width,
      this.height = height,
      this.radius = radius
   }

   
   draw() {
      this.ctx.beginPath();
      this.ctx.fillStyle = this.color;
      this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      this.ctx.fill();
      
   }
   
   update() {
      if (this.x + this.radius > this.width || this.x - this.radius < 0) {
         this.dx = -this.dx;
      }
      if ((this.y + this.radius > this.height || this.y - this.radius < 0)) {
         this.dy = -this.dy;
      }
      this.x += this.dx;
      this.y += this.dy;

      this.draw();
   }
}

 
function init(canvasWidth, canvasHeight, circleArray, colorArray, ctx) {
   for (let i = 0; i < noOfParticles; i++) {
      const radius = Math.random() * 2 + 1;
      let x = Math.random() * (canvasWidth - radius * 2) + radius;
      let y = Math.random() * (canvasHeight - radius * 2) + radius;
      let dx = Math.random() * 0.6;
      let dy = Math.random() * 0.6;

      circleArray.push(circle = new Circle(x, y, radius, dx, dy, ctx, colorArray, canvasWidth, canvasHeight));
   }
}

function reset() {
   
 [heroCanvas.width, heroCanvas.height] = [heroSection.clientWidth, heroSection.clientHeight];
 [contactCanvas.width, contactCanvas.height] = [contactSection.clientWidth, contactSection.clientHeight];
 
 heroCircleArray = [];
 contactCircleArray = [];

 init(heroCanvas.width, heroCanvas.height, heroCircleArray, heroColorArray, heroCtx);
 init(contactCanvas.width, contactCanvas.height, contactCircleArray,contactColorArray,contactCtx);

}

function animate() {
 requestAnimationFrame(animate);
 heroCtx.clearRect(0, 0, heroCanvas.width, heroCanvas.height);
 contactCtx.clearRect(0, 0, contactCanvas.width, contactCanvas.height);
 for (let i = 0; i < noOfParticles; i++) {
  heroCircleArray[i].update();
  contactCircleArray[i].update();
 }
}

init(heroCanvas.width, heroCanvas.height, heroCircleArray, heroColorArray, heroCtx);
init(contactCanvas.width, contactCanvas.height, contactCircleArray,contactColorArray,contactCtx);

animate();

window.addEventListener('resize', reset);
/* ==================>
CANVAS ENDS
<=================== */


/* ==================>
TYPING EFFECT
<=================== */
const typedTextSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector('.cursor');

const textArray = ['Joshysmart', 'a web developer ', 'a software engineer'];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
 if(charIndex < textArray[textArrayIndex].length) {
  if(!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
  typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
  charIndex++;
  setTimeout(type, typingDelay);
 } else {
  // errase
  cursorSpan.classList.remove('typing');
  setTimeout(erase, newTextDelay);
 }
}

function erase() {
 if (charIndex > 0) {
  if(!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
  typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
  charIndex--;
  setTimeout(erase, erasingDelay);
 } else {
  //type
  cursorSpan.classList.remove('typing');
  textArrayIndex++;
  if (textArrayIndex >= textArray.length) textArrayIndex = 0;
  setTimeout(type, typingDelay * 6);
 }
}

window.addEventListener('load', () => {
 if (textArray.length) setTimeout(type, typingDelay * 3);
})

/* ==================>
TYPING ENDS
<=================== */

/* ==================>
TOGGLE MENU
<=================== */

