const counterBox = document.getElementById("counter");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const heartBtn = document.getElementById("heart");
const pauseBtn = document.getElementById("pause");
const likes = document.getElementsByClassName("likes");
const commentList = document.getElementById("list");
const submitBtn = document.getElementById("submit");
let li = document.createElement("li");
let p = document.createElement("p");

let counter = 0;
let numbers = [];
let pauseBool = false;

//listeners
submitBtn.addEventListener("click", submitHandler);
pauseBtn.addEventListener("click", pauseHandler);
heartBtn.addEventListener("click", likeHandler);
minusBtn.addEventListener("click", decrement);
plusBtn.addEventListener("click", increment);

//counter goes up every second.
document.addEventListener("DOMContentLoaded", startCounter);
//starts the counter
function startCounter() {
  pauseBool === false
    ? (counter = setInterval(increment, 1000))
    : clearInterval(counter);
}
//increments counter by 1
function increment() {
  counterBox.innerText = +counterBox.innerHTML + 1;
}
//decreases counter by 1
function decrement() {
  counterBox.innerText = +counterBox.innerText - 1;
}
//captures likes, appends to ul
function likeHandler() {
  let number = counterBox.innerHTML;
  let likeCounter = 0;
  numbers.push(number);
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == number) {
      likeCounter++;
    }
  }
  likes[0].append(li);
  likes[0].children[0].innerHTML = `${number} has been liked ${likeCounter} times`;
}
//pauses functionality
function pauseHandler() {
  if (pauseBool === false) {
    disabler(true);
    startCounter();
    pauseBtn.innerHTML = "resume";
  } else {
    disabler(false);
    startCounter();
    pauseBtn.innerHTML = "pause";
  }
  console.log(pauseBool);
}
//disables buttons
function disabler(x) {
  pauseBool = x;
  plusBtn.disabled = x;
  submitBtn.disabled = x;
  minusBtn.disabled = x;
  heartBtn.disabled = x;
}
//collects input, appends to comment section
function submitHandler(e) {
  e.preventDefault();
  p.innerHTML = document.getElementById("comment-input").value;
  commentList.appendChild(p);
  document.getElementById("comment-input").value = "";
}
