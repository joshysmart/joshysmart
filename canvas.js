const heroCanvas = document.querySelector('.hero-canvas');
const contactCanvas = document.querySelector('.contact-canvas');

const heroSection = document.querySelector('.hero');
const contactSection = document.querySelector('.contact');

const heroCtx = heroCanvas.getContext('2d');
const contactCtx = contactCanvas.getContext('2d');

const [heroWidth, heroHeight] = [heroSection.clientWidth, heroSection.clientHeight];
const [contactWidth, contactHeight] = [contactSection.clientWidth, contactSection.clientHeight];

[heroCanvas.width, heroCanvas.height] = [heroWidth, heroHeight];
[contactCanvas.width, contactCanvas.height] = [contactWidth, contactHeight];


const mouse = {
   x: undefined,
   y: undefined
};
const noOfParticles = 300;

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

// const heroColor = heroColorArray[Math.floor(Math.random() * heroColorArray.length - 1)];
// const contactColor = contactColorArray[Math.floor(Math.random() * contactColorArray.length - 1)];


window.addEventListener('mousemove', (e) => {
   mouse.x = e.x;
   mouse.y = e.y;
   // console.log(mouse.x);
})

window.addEventListener('resize', () => {
   [heroCanvas.width, heroCanvas.height] = [heroWidth, heroHeight];
   [contactCanvas.width, contactCanvas.height] = [contactWidth, contactHeight];

   init(heroWidth, heroHeight, heroCircleArray, heroColorArray, heroCtx);
   init(contactWidth, contactHeight, contactCircleArray,contactColorArray,contactCtx);
   });

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

init(heroWidth, heroHeight, heroCircleArray, heroColorArray, heroCtx);
init(contactWidth, contactHeight, contactCircleArray,contactColorArray,contactCtx);

function animate() {
   requestAnimationFrame(animate);
   heroCtx.clearRect(0, 0, heroWidth, heroHeight);
   contactCtx.clearRect(0, 0, contactWidth, contactHeight);
   for (let i = 0; i < noOfParticles; i++) {
      heroCircleArray[i].update();
      contactCircleArray[i].update();
      // console.log(heroCircleArray)
   }
}
animate();

