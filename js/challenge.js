let counterBox = document.getElementById('countera');
let plusBtn = document
  .getElementById("plus")
  .addEventListener("click", increment);
let heartBtn = document
  .getElementById("heart")
  .addEventListener("click", likeCounter);
let minusBtn = document
  .getElementById("minus")
  .addEventListener("click", decrement);
let pauseBtn = document.getElementById('pause');
let likeList = document.querySelector('.likes');
let counter = +counterBox.innerText;

//Setting counter to increment each second
setInterval(function () {
    counterBox.innerText = +counterBox.innerText + 1;
    counter += 1;
}, 1000);

//increment by 1 per click
function increment() {
    counterBox.innerText = +counterBox.innerText + 1;
    counter += 1;
};
//decrement by 1 per click
function decrement() {
    counterBox.innerText = +counterBox.innerText - 1;
    counter -= 1;
};


//appends likes, and updates the amount
let dataTracker = counterBox.innerText;
let likeAmount = 2;

function likeCounter() {
    let liLike = document.createElement("li");
    liLike.setAttribute("id", counter);
    let likeArr = [];
    let likeId = document.getElementById(counter)
    console.log(likeId);
 
        if (likeArr.includes(likeId)) {
          likeList.lastChild.innerText =
            counter + " has been liked " + likeAmount + " times.";
          likeAmount += 1;
        } else {
          liLike.innerText = counter + " has been liked 1 time.";
          likeList.appendChild(liLike);
          likeAmount = 2;
          dataTracker = counter;
        }
};


