// object
var bar = new Bar(200, 50, 800, 810, 30);
var ball = new Ball(70, 70, 850, 0);
var obt = new Obstacle(148, 70);
// call element
let px = "px";
let img_bar = document.getElementById("img_bar");
let img_ball = document.getElementById("img_ball");
let main = document.getElementById("main");
let max = 1670;
let min = 20;
// width height ball & bar
img_bar.style.width = bar.width + px;
img_bar.style.height = bar.height + px;
img_ball.style.width = ball.width + px;
img_ball.style.height = ball.height + px;

// x  & bar
img_bar.style.left = bar.x + px;
img_bar.style.top = bar.y + px;
// y & ball
img_ball.style.left = ball.x + px;
img_ball.style.top = ball.y + px;
// arr
let arr = [];
for (let i = 0; i < 24; i++) {
  arr[
    i
  ] = `<img id="${i}"  style="width: ${obt.width}px ; height:${obt.height}px " class="imd_obstacel" src="/img/obstac.jpg" />`;
}
// render obt
function renderLayout() {
  let htmls = "";
  arr.map(function (item) {
    htmls += item;
  });
  main.innerHTML = htmls;
}
renderLayout();
function left() {
  let leftMax = Number(img_bar.style.left.slice(0, -2));
  if (leftMax > min) {
    img_bar.style.left = parseInt(img_bar.style.left) - bar.speed + px;
    bar.x -= bar.speed;
  }
}
// mover Bar
function right() {
  let rightMax = Number(img_bar.style.left.slice(0, -2));
  if (rightMax < max) {
    img_bar.style.left = parseInt(img_bar.style.left) + bar.speed + px;
    bar.x += bar.speed;
  }
}
function move(evt) {
  switch (evt.keyCode) {
    case 37:
      console.log(ball.x);
      left();
      break;
    case 39:
      right();
      break;
  }
}
function onloadKey() {
  window.addEventListener("keydown", move);
}
// move ball
setInterval(() => {
  ball.moveBall();
}, 10);
