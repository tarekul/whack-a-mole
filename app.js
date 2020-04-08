const square = document.querySelectorAll(".square");
const mole = document.querySelectorAll(".mole");
const timeLeft = document.querySelector("#time-left");
let score = document.querySelector("#score");

let result = 0;
let currentTime = timeLeft.textContent;

function randomSquare() {
  square.forEach(className => {
    className.classList.remove("mole");
  });
  let randomPosition = square[Math.floor(Math.random() * 9)];
  randomPosition.classList.add("mole");

  //assign id of random position to hitPosition to user later
  hitPosition = randomPosition.id;
}

square.forEach(id => {
  id.addEventListener("mouseup", () => {
    if (id.id === hitPosition) {
      result = result + 1;
      score.textContent = result;
    }
  });
});

let moleId = null;
function moveMole() {
  moleId = setInterval(randomSquare, 1000);
}
moveMole();

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime === 0) {
    clearInterval(timerId);
    clearInterval(moleId);
    alert("GAME OVER! Your final score is " + result);
  }
}

let timerId = setInterval(countDown, 1000);
